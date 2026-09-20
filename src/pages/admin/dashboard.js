import { icons } from '../../icons.js';
import { students, teachers, announcements, events, formatCurrency, getTotalCollected, getTotalOutstanding } from '../../data/mock.js';
import { navigate } from '../../router.js';

export function render() {
  const totalStudents = students.length;
  const totalTeachers = teachers.length;
  const collected = formatCurrency(getTotalCollected());
  const outstanding = formatCurrency(getTotalOutstanding());

  const recentAnnouncements = announcements.slice(0, 2).map(a => `
    <div class="announcement-card">
      <div class="announcement-date">${a.date}</div>
      <div class="announcement-title">${a.title}</div>
      <div class="announcement-body">${a.body}</div>
    </div>
  `).join('');

  const upcomingEvents = events.map(e => `
    <div class="event-item">
      <div class="event-date-badge">
        <span class="day">${e.day}</span>
        <span class="month">${e.month}</span>
      </div>
      <div>
        <div class="event-title">${e.title}</div>
        <div class="event-desc">${e.description || ''}</div>
      </div>
    </div>
  `).join('');

  return `
    <div class="page-header">
      <h2>Dashboard</h2>
    </div>
    
    <div class="card-grid">
      <div class="stat-card">
        <div class="stat-card-content">
          <div class="stat-card-label">Total Students</div>
          <div class="stat-card-value">${totalStudents}</div>
          <div class="stat-card-sub">Currently enrolled</div>
        </div>
        <div class="stat-icon blue">${icons.users}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-content">
          <div class="stat-card-label">Total Teachers</div>
          <div class="stat-card-value">${totalTeachers}</div>
          <div class="stat-card-sub">Active staff</div>
        </div>
        <div class="stat-icon green">${icons.graduationCap}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-content">
          <div class="stat-card-label">Fees Collected</div>
          <div class="stat-card-value">${collected}</div>
          <div class="stat-card-sub">This term</div>
        </div>
        <div class="stat-icon blue">${icons.creditCard}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-content">
          <div class="stat-card-label">Fees Outstanding</div>
          <div class="stat-card-value">${outstanding}</div>
          <div class="stat-card-sub">Pending payments</div>
        </div>
        <div class="stat-icon amber">${icons.creditCard}</div>
      </div>
    </div>

    <div class="quick-actions mt-6 mb-6">
      <button class="btn btn-primary" id="btn-enroll">
        ${icons.plus} Enroll Student
      </button>
      <button class="btn btn-secondary" id="btn-announce">
        ${icons.megaphone} Post Announcement
      </button>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
      <div>
        <div class="section-heading">Recent Announcements</div>
        <div class="card">
          ${recentAnnouncements}
        </div>
      </div>
      <div>
        <div class="section-heading">Upcoming Events</div>
        <div class="card">
          ${upcomingEvents}
        </div>
      </div>
    </div>
  `;
}

export function init() {
  document.getElementById('btn-enroll').addEventListener('click', () => navigate('#/admin/students'));
  document.getElementById('btn-announce').addEventListener('click', () => navigate('#/admin/announcements'));
}
