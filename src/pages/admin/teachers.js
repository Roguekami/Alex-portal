import { icons } from '../../icons.js';
import { teachers } from '../../data/mock.js';
import { openModal, closeModal } from '../../components/modal.js';

export function render() {
  const teacherRows = teachers.map(t => {
    const badgeClass = t.status === 'active' ? 'badge-success' : 'badge-neutral';
    const subjectsList = (t.subjects || []).join(', ');
    const classesList = (t.classes || []).join(', ');
    
    return `
      <tr class="teacher-row" data-name="${t.name.toLowerCase()}">
        <td class="td-name">${t.name}</td>
        <td class="text-muted">${t.email}</td>
        <td>${t.phone}</td>
        <td>${subjectsList}</td>
        <td>${classesList}</td>
        <td><span class="badge ${badgeClass}">${t.status}</span></td>
      </tr>
    `;
  }).join('');

  return `
    <div class="page-header">
      <h2>Teacher Management</h2>
      <button class="btn btn-primary" id="btn-add-teacher">
        ${icons.plus} Add Teacher
      </button>
    </div>
    
    <div class="table-card">
      <div class="table-header">
        <div class="table-header-left">
          <input type="text" id="search-teacher" class="search-input" placeholder="Search by name...">
        </div>
      </div>
      <table style="width:100%;text-align:left;border-collapse:collapse;">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subjects</th>
            <th>Classes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="teacher-tbody">
          ${teacherRows}
        </tbody>
      </table>
    </div>
  `;
}

export function init() {
  const searchInput = document.getElementById('search-teacher');
  const rows = document.querySelectorAll('.teacher-row');

  searchInput.addEventListener('input', () => {
    const searchVal = searchInput.value.toLowerCase();
    rows.forEach(row => {
      const matchName = row.dataset.name.includes(searchVal);
      row.style.display = matchName ? '' : 'none';
    });
  });

  document.getElementById('btn-add-teacher').addEventListener('click', () => {
    openModal({
      title: 'Add Teacher',
      content: `
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Phone</label>
          <input type="text" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Subjects (comma separated)</label>
          <input type="text" class="form-input" placeholder="e.g. Math, English" required>
        </div>
        <div class="form-group">
          <label class="form-label">Class Assignment (comma separated)</label>
          <input type="text" class="form-input" placeholder="e.g. JSS1, JSS2" required>
        </div>
      `,
      onSubmit: () => {
        closeModal();
      }
    });
  });
}
