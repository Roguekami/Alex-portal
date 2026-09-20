import { icons } from '../../icons.js';
import { todayRoster } from '../../data/mock.js';

export function render() {
  const today = new Date().toLocaleDateString('en-GB', {weekday:'short', day:'numeric', month:'short', year:'numeric'});
  
  // Use todayRoster if available, otherwise default to empty array
  const roster = todayRoster || [];
  
  const rowsHtml = roster.map((student, index) => `
    <tr>
      <td>${index + 1}</td>
      <td class="font-medium">${student.name}</td>
      <td>
        <div class="toggle-group flex gap-2">
          <button class="toggle-option active btn btn-sm" data-status="present">Present</button>
          <button class="toggle-option btn btn-sm" data-status="late">Late</button>
          <button class="toggle-option btn btn-sm" data-status="absent">Absent</button>
        </div>
      </td>
    </tr>
  `).join('');

  return `
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Mark Attendance</h2>
    </div>
    
    <div class="filter-bar flex justify-between items-center mb-6 p-4 bg-white rounded shadow-sm">
      <select class="filter-select form-select w-48">
        <option>SS1</option>
        <option>SS2</option>
      </select>
      <div class="font-medium text-secondary">Date: ${today}</div>
    </div>

    <div class="table-card bg-white rounded shadow-sm">
      <table style="width: 100%; text-align: left; border-collapse: collapse;">
        <thead>
          <tr class="border-b">
            <th class="table-header-left p-4" style="width: 50px;">#</th>
            <th class="table-header-left p-4">Student Name</th>
            <th class="table-header-left p-4" style="width: 300px;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
      <div class="flex items-center justify-between mt-6 p-4 border-t">
        <div class="text-secondary font-medium">
          <span id="present-count">${roster.length}</span> Present &middot; 
          <span id="absent-count">0</span> Absent &middot; 
          <span id="late-count">0</span> Late
        </div>
        <button class="btn btn-primary">Save Attendance</button>
      </div>
    </div>
  `;
}

export function init() {
  document.querySelectorAll('.toggle-group').forEach(group => {
    const buttons = group.querySelectorAll('.toggle-option');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        // Reset styles for all siblings
        buttons.forEach(b => {
          b.classList.remove('active', 'active-warning', 'active-danger');
        });
        
        // Add proper active class based on status
        const status = e.target.dataset.status;
        if (status === 'present') {
          e.target.classList.add('active');
        } else if (status === 'late') {
          e.target.classList.add('active-warning');
        } else if (status === 'absent') {
          e.target.classList.add('active-danger');
        }
        
        updateCounts();
      });
    });
  });
  
  // Initial count
  updateCounts();
}

function updateCounts() {
  const presents = document.querySelectorAll('.toggle-option.active').length;
  const lates = document.querySelectorAll('.toggle-option.active-warning').length;
  const absents = document.querySelectorAll('.toggle-option.active-danger').length;
  
  const pc = document.getElementById('present-count');
  const lc = document.getElementById('late-count');
  const ac = document.getElementById('absent-count');
  
  if (pc) pc.textContent = presents;
  if (lc) lc.textContent = lates;
  if (ac) ac.textContent = absents;
}
