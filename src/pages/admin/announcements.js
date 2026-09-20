import { icons } from '../../icons.js';
import { announcements, formatDate } from '../../data/mock.js';
import { openModal, closeModal } from '../../components/modal.js';

export function render() {
  const announcementCards = announcements.map(a => `
    <div class="announcement-card" style="margin-bottom:16px;">
      <div class="announcement-date font-medium text-sm text-secondary">${formatDate ? formatDate(a.date) : a.date}</div>
      <div class="announcement-title font-semibold mt-2">${a.title}</div>
      <div class="announcement-body mt-2 text-muted">${a.body}</div>
    </div>
  `).join('');

  return `
    <div class="page-header">
      <h2>Announcements & Events</h2>
      <button class="btn btn-primary" id="btn-new-announcement">
        ${icons.plus} New Announcement
      </button>
    </div>
    
    <div class="card">
      ${announcementCards}
    </div>
  `;
}

export function init() {
  document.getElementById('btn-new-announcement').addEventListener('click', () => {
    openModal({
      title: 'New Announcement',
      content: `
        <div class="form-group">
          <label class="form-label">Title</label>
          <input type="text" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Date</label>
          <input type="date" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea class="form-textarea form-input" rows="4" required></textarea>
        </div>
      `,
      onSubmit: () => {
        closeModal();
      }
    });
  });
}
