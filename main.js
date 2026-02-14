// Gallery data with detailed project info
const galleryItems = [
  { 
    id: 'aura-branding',
    title: 'Blue Ally', 
    thumbnail: '/images/gallery-image_1.jpg',
    category: 'Brand Identity', 
    colors: ['#d4ff2b', '#1a1a1a', '#2a2a2a'], 
    pattern: 'circles',
    description: 'A comprehensive brand identity system designed for a luxury wellness brand. This project encompassed logo design, color palette development, typography selection, and brand guidelines. The design reflects the brand\'s core values of sophistication, tranquility, and modern elegance.',
    images: [
      { type: 'image', title: 'Brand Color Palette' },
      { type: 'image', title: 'Logo Variations' },
      { type: 'image', title: 'Brand Guidelines' },
    ],
    video: { title: 'Brand Animation', duration: '1:20' }
  },
  { 
    id: 'neon-editorial',
    title: 'Neon Editorial', 
    thumbnail: '/images/gallery-image_2.jpg',
    category: 'Print Design', 
    colors: ['#ff6b9d', '#1a1a1a', '#c44569'], 
    pattern: 'stripes',
    description: 'An avant-garde editorial magazine design featuring bold typography and vibrant neon color schemes. This project explored the intersection of digital and print design, creating a visually striking publication that pushes creative boundaries.',
    images: [
      { type: 'image', title: 'Magazine Cover' },
      { type: 'image', title: 'Interior Spreads' },
      { type: 'image', title: 'Typography Details' },
    ],
    video: { title: 'Magazine Showcase', duration: '0:45' }
  },
  { 
    id: 'vertex-ui',
    title: 'Vertex UI Kit', 
    category: 'UI/UX', 
    thumbnail: '/images/gallery-image_11.jpg',
    colors: ['#6c5ce7', '#1a1a1a', '#a29bfe'], 
    pattern: 'grid',
    description: 'A comprehensive UI kit designed for digital product design. Vertex includes 50+ components, detailed usage guidelines, and accessibility standards. This design system was built for scalability and consistency across multiple product interfaces.',
    images: [
      { type: 'image', title: 'Component Library' },
      { type: 'image', title: 'Design Tokens' },
      { type: 'image', title: 'UI Patterns' },
    ],
    video: { title: 'Component Showcase', duration: '2:15' }
  },
  { 
    id: 'botanic-packaging',
    title: 'Botanic Packaging', 
    category: 'Packaging', 
    colors: ['#00b894', '#1a1a1a', '#55efc4'], 
    thumbnail: '/images/gallery-image_12.jpg',
    
    pattern: 'leaves',
    description: 'Sustainable packaging design for an organic skincare line. The design emphasizes eco-friendliness through the use of natural colors, botanical illustrations, and minimalist typography. This project combines aesthetics with environmental responsibility.',
    images: [
      { type: 'image', title: 'Package Design' },
      { type: 'image', title: 'Label Variations' },
      { type: 'image', title: 'Unboxing Experience' },
    ],
    video: { title: 'Packaging Details', duration: '1:10' }
  },
  { 
    id: 'monochrome-series',
    title: 'Monochrome Series', 
    category: 'Typography', 
    colors: ['#f0ece4', '#1a1a1a', '#636e72'], 
    thumbnail: '/images/gallery-image_3.jpg',
    pattern: 'typo',
    description: 'An experimental typography project exploring the beauty of monochromatic design. This series showcases different typeface combinations, spatial relationships, and hierarchies in a minimalist, elegant way.',
    images: [
      { type: 'image', title: 'Typography Exploration 1' },
      { type: 'image', title: 'Typography Exploration 2' },
      { type: 'image', title: 'Type Specimens' },
    ],
    video: { title: 'Typography Animation', duration: '1:30' }
  },
  { 
    id: 'solar-poster',
    title: 'Solar Poster', 
    category: 'Illustration', 
    colors: ['#fdcb6e', '#1a1a1a', '#e17055'], 
    thumbnail: '/images/gallery-image_13.jpg',
    pattern: 'solar',
    description: 'A stunning illustrated poster celebrating renewable energy and solar innovation. This project combines hand-drawn elements with digital design, creating a vibrant and inspiring visual narrative about sustainability.',
    images: [
      { type: 'image', title: 'Main Poster' },
      { type: 'image', title: 'Illustration Details' },
      { type: 'image', title: 'Print Application' },
    ],
    video: { title: 'Poster Animation', duration: '0:50' }
  },
    { 
    id: 'solar-poster',
    title: 'Test Item 1', 
    category: 'Illustration', 
    colors: ['#fdcb6e', '#1a1a1a', '#e17055'], 
    thumbnail: '/images/gallery-image_14.jpg',
    pattern: 'solar',
    description: 'A stunning illustrated poster celebrating renewable energy and solar innovation. This project combines hand-drawn elements with digital design, creating a vibrant and inspiring visual narrative about sustainability.',
    images: [
      { type: 'image', title: 'Main Poster' },
      { type: 'image', title: 'Illustration Details' },
      { type: 'image', title: 'Print Application' },
    ],
    video: { title: 'Poster Animation', duration: '0:50' }
  },
];

