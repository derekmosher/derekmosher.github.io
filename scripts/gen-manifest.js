const fs = require('fs');
const path = require('path');

// Config
const workspaceRoot = path.join(__dirname, '..');
const projectsDir = path.join(workspaceRoot, 'projects');
const imageExts = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

function isImageFile(name) {
  const ext = path.extname(name).toLowerCase();
  return imageExts.includes(ext);
}

function titleFromFilename(name) {
  return name
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/^\d+\s*/, '')
    .trim();
}

function genManifestForProject(projectName) {
  const imagesDir = path.join(projectsDir, projectName, 'images');
  if (!fs.existsSync(imagesDir) || !fs.statSync(imagesDir).isDirectory()) {
    console.log(`skipping ${projectName}: no images folder`);
    return;
  }

  const files = fs.readdirSync(imagesDir).filter(f => isImageFile(f));
  if (files.length === 0) {
    console.log(`skipping ${projectName}: images folder is empty`);
    return;
  }

  const manifest = files.map((f, i) => ({
    id: `${projectName}-${i+1}`,
    type: 'image',
    src: `images/${f}`,
    thumbnail: `images/${f}`,
    title: titleFromFilename(f),
    description: '',
    large: i === 0
  }));

  const outPath = path.join(imagesDir, 'manifest.json');
  fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2));
  console.log(`wrote ${outPath} (${files.length} items)`);
}

function main() {
  if (!fs.existsSync(projectsDir)) {
    console.error('projects directory not found at', projectsDir);
    process.exit(1);
  }

  const projectNames = fs.readdirSync(projectsDir).filter(name => {
    const full = path.join(projectsDir, name);
    return fs.statSync(full).isDirectory();
  });

  if (projectNames.length === 0) {
    console.log('no project folders found under', projectsDir);
    return;
  }

  for (const projectName of projectNames) {
    genManifestForProject(projectName);
  }
}

main();
