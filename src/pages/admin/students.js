import { icons } from '../../icons.js';
import { students, classes } from '../../data/mock.js';
import { openModal, closeModal } from '../../components/modal.js';
import { navigate } from '../../router.js';

export function render() {
  const classOptions = classes.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  
  const studentRows = students.map(s => {
    const badgeClass = s.feeStatus === 'paid' ? 'badge-success' : 'badge-danger';
    return `
      <tr class="student-row" data-name="${s.name.toLowerCase()}" data-class="${s.class}">
        <td class="td-name">${s.name}</td>
        <td>${s.class}</td>
        <td>${s.admissionNo}</td>
        <td>${s.guardian}</td>
        <td>${s.guardianPhone}</td>
        <td><span class="badge ${badgeClass}">${s.feeStatus}</span></td>
      </tr>
    `;
  }).join('');

  return `
    <div class="page-header">
      <h2>Student Registry</h2>
      <button class="btn btn-primary" id="btn-enroll-student">
        ${icons.plus} Enroll Student
      </button>
    </div>
    
    <div class="table-card">
      <div class="table-header">
        <div class="table-header-left">
          <input type="text" id="search-student" class="search-input" placeholder="Search by name...">
          <select id="filter-class" class="form-select filter-select">
            <option value="all">All Classes</option>
            ${classOptions}
          </select>
        </div>
      </div>
      <table style="width:100%;text-align:left;border-collapse:collapse;">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Admission No</th>
            <th>Guardian</th>
            <th>Phone</th>
            <th>Fee Status</th>
          </tr>
        </thead>
        <tbody id="student-tbody">
          ${studentRows}
        </tbody>
      </table>
    </div>
  `;
}

export function init() {
  const searchInput = document.getElementById('search-student');
  const classSelect = document.getElementById('filter-class');
  const rows = document.querySelectorAll('.student-row');

  function filterTable() {
    const searchVal = searchInput.value.toLowerCase();
    const classVal = classSelect.value;
    
    rows.forEach(row => {
      const matchName = row.dataset.name.includes(searchVal);
      const matchClass = classVal === 'all' || row.dataset.class === classVal;
      row.style.display = matchName && matchClass ? '' : 'none';
    });
  }

  searchInput.addEventListener('input', filterTable);
  classSelect.addEventListener('change', filterTable);

  document.getElementById('btn-enroll-student').addEventListener('click', () => {
    const classOptions = classes.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    
    openModal({
      title: 'Enroll Student',
      content: `
        <div class="form-group">
          <label class="form-label">Student Name</label>
          <input type="text" class="form-input" id="enroll-name" required>
        </div>
        <div class="form-group">
          <label class="form-label">Date of Birth</label>
          <input type="date" class="form-input" id="enroll-dob" required>
        </div>
        <div class="form-group">
          <label class="form-label">Class</label>
          <select class="form-select" id="enroll-class" required>
            ${classOptions}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Guardian Name</label>
          <input type="text" class="form-input" id="enroll-guardian" required>
        </div>
        <div class="form-group">
          <label class="form-label">Guardian Phone</label>
          <input type="text" class="form-input" id="enroll-phone" required>
        </div>
      `,
      onSubmit: () => {
        closeModal();
      }
    });
  });
}
