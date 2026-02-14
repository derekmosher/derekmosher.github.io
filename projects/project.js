// Portfolio page data - will be auto-loaded from images folder
let portfolioItems = [];
let activeProjectFolder = null;

function resolveProjectFolder() {
  const queryProject = new URLSearchParams(window.location.search).get('project');
  if (queryProject && /^project-\d+$/i.test(queryProject)) {
    return queryProject;
  }

  const parts = window.location.pathname.split('/').filter(Boolean);
  for (let i = parts.length - 2; i >= 0; i--) {
    if (/^project-\d+$/i.test(parts[i])) {
      return parts[i];
    }
  }

  return 'project-01';
}

function normalizeProjectAssetPath(projectFolder, assetPath) {
  if (!assetPath) return '';
  if (/^(https?:)?\/\//i.test(assetPath) || assetPath.startsWith('/')) return assetPath;

  const normalized = assetPath.replace(/^\.\//, '');
  if (normalized.startsWith(`${projectFolder}/`)) return normalized;
  return `${projectFolder}/${normalized}`;
}

// Function to load portfolio metadata from config file
async function loadPortfolioConfig() {
  try {
    const projectFolder = resolveProjectFolder();
    activeProjectFolder = projectFolder;

    // Try several likely locations for config.json
    const candidates = ['./config.json', '/projects/config.json', '../config.json', '/config.json'];
    let config = null;
    for (const url of candidates) {
      try {
        const resp = await fetch(url);
        if (resp.ok) { config = await resp.json(); break; }
      } catch (e) {
        // continue to next candidate
      }
    }

    if (!config) {
      console.log('No config.json found at expected locations');
      return;
    }

    const projectConfig = config[projectFolder];
    if (!projectConfig) {
      console.log('No entry for', projectFolder, 'in config.json');
      return;
    }

    // Update HTML elements with config data
    const typeEl = document.getElementById('portfolio-type');
    const clientEl = document.getElementById('portfolio-client');
    const descEl = document.getElementById('portfolio-description');

    const setMetaLine = (element, label, value) => {
      if (!element || !value) return;
      element.innerHTML = '';
      const labelSpan = document.createElement('span');
      labelSpan.className = 'meta-label';
      labelSpan.textContent = label;
      const valueSpan = document.createElement('span');
      valueSpan.className = 'meta-value';
      valueSpan.textContent = ` ${value}`;
      element.appendChild(labelSpan);
      element.appendChild(valueSpan);
    };

    if (typeEl && projectConfig.title) setMetaLine(typeEl, 'PROJECT:', projectConfig.title);
    else if (typeEl && projectConfig.type) setMetaLine(typeEl, 'PROJECT:', projectConfig.type.replace(/:$/, ''));
    if (clientEl && projectConfig.client) setMetaLine(clientEl, 'CLIENT:', projectConfig.client);
    if (descEl && projectConfig.description) setMetaLine(descEl, 'DESCRIPTION:', projectConfig.description);

    if (projectConfig.title) {
      document.title = `${projectConfig.title} - Derek Mosher`;
    }

    console.log('Portfolio config loaded for', projectFolder);
    return projectConfig;
  } catch (e) {
    console.log('Could not load portfolio config:', e);
  }
}

// Function to auto-detect and load images from the images folder
async function loadImagesFromFolder() {
  const imageFolder = `${activeProjectFolder || resolveProjectFolder()}/images/`;
  const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp'];
  
  // Try to fetch a manifest file first (set up by server or manually)
  try {
    const response = await fetch(imageFolder + 'manifest.json');
    if (response.ok) {
      const manifestItems = await response.json();
      if (Array.isArray(manifestItems) && manifestItems.length > 0) {
        // Verify that manifest images actually exist before loading
        const verifiedItems = [];
        for (const item of manifestItems) {
          const normalizedThumbnail = normalizeProjectAssetPath(activeProjectFolder || resolveProjectFolder(), item.thumbnail || item.src);
          const normalizedSrc = normalizeProjectAssetPath(activeProjectFolder || resolveProjectFolder(), item.src || item.thumbnail);
          try {
            const imgResponse = await fetch(normalizedThumbnail, { method: 'HEAD' });
            if (imgResponse.ok) {
              verifiedItems.push({
                ...item,
                src: normalizedSrc,
                thumbnail: normalizedThumbnail
              });
            }
          } catch (e) {
            // Image doesn't exist, skip it
            console.log(`Image not found: ${normalizedThumbnail}`);
          }
        }
        
        if (verifiedItems.length > 0) {
          // Append images to any existing items (e.g., videos may already be present)
          portfolioItems = portfolioItems.concat(verifiedItems);
          renderPortfolioGrid();
          return;
        }
      }
    }
  } catch (e) {
    // No manifest file, proceed with auto-detection
    console.log('No manifest.json found, attempting auto-detection...');
  }

  // Auto-detect images by checking the folder
  const detectedImages = [];
  
  // Try to fetch directory listing if available (requires server support)
  try {
    const dirResponse = await fetch(imageFolder);
    if (dirResponse.ok && dirResponse.headers.get('content-type').includes('text/html')) {
      // If directory listing is enabled, parse the HTML
      const html = await dirResponse.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const links = doc.querySelectorAll('a[href]');
      
      links.forEach((link) => {
        const href = link.getAttribute('href');
        const ext = href.split('.').pop().toLowerCase();
        
        if (imageExtensions.includes(ext) && !href.includes('manifest')) {
          detectedImages.push({
            id: `image-${detectedImages.length + 1}`,
            type: 'image',
            src: imageFolder + href,
            thumbnail: imageFolder + href,
            title: extractTitleFromFilename(href),
            description: 'Portfolio project',
            large: detectedImages.length === 0
          });
        }
      });
    }
  } catch (e) {
    // Directory listing not available, try pattern-based detection
    console.log('Directory listing not available, using pattern detection...');
  }

  // If directory listing failed, try common naming patterns
  if (detectedImages.length === 0) {
    const commonPatterns = [
      'gallery-image_',
      'image-',
      'photo-',
      'tiles_',
      'project-'
    ];

    for (const pattern of commonPatterns) {
      for (let i = 1; i <= 50; i++) {
        for (const ext of imageExtensions) {
          const imageName = `${pattern}${i}.${ext}`;
          const imagePath = imageFolder + imageName;

          try {
            const response = await fetch(imagePath, { method: 'HEAD' });
            if (response.ok) {
              detectedImages.push({
                id: `image-${detectedImages.length + 1}`,
                type: 'image',
                src: imagePath,
                thumbnail: imagePath,
                title: extractTitleFromFilename(imageName),
                description: 'Portfolio project',
                large: detectedImages.length === 0
              });
              break;
            }
          } catch (e) {
            // Image not found, continue
          }
        }
      }
      
      if (detectedImages.length > 0) break; // Found images with this pattern
    }
  }

  if (detectedImages.length > 0) {
    // Append detected images to existing portfolio items
    portfolioItems = portfolioItems.concat(detectedImages);
  }

  // Render (if there are any items now)
  renderPortfolioGrid();
}

// Detect and load videos from the video/ folder (videos are shown first in the grid)
async function loadVideosFromFolder() {
  const videoFolder = `${activeProjectFolder || resolveProjectFolder()}/video/`;
  const videoExtensions = ['mp4', 'webm', 'mov', 'ogv'];
  const detectedVideos = [];

  // Try manifest first
  try {
    const resp = await fetch(videoFolder + 'manifest.json');
    if (resp.ok) {
      const m = await resp.json();
      if (Array.isArray(m) && m.length > 0) {
        for (const item of m) {
          if (item.type === 'video' || (item.src && videoExtensions.includes((item.src.split('.').pop() || '').toLowerCase()))) {
            const normalizedSrc = normalizeProjectAssetPath(activeProjectFolder || resolveProjectFolder(), item.src || (videoFolder + item.filename));
            const normalizedThumbnail = normalizeProjectAssetPath(activeProjectFolder || resolveProjectFolder(), item.thumbnail || '');
            detectedVideos.push({
              id: item.id || `video-${detectedVideos.length+1}`,
              type: 'video',
              src: normalizedSrc,
              thumbnail: normalizedThumbnail,
              title: item.title || 'Video',
              description: item.description || ''
            });
          }
        }
      }
    }
  } catch (e) {
    // continue to other detection techniques
  }

  // Try directory listing if available
  if (detectedVideos.length === 0) {
    try {
      const dirResp = await fetch(videoFolder);
      if (dirResp.ok && dirResp.headers.get('content-type') && dirResp.headers.get('content-type').includes('text/html')) {
        const html = await dirResp.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const links = doc.querySelectorAll('a[href]');
        links.forEach(link => {
          const href = link.getAttribute('href');
          const ext = (href.split('.').pop() || '').toLowerCase();
          if (videoExtensions.includes(ext)) {
            detectedVideos.push({
              id: `video-${detectedVideos.length+1}`,
              type: 'video',
              src: videoFolder + href,
              thumbnail: '',
              title: extractTitleFromFilename(href),
              description: ''
            });
          }
        });
      }
    } catch (e) {
      // not available
    }
  }

  // Pattern-based fallback
  if (detectedVideos.length === 0) {
    const commonNames = ['video','hero','loop','banner','intro'];
    for (const name of commonNames) {
      for (const ext of videoExtensions) {
        const path = `${videoFolder}${name}.${ext}`;
        try {
          const r = await fetch(path, { method: 'HEAD' });
          if (r.ok) {
            detectedVideos.push({
              id: `video-${detectedVideos.length+1}`,
              type: 'video',
              src: path,
              thumbnail: '',
              title: name,
              description: ''
            });
            break;
          }
        } catch (e) {
          // continue
        }
      }
      if (detectedVideos.length > 0) break;
    }
  }

  if (detectedVideos.length > 0) {
    // Render the first detected video above banners (do NOT duplicate into the image grid)
    const vid = detectedVideos[0];
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
      videoContainer.innerHTML = '';
      videoContainer.style.display = 'block';

      const videoWrapper = document.createElement('div');
      videoWrapper.className = 'video-wrapper';
      videoWrapper.style.width = '100%';
      videoWrapper.style.display = 'flex';
      videoWrapper.style.flexDirection = 'column';
      videoWrapper.style.alignItems = 'center';

      const videoEl = document.createElement('video');
      videoEl.src = vid.src;
      if (vid.thumbnail) videoEl.poster = vid.thumbnail;
      videoEl.autoplay = true; // autoplay muted for browser compatibility
      videoEl.muted = true;
      videoEl.loop = true;
      videoEl.playsInline = true;
      videoEl.preload = 'auto';
      videoEl.style.width = '100%';
      videoEl.style.height = 'auto';
      videoEl.style.maxWidth = '100%';
      videoEl.style.maxHeight = '72vh';
      videoEl.style.borderRadius = '0.75rem';
      videoEl.style.objectFit = 'contain';
      videoEl.style.display = 'block';

      // Controls container
      const controls = document.createElement('div');
      controls.className = 'video-controls';
      controls.style.display = 'flex';
      controls.style.alignItems = 'center';
      controls.style.gap = '8px';
      controls.style.marginTop = '8px';

      // Play/Pause button
      const btnPlay = document.createElement('button');
      btnPlay.className = 'vc-btn vc-play';
      btnPlay.type = 'button';
      btnPlay.textContent = 'Pause';
      btnPlay.title = 'Play/Pause';

      // Progress slider
      const progress = document.createElement('input');
      progress.type = 'range';
      progress.className = 'vc-range';
      progress.min = 0;
      progress.max = 100;
      progress.value = 0;
      progress.step = 0.1;
      progress.style.flex = '1';

      // Time display (current / duration)
      const timeEl = document.createElement('div');
      timeEl.className = 'vc-time';
      timeEl.textContent = '0:00 / 0:00';
      timeEl.style.minWidth = '90px';
      timeEl.style.textAlign = 'center';

      // Mute/Unmute button
      const btnMute = document.createElement('button');
      btnMute.className = 'vc-btn vc-mute';
      btnMute.type = 'button';
      btnMute.textContent = 'Unmute';
      btnMute.title = 'Toggle audio';

      controls.appendChild(btnPlay);
      controls.appendChild(progress);
      controls.appendChild(timeEl);
      controls.appendChild(btnMute);

      videoWrapper.appendChild(videoEl);
      videoWrapper.appendChild(controls);
      videoContainer.appendChild(videoWrapper);

      // Wire up controls
      btnPlay.addEventListener('click', () => {
        if (videoEl.paused) {
          videoEl.play();
          btnPlay.textContent = 'Pause';
        } else {
          videoEl.pause();
          btnPlay.textContent = 'Play';
        }
      });

      // Helper to format time
      function formatTime(s) {
        if (!s || isNaN(s) || !isFinite(s)) return '0:00';
        const sec = Math.floor(s % 60).toString().padStart(2, '0');
        const min = Math.floor(s / 60);
        return `${min}:${sec}`;
      }

      // Update progress and time display as video plays
      videoEl.addEventListener('timeupdate', () => {
        if (videoEl.duration && !isSeeking) {
          progress.max = videoEl.duration;
          progress.value = videoEl.currentTime;
          timeEl.textContent = `${formatTime(videoEl.currentTime)} / ${formatTime(videoEl.duration)} `;
        }
      });

      // Allow seeking
      let isSeeking = false;
      progress.addEventListener('input', () => {
        isSeeking = true;
        videoEl.currentTime = Number(progress.value);
        timeEl.textContent = `${formatTime(Number(progress.value))} / ${formatTime(videoEl.duration || 0)}`;
      });
      progress.addEventListener('change', () => { isSeeking = false; });

      // Mute toggle
      btnMute.addEventListener('click', () => {
        videoEl.muted = !videoEl.muted;
        btnMute.textContent = videoEl.muted ? 'Unmute' : 'Mute';
      });

      // Ensure labels match initial state
      btnPlay.textContent = videoEl.paused ? 'Play' : 'Pause';
      btnMute.textContent = videoEl.muted ? 'Unmute' : 'Mute';

      // Initialize time once metadata is available
      if (videoEl.readyState >= 1) {
        timeEl.textContent = `${formatTime(videoEl.currentTime)} / ${formatTime(videoEl.duration || 0)}`;
        progress.max = videoEl.duration || 0;
        progress.value = videoEl.currentTime || 0;
      }

      // When metadata is loaded, set progress max
      videoEl.addEventListener('loadedmetadata', () => {
        if (videoEl.duration) progress.max = videoEl.duration;
      });

      // Clicking video toggles play/pause
      videoEl.addEventListener('click', () => {
        if (videoEl.paused) { videoEl.play(); btnPlay.textContent = 'Pause'; }
        else { videoEl.pause(); btnPlay.textContent = 'Play'; }
      });

      // Keep play/pause button in sync with playback state
      videoEl.addEventListener('play', () => { btnPlay.textContent = 'Pause'; });
      videoEl.addEventListener('pause', () => { btnPlay.textContent = 'Play'; });
      videoEl.addEventListener('ended', () => { btnPlay.textContent = 'Play'; });

      // Try to start playback (some browsers require a play() call even when autoplay=true)
      try { videoEl.play().catch(() => {}); } catch (e) {}
      console.log('Rendered video in video-container:', vid.src);
    }
  }
}

// Load HTML banners from the banners/ folder if present
async function loadBannersFromFolder() {
  // Render order: 300x600, 160x600, 300x250, 728x90
  const sizes = ['300x600','160x600','300x250','728x90'];
  const bannersRoot = `${activeProjectFolder || resolveProjectFolder()}/banners/`;
  const container = document.getElementById('banners-container');
  if (!container) return;

  const found = [];
  for (const size of sizes) {
    const indexPath = `${bannersRoot}${size}/index.html`;
    try {
      // Try HEAD first; some servers may not support HEAD so fall back to GET
      let ok = false;
      try {
        const headResp = await fetch(indexPath, { method: 'HEAD' });
        ok = headResp && headResp.ok;
      } catch (e) {
        ok = false;
      }

      if (!ok) {
        try {
          const getResp = await fetch(indexPath, { method: 'GET' });
          ok = getResp && getResp.ok;
        } catch (e) {
          ok = false;
        }
      }

      if (ok) found.push({ size, path: indexPath });
    } catch (e) {
      // ignore and continue
    }
  }

  if (found.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.innerHTML = '';
  container.style.display = 'flex';
  container.style.gap = '12px';
  container.style.flexWrap = 'wrap';
  container.style.alignItems = 'center';

  found.forEach(b => {
    const [w, h] = b.size.split('x').map(n => Number(n) || 0);
    const wrapper = document.createElement('div');
    wrapper.className = 'banner-item';
    wrapper.style.width = `${w}px`;
    // Add a small buffer to height so the iframe content doesn't produce a scrollbar
    const heightBuffer = 12; // pixels of extra space to avoid scrollbars
    const replayButtonSpace = 34; // space to accommodate the replay button
    // Make wrapper allow visible overflow so the replay button is not clipped
    wrapper.style.overflow = 'visible';
    wrapper.style.height = `${h + heightBuffer + replayButtonSpace}px`;
    wrapper.style.border = '1px solid rgba(255,255,255,0.04)';
    wrapper.style.background = 'transparent';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';
    wrapper.style.justifyContent = 'center';

    const iframe = document.createElement('iframe');
    iframe.src = b.path;
    iframe.width = w || '300';
    // Make the iframe slightly taller than the declared banner height
    iframe.height = (h ? (h + heightBuffer) : 250);
    iframe.scrolling = 'no';
    iframe.style.display = 'block';
    iframe.style.lineHeight = '0';
    iframe.style.border = '0';
    iframe.loading = 'lazy';
    iframe.sandbox = 'allow-scripts allow-same-origin allow-popups';

    wrapper.appendChild(iframe);

    // Add a small replay button under each banner to replay that specific banner
    const btn = document.createElement('button');
    btn.className = 'banner-replay-btn';
    btn.textContent = 'Replay';
    btn.setAttribute('aria-label', `Replay banner ${b.size}`);
    btn.style.marginTop = '0px';
    btn.style.fontSize = '12px';
    btn.style.padding = '6px 10px';
    btn.style.borderRadius = '6px';
    btn.style.border = '1px solid rgba(255,255,255,0.06)';
    btn.style.cursor = 'pointer';

    btn.addEventListener('click', () => {
      // Reload only this iframe. Use a cache-busting param so reload works reliably.
      try {
        const src = iframe.src || b.path;
        const sep = src.includes('?') ? '&' : '?';
        iframe.src = src.split('?')[0] + sep + '_replay=' + Date.now();
      } catch (e) {
        // As a fallback, set src directly
        iframe.src = b.path;
      }
      // Provide a quick visual feedback
      btn.disabled = true;
      setTimeout(() => { btn.disabled = false; }, 800);
    });

    wrapper.appendChild(btn);
    container.appendChild(wrapper);
  });
}

// Helper function to extract readable title from filename
function extractTitleFromFilename(filename) {
  return filename
    .replace(/\.[^/.]+$/, '') // Remove extension
    .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
    .replace(/^\d+\s+/, '') // Remove leading numbers
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .substring(0, 50); // Limit to 50 characters
}

// Render portfolio grid
function renderPortfolioGrid() {
  const grid = document.getElementById('portfolio-grid');
  grid.innerHTML = '';

  portfolioItems.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = `portfolio-item reveal ${item.large ? 'large' : ''}`;
    div.style.transitionDelay = `${i * 0.1}s`;

    if (item.type === 'image') {
      div.innerHTML = `
        <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" />
      `;
    } else if (item.type === 'video') {
      div.innerHTML = `
        <video src="${item.src}" poster="${item.thumbnail}" style="width: 100%; height: 100%; object-fit: cover;"></video>
        <div class="absolute inset-0 flex items-center justify-center" style="background: rgba(0,0,0,0.3);">
          <svg width="60" height="60" fill="currentColor" style="color: white; opacity: 0.8;">
            <polygon points="0 0 60 30 0 60" />
          </svg>
        </div>
      `;
    }

    div.addEventListener('click', () => openPortfolioLightbox(item));
    grid.appendChild(div);
  });
}

