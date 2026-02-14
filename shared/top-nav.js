(function renderTopNav() {
  const mount = document.getElementById('top-nav-mount');
  if (!mount) return;

  const isProjectPage = /\/projects\/(project-\d+\/|project\.html)/i.test(window.location.pathname);
  const homeHref = isProjectPage ? '../../main.html' : '#';
  const workHref = isProjectPage ? '../../main.html#work' : '#work';
  const aboutHref = isProjectPage ? '../../main.html#about' : '#about';
  const contactHref = isProjectPage ? '../../main.html#contact' : '#contact';

  mount.innerHTML = `
    <header class="fixed top-0 left-0 w-full z-50" style="background: rgba(14,14,14,0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255,255,255,0.05);">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="${homeHref}" class="flex items-center gap-2 hover:opacity-70 transition-opacity" id="nav-logo" style="background: none; border: none; cursor: pointer; padding: 0; text-decoration: none;">
          <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--accent);">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span id="nav-name" class="font-display text-xl" style="color: var(--accent); letter-spacing: 0.1em;">Derek Mosher</span>
        </a>

        <div class="hidden md:flex items-center gap-8 text-sm tracking-wide" style="color: var(--accent2);">
          <a id="nav-home-btn" href="${homeHref}" class="nav-link hover:text-white transition-colors" style="background: none; border: none; cursor: pointer; padding: 0; font-family: inherit; font-size: inherit; letter-spacing: inherit; text-decoration: none;">Home</a>
          <a href="${workHref}" class="nav-link hover:text-white transition-colors">Work</a>
          <a href="${aboutHref}" class="nav-link hover:text-white transition-colors">About</a>
          <a href="${contactHref}" class="nav-link hover:text-white transition-colors" style="color: var(--accent);">Contact</a>
        </div>

        <button id="mobile-menu-btn" class="md:hidden" style="color: var(--text);" aria-label="Open menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </nav>

      <div id="mobile-menu" class="hidden md:hidden px-6 pb-4 flex flex-col gap-3 text-sm" style="color: var(--accent2);">
        <a href="${workHref}" class="hover:text-white transition-colors">Work</a>
        <a href="${aboutHref}" class="hover:text-white transition-colors">About</a>
        <a href="${contactHref}" class="hover:text-white transition-colors" style="color: var(--accent);">Contact</a>
      </div>
    </header>
  `;
})();
