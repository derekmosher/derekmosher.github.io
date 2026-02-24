const fs = require('fs');
const path = require('path');

// Config
const workspaceRoot = path.join(__dirname, '..');
const projectsDir = path.join(workspaceRoot, 'projects');
const imageExts = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
const videoExts = ['.mp4', '.webm', '.mov', '.ogv'];

function isImageFile(name) {
  const ext = path.extname(name).toLowerCase();
  return imageExts.includes(ext);
}

function isVideoFile(name) {
  const ext = path.extname(name).toLowerCase();
  return videoExts.includes(ext);
}

function titleFromFilename(name) {
  return name
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/^\d+\s*/, '')
    .trim();
}

function genImageManifestForProject(projectName) {
  const imagesDir = path.join(projectsDir, projectName, 'images');
  if (!fs.existsSync(imagesDir) || !fs.statSync(imagesDir).isDirectory()) {
    console.log(`skipping ${projectName} images: no images folder`);
    return;
  }

  const files = fs.readdirSync(imagesDir).filter(f => isImageFile(f));
  if (files.length === 0) {
    console.log(`skipping ${projectName} images: images folder is empty`);
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

function genVideoManifestForProject(projectName) {
  const videoDir = path.join(projectsDir, projectName, 'video');
  if (!fs.existsSync(videoDir) || !fs.statSync(videoDir).isDirectory()) {
    console.log(`skipping ${projectName} video: no video folder`);
    return;
  }

  const files = fs.readdirSync(videoDir).filter(f => isVideoFile(f));
  if (files.length === 0) {
    console.log(`skipping ${projectName} video: video folder is empty`);
    return;
  }

  const manifest = files.map((f, i) => ({
    id: `video-${i + 1}`,
    type: 'video',
    src: `video/${f}`,
    thumbnail: '',
    title: titleFromFilename(f),
    description: ''
  }));

  const outPath = path.join(videoDir, 'manifest.json');
  fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2));
  console.log(`wrote ${outPath} (${files.length} items)`);
}

function genBannerManifestForProject(projectName) {
  const bannersDir = path.join(projectsDir, projectName, 'banners');
  if (!fs.existsSync(bannersDir) || !fs.statSync(bannersDir).isDirectory()) {
    console.log(`skipping ${projectName} banners: no banners folder`);
    return;
  }

  const sizeDirs = fs.readdirSync(bannersDir).filter((name) => {
    const full = path.join(bannersDir, name);
    return fs.statSync(full).isDirectory() && /^\d+x\d+$/i.test(name);
  });

  const entries = [];
  for (const size of sizeDirs) {
    const [width, height] = size.split('x').map(n => Number(n) || 0);
    const indexPath = path.join(bannersDir, size, 'index.html');
    if (!fs.existsSync(indexPath)) continue;

    entries.push({
      id: `banner-${entries.length + 1}`,
      type: 'banner',
      size,
      width,
      height,
      src: `banners/${size}/index.html`
    });
  }

  if (entries.length === 0) {
    console.log(`skipping ${projectName} banners: no banner index files found`);
    return;
  }

  const outPath = path.join(bannersDir, 'manifest.json');
  fs.writeFileSync(outPath, JSON.stringify(entries, null, 2));
  console.log(`wrote ${outPath} (${entries.length} items)`);
}

function main() {
  if (!fs.existsSync(projectsDir)) {
    console.error('projects directory not found at', projectsDir);
    process.exit(1);
  }

  const projectNames = fs.readdirSync(projectsDir).filter(name => {
    const full = path.join(projectsDir, name);
    return fs.statSync(full).isDirectory() && /^project-\d+/i.test(name);
  });

  if (projectNames.length === 0) {
    console.log('no project folders found under', projectsDir);
    return;
  }

  for (const projectName of projectNames) {
    genImageManifestForProject(projectName);
    genVideoManifestForProject(projectName);
    genBannerManifestForProject(projectName);
  }
}

main();