// SVG generators for gallery items
function generateGallerySVG(item, w, h) {
  const [c1, c2, c3] = item.colors;
  let shapes = '';
  switch(item.pattern) {
    case 'circles':
      shapes = `<circle cx="${w*0.3}" cy="${h*0.4}" r="${w*0.2}" fill="${c1}" opacity="0.8"/>
                <circle cx="${w*0.7}" cy="${h*0.6}" r="${w*0.15}" fill="${c3}" opacity="0.5"/>
                <circle cx="${w*0.5}" cy="${h*0.3}" r="${w*0.08}" fill="${c1}" opacity="0.4"/>`;
      break;
    case 'stripes':
      for (let i = 0; i < 8; i++) {
        shapes += `<rect x="${i * w/8}" y="0" width="${w/16}" height="${h}" fill="${i%2===0 ? c1 : c3}" opacity="${0.3 + i*0.08}" transform="rotate(${15}, ${w/2}, ${h/2})"/>`;
      }
      break;
    case 'grid':
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          shapes += `<rect x="${x*w/5 + 10}" y="${y*h/5 + 10}" width="${w/6}" height="${h/6}" rx="4" fill="${(x+y)%2===0 ? c1 : c3}" opacity="${0.2 + (x+y)*0.05}"/>`;
        }
      }
      break;
    case 'leaves':
      shapes = `<ellipse cx="${w*0.3}" cy="${h*0.5}" rx="${w*0.15}" ry="${w*0.25}" fill="${c1}" opacity="0.6" transform="rotate(-30, ${w*0.3}, ${h*0.5})"/>
                <ellipse cx="${w*0.6}" cy="${h*0.4}" rx="${w*0.12}" ry="${w*0.2}" fill="${c3}" opacity="0.5" transform="rotate(20, ${w*0.6}, ${h*0.4})"/>
                <ellipse cx="${w*0.7}" cy="${h*0.7}" rx="${w*0.1}" ry="${w*0.18}" fill="${c1}" opacity="0.3" transform="rotate(-10, ${w*0.7}, ${h*0.7})"/>`;
      break;
    case 'typo':
      shapes = `<text x="${w*0.1}" y="${h*0.45}" font-family="'DM Serif Display', serif" font-size="${w*0.35}" fill="${c1}" opacity="0.15">Aa</text>
                <text x="${w*0.4}" y="${h*0.8}" font-family="'DM Serif Display', serif" font-size="${w*0.2}" fill="${c3}" opacity="0.2">Bb</text>`;
      break;
    case 'solar':
      shapes = `<circle cx="${w*0.5}" cy="${h*0.45}" r="${w*0.18}" fill="${c1}" opacity="0.8"/>`;
      for (let i = 0; i < 12; i++) {
        const angle = (i * 30) * Math.PI / 180;
        const x1 = w*0.5 + Math.cos(angle)*w*0.25;
        const y1 = h*0.45 + Math.sin(angle)*w*0.25;
        const x2 = w*0.5 + Math.cos(angle)*w*0.35;
        const y2 = h*0.45 + Math.sin(angle)*w*0.35;
        shapes += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c3}" stroke-width="2" opacity="0.6"/>`;
      }
      break;
  }
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;"><rect width="${w}" height="${h}" fill="${c2}"/>${shapes}</svg>`;
}

