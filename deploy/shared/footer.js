(function renderSharedFooter() {
  const mount = document.getElementById('footer-mount');
  if (!mount) return;

  const isProjectPage = /\/projects\/project-\d+\//i.test(window.location.pathname);
  const footerStyle = isProjectPage
    ? 'background: var(--surface); border-top: 1px solid rgba(255,255,255,0.05);'
    : 'border-top: 1px solid rgba(255,255,255,0.05);';

  mount.innerHTML = `
    <footer id="shared-footer" class="w-full px-6 py-3" style="${footerStyle}">
      <div id="shared-footer-content" class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style="color: var(--accent2);">
        <p>@ 2026 <span id="footer-name">Derek Mosher</span>. All rights reserved.</p>
        <p>Designed with Canva, VS Code, and AI</p>
      </div>
    </footer>
  `;

})();
