// ===========================================================
// ALExportal — Topbar Component
// ===========================================================
import { icons } from '../icons.js';

export function renderTopbar(user, pageTitle) {
  return `
    <header class="topbar">
      <div class="topbar-left">
        <button class="menu-btn" id="menu-btn">${icons.menu}</button>
        <h2 class="topbar-title">${pageTitle}</h2>
      </div>
      <div class="topbar-right">
        <button class="topbar-icon-btn" title="Notifications">${icons.bell}</button>
      </div>
    </header>
  `;
}

export function initTopbar() {
  const menuBtn = document.getElementById('menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      if (sidebar) sidebar.classList.toggle('open');
      if (overlay) overlay.classList.toggle('open');
    });
  }
}
