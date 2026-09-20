// ===========================================================
// ALExportal — Modal Component
// ===========================================================
import { icons } from '../icons.js';

let modalRoot = null;

function ensureRoot() {
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
  }
}

/**
 * Open a modal dialog.
 * @param {{ title: string, content: string, footer?: string }} opts
 */
export function openModal({ title, content, footer }) {
  ensureRoot();

  const defaultFooter = footer ?? `
    <button class="btn btn-secondary" data-modal-close>Cancel</button>
    <button class="btn btn-primary" data-modal-submit>Save</button>
  `;

  modalRoot.innerHTML = `
    <div class="modal-overlay open" id="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <h3 class="modal-title">${title}</h3>
          <button class="modal-close" data-modal-close>${icons.x}</button>
        </div>
        <div class="modal-body">${content}</div>
        <div class="modal-footer">${defaultFooter}</div>
      </div>
    </div>
  `;

  // Close handlers
  modalRoot.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  // Close on overlay click
  const overlay = modalRoot.querySelector('.modal-overlay');
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', handleEsc);
}

export function closeModal() {
  if (!modalRoot) return;
  const overlay = modalRoot.querySelector('.modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    setTimeout(() => { modalRoot.innerHTML = ''; }, 200);
  }
  document.removeEventListener('keydown', handleEsc);
}

function handleEsc(e) {
  if (e.key === 'Escape') closeModal();
}

/**
 * Bind a callback to the modal's submit button.
 * Call this after openModal().
 */
export function onModalSubmit(callback) {
  if (!modalRoot) return;
  const btn = modalRoot.querySelector('[data-modal-submit]');
  if (btn) {
    btn.addEventListener('click', () => {
      callback();
      closeModal();
    });
  }
}