// Open lightbox
function openPortfolioLightbox(item) {
  const lb = document.getElementById('portfolio-lightbox');
  const body = document.getElementById('portfolio-lightbox-body');

  if (item.type === 'image') {
    body.innerHTML = `<img src="${item.src}" alt="${item.title}" />`;
  } else if (item.type === 'video') {
    body.innerHTML = `
      <video
        src="${item.src}"
        controls
        autoplay
        style="width: 100%; max-width: 900px; border-radius: 0.75rem; background: #000;"
      ></video>
    `;
  }

  lb.classList.add('active');
}

// Close lightbox
function closePortfolioLightbox() {
  document.getElementById('portfolio-lightbox').classList.remove('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', async () => {
  loadPortfolioConfig();
  // Load videos first, then banners, then images so the grid order is: video(s) -> images
  await loadVideosFromFolder();
  await loadBannersFromFolder();
  await loadImagesFromFolder();

  // Close lightbox on backdrop click
  document.getElementById('portfolio-lightbox-backdrop').addEventListener('click', closePortfolioLightbox);

  // Close lightbox on close button click
  document.getElementById('portfolio-lightbox-close').addEventListener('click', closePortfolioLightbox);

  // Close lightbox on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePortfolioLightbox();
    }
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Apply config from SDK
  if (window.elementSdk) {
    window.elementSdk.init({
      defaultConfig: {
        designer_name: 'Derek Mosher',
        project_description: 'Project description goes here'
      },
      onConfigChange: async (config) => {
        if (config.designer_name) {
          document.getElementById('nav-name').textContent = config.designer_name;
          document.getElementById('footer-name').textContent = config.designer_name;
        }
        if (config.project_description) {
          document.getElementById('portfolio-description').textContent = config.project_description;
        }
      }
    });
  }
});