function generateVideoSVG(item, w, h) {
  const c = item.accent;
  let shapes = '';
  switch(item.shapes) {
    case 'motion1':
      for (let i = 0; i < 5; i++) {
        shapes += `<rect x="${w*0.1 + i*w*0.15}" y="${h*0.3 + i*10}" width="${w*0.12}" height="${h*0.35 - i*15}" rx="4" fill="${c}" opacity="${0.3 + i*0.12}"/>`;
      }
      break;
    case 'motion2':
      shapes = `<circle cx="${w*0.35}" cy="${h*0.5}" r="${w*0.12}" fill="${c}" opacity="0.4"/>
                <circle cx="${w*0.55}" cy="${h*0.45}" r="${w*0.08}" fill="${c}" opacity="0.6"/>
                <circle cx="${w*0.7}" cy="${h*0.55}" r="${w*0.05}" fill="${c}" opacity="0.8"/>`;
      break;
    case 'motion3':
      shapes = `<text x="${w*0.1}" y="${h*0.55}" font-family="'DM Serif Display', serif" font-size="${h*0.3}" fill="${c}" opacity="0.2">TITLE</text>`;
      break;
    case 'motion4':
      for (let i = 0; i < 3; i++) {
        shapes += `<rect x="${w*0.15}" y="${h*0.25 + i*h*0.18}" width="${w*0.7 - i*w*0.15}" height="${h*0.1}" rx="20" fill="${c}" opacity="${0.25 + i*0.2}"/>`;
      }
      break;
  }
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;"><rect width="${w}" height="${h}" fill="#1a1a1a"/>${shapes}</svg>`;
}



// Load projects from config
let projectsData = [];

async function loadProjectsFromConfig() {
  try {
    const response = await fetch('projects/config.json');
    const config = await response.json();
    
    // Convert config object to array
    projectsData = Object.entries(config).map(([id, project]) => ({
      id,
      ...project
    }));
    
    renderGallery();
    observeReveals();
  } catch (error) {
    console.error('Failed to load projects config:', error);
    // Render empty or show error message
    renderGallery();
    observeReveals();
  }
}

// Render gallery
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  
  projectsData.forEach((project, i) => {
    const div = document.createElement('div');
    div.className = `gallery-item reveal rounded-xl overflow-hidden cursor-pointer relative`;
    div.style.transitionDelay = `${i * 0.1}s`;
    div.style.aspectRatio = '1/1';

    div.innerHTML = `
      <div class="absolute inset-0 w-full h-full">
        <img src="${project.thumbnail}" alt="${project.title}" class="w-full h-full object-cover" />
      </div>
      <div class="overlay absolute inset-0 flex flex-col justify-end p-6" style="background: linear-gradient(transparent 30%, rgba(14,14,14,0.97));">
        <p class="text-sm tracking-widest uppercase mb-1" style="color: var(--accent);">${project.client}</p>
        <p class="font-display text-xl" style="color: var(--text);">${project.title}</p>
      </div>
    `;
    
    // Navigate to project page on click
    div.addEventListener('click', () => {
      window.location.href = project.link;
    });
    
    grid.appendChild(div);
  });
}

