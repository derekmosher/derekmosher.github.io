const fs = require('fs');
const path = require('path');

const workspaceRoot = path.join(__dirname, '..');
const projectsDir = path.join(workspaceRoot, 'projects');
const configPath = path.join(projectsDir, 'config.json');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function exists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (e) {
    return false;
  }
}

function listProjects() {
  return fs.readdirSync(projectsDir).filter((name) => {
    const full = path.join(projectsDir, name);
    if (!fs.statSync(full).isDirectory()) return false;
    if (/\btemp\b/i.test(name)) return false;
    if (/\barchive\b/i.test(name)) return false;
    return /^project-\d+/i.test(name);
  });
}

function validateManifest(projectName, folderName, manifestPath) {
  const errors = [];
  if (!exists(manifestPath)) return errors;

  let items;
  try {
    items = readJson(manifestPath);
  } catch (e) {
    errors.push(`${projectName}/${folderName}: invalid JSON in manifest.json`);
    return errors;
  }

  if (!Array.isArray(items)) {
    errors.push(`${projectName}/${folderName}: manifest.json is not an array`);
    return errors;
  }

  const projectRoot = path.join(projectsDir, projectName);
  for (const item of items) {
    const src = item && item.src ? String(item.src) : '';
    const thumb = item && item.thumbnail ? String(item.thumbnail) : '';
    if (src) {
      const srcPath = path.join(projectRoot, src);
      if (!exists(srcPath)) {
        errors.push(`${projectName}/${folderName}: missing src ${src}`);
      }
    }
    if (thumb) {
      const thumbPath = path.join(projectRoot, thumb);
      if (!exists(thumbPath)) {
        errors.push(`${projectName}/${folderName}: missing thumbnail ${thumb}`);
      }
    }
  }

  return errors;
}

function main() {
  if (!exists(projectsDir)) {
    console.error('projects directory not found at', projectsDir);
    process.exit(1);
  }

  const projects = listProjects();
  const errors = [];

  let config = null;
  if (exists(configPath)) {
    try {
      config = readJson(configPath);
    } catch (e) {
      errors.push('projects/config.json: invalid JSON');
    }
  } else {
    errors.push('projects/config.json: missing file');
  }

  for (const projectName of projects) {
    if (config && !config[projectName]) {
      errors.push(`${projectName}: missing config entry`);
    }

    const imagesManifest = path.join(projectsDir, projectName, 'images', 'manifest.json');
    const videoManifest = path.join(projectsDir, projectName, 'video', 'manifest.json');
    const bannersManifest = path.join(projectsDir, projectName, 'banners', 'manifest.json');

    errors.push(...validateManifest(projectName, 'images', imagesManifest));
    errors.push(...validateManifest(projectName, 'video', videoManifest));
    errors.push(...validateManifest(projectName, 'banners', bannersManifest));
  }

  if (errors.length) {
    console.error('Manifest validation failed:');
    for (const err of errors) console.error(`- ${err}`);
    process.exit(1);
  }

  console.log('Manifest validation passed.');
}

main();