// Lightbox
function openLightbox(item) {
  const lb = document.getElementById('lightbox');
  const body = document.getElementById('lightbox-body');
  const imgUrl = item.largeImage || `/images/${item.id}-large.jpg`;
  body.innerHTML = `
    <div style="width: min(900px, 85vw); aspect-ratio: 4/3;">
      <img src="${imgUrl}" alt="${item.title}" class="w-full h-full object-cover" />
    </div>
    <div class="p-6" style="background: var(--surface);">
      <p class="text-xs tracking-widest uppercase mb-1" style="color: var(--accent);">${item.category}</p>
      <p class="font-display text-2xl" style="color: var(--text);">${item.title}</p>
    </div>
  `;
  lb.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

// Open full project detail page
function openProjectDetail(project) {
  // Generate content with images and video
  const contentDiv = document.getElementById('project-detail-content');
  contentDiv.innerHTML = '';

  // Add images
  project.images.forEach((img, i) => {
    const div = document.createElement('div');
    div.className = 'w-full rounded-2xl overflow-hidden';
    div.style.aspectRatio = '16/9';
    div.innerHTML = `
      <div style="width:100%; height:100%; background: linear-gradient(135deg, ${project.colors[0]} 0%, ${project.colors[2]} 100%); display: flex; align-items: center; justify-content: center;">
        <div style="text-align: center;">
          <p class="font-display text-3xl mb-2" style="color: ${project.colors[1]}; opacity: 0.8;">${img.title}</p>
          <p style="color: ${project.colors[1]}; opacity: 0.6;">Image ${i + 1}</p>
        </div>
      </div>
    `;
    contentDiv.appendChild(div);
  });

  // Add video section
  const videoDiv = document.createElement('div');
  videoDiv.className = 'w-full rounded-2xl overflow-hidden';
  videoDiv.style.aspectRatio = '16/9';
  videoDiv.style.background = '#1a1a1a';
  videoDiv.style.display = 'flex';
  videoDiv.style.alignItems = 'center';
  videoDiv.style.justifyContent = 'center';
  videoDiv.style.position = 'relative';

  videoDiv.innerHTML = `
    <svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;inset:0;"><rect width="800" height="450" fill="#1a1a1a"/></svg>
    <div style="position:relative;z-index:10;text-align:center;">
      <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style="background: ${project.colors[0]};">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="#0e0e0e"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <p class="font-display text-2xl mb-2" style="color: var(--text);">${project.video.title}</p>
      <p style="color: var(--accent2);">Duration: ${project.video.duration}</p>
    </div>
  `;
  contentDiv.appendChild(videoDiv);

  // Hide hero, marquee, gallery, and other sections
  document.getElementById('hero').classList.add('hidden');
  const marquee = document.querySelector('.marquee-track').parentElement;
  marquee.classList.add('hidden');
  document.getElementById('work').classList.add('hidden');
  document.getElementById('about').classList.add('hidden');
  document.getElementById('contact').classList.add('hidden');
  document.getElementById('project-detail-page').classList.remove('hidden');

  // Scroll to top
  document.getElementById('app-wrapper').scrollTop = 0;
}

// Back to gallery
function backToGallery() {
  document.getElementById('hero').classList.remove('hidden');
  const marquee = document.querySelector('.marquee-track').parentElement;
  marquee.classList.remove('hidden');
  document.getElementById('work').classList.remove('hidden');
  document.getElementById('about').classList.remove('hidden');
  document.getElementById('contact').classList.remove('hidden');
  document.getElementById('project-detail-page').classList.add('hidden');
  document.getElementById('app-wrapper').scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

function initMainNavInteractions() {
  const navLogo = document.getElementById('nav-logo');
  const navHomeBtn = document.getElementById('nav-home-btn');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (navLogo) {
    navLogo.addEventListener('click', (e) => {
      e.preventDefault();
      backToGallery();
    });
  }

  if (navHomeBtn) {
    navHomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      backToGallery();
    });
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  document.querySelectorAll('header a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      const wrapper = document.getElementById('app-wrapper');
      if (!targetEl || !wrapper) return;

      e.preventDefault();
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetTop = targetEl.offsetTop - headerHeight;
      wrapper.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMainNavInteractions);
} else {
  initMainNavInteractions();
}

// Intersection Observer for reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

function observeReveals() {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Initialize
observeReveals();
loadProjectsFromConfig();

// Element SDK
const defaultConfig = {
  designer_name: 'Derek Mosher',
  designer_tagline: 'Crafting visual stories that resonate — from brand identities to motion design.',
  work_heading: 'Selected Work',
  video_heading: 'Video Reels',
  about_heading: 'Creative by Nature',
  about_text: "I'm a multidisciplinary graphic designer with 8+ years of experience shaping brands, creating motion pieces, and designing digital experiences. I believe every pixel should serve a purpose and every frame should tell a story.",
  contact_heading: 'Start a Project',
  contact_email: 'derekmosher@gmail.com',
  background_color: '#0e0e0e',
  surface_color: '#1a1a1a',
  text_color: '#f0ece4',
  accent_color: '#d4ff2b',
  secondary_color: '#7a7a6e',
  font_family: 'DM Serif Display',
  font_size: 16
};

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };
  const font = c.font_family || defaultConfig.font_family;
  const baseSize = c.font_size || defaultConfig.font_size;

  // Colors
  document.documentElement.style.setProperty('--bg', c.background_color);
  document.documentElement.style.setProperty('--surface', c.surface_color);
  document.documentElement.style.setProperty('--text', c.text_color);
  document.documentElement.style.setProperty('--accent', c.accent_color);
  document.documentElement.style.setProperty('--accent2', c.secondary_color);

  document.body.style.background = c.background_color;
  document.body.style.color = c.text_color;

  // Text content
  document.getElementById('hero-name').textContent = c.designer_name;
  document.getElementById('nav-name').textContent = c.designer_name;
  document.getElementById('footer-name').textContent = c.designer_name;
  document.getElementById('work-title').textContent = c.work_heading;
  document.getElementById('video-title').textContent = c.video_heading;
  document.getElementById('about-title').textContent = c.about_heading;
  document.getElementById('about-desc').textContent = c.about_text;
  document.getElementById('contact-title').textContent = c.contact_heading;
  document.getElementById('contact-email-text').textContent = c.contact_email;
  const emailLink = document.getElementById('contact-email-link');
  emailLink.href = `mailto:${c.contact_email}`;
  // open in new tab so it doesn't replace main.html
  emailLink.setAttribute('target', '_blank');
  emailLink.setAttribute('rel', 'noopener');

  // when the mailto button is clicked, attempt to close the main page
  emailLink.addEventListener('click', (e) => {
    // prevent navigation in case browser still tries to load the href
    e.preventDefault();
    window.open(emailLink.href, '_blank');
    window.close();
  });

  // Fonts ��� apply display font to headings
  const displayStack = `${font}, Georgia, serif`;
  document.querySelectorAll('.font-display').forEach(el => {
    el.style.fontFamily = displayStack;
  });

  // Font sizes — scale proportionally
  document.getElementById('hero-name').style.fontSize = `${baseSize * 4.5}px`;
  document.getElementById('work-title').style.fontSize = `${baseSize * 3}px`;
  document.getElementById('video-title').style.fontSize = `${baseSize * 3}px`;
  document.getElementById('about-title').style.fontSize = `${baseSize * 3}px`;
  document.getElementById('contact-title').style.fontSize = `${baseSize * 3}px`;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      applyConfig(config);
    },
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }
        },
        {
          get: () => config.surface_color || defaultConfig.surface_color,
          set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }
        },
        {
          get: () => config.accent_color || defaultConfig.accent_color,
          set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); }
        },
        {
          get: () => config.secondary_color || defaultConfig.secondary_color,
          set: (v) => { config.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); }
        }
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
      }
    }),
    mapToEditPanelValues: (config) => new Map([
      ['designer_name', config.designer_name || defaultConfig.designer_name],
      ['designer_tagline', config.designer_tagline || defaultConfig.designer_tagline],
      ['work_heading', config.work_heading || defaultConfig.work_heading],
      ['video_heading', config.video_heading || defaultConfig.video_heading],
      ['about_heading', config.about_heading || defaultConfig.about_heading],
      ['about_text', config.about_text || defaultConfig.about_text],
      ['contact_heading', config.contact_heading || defaultConfig.contact_heading],
      ['contact_email', config.contact_email || defaultConfig.contact_email]
    ])
  });
}

// Cloudflare iframe injection (original inline script)
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9cb8e760c4cf9994',t:'MTc3MDY5ODE2OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
