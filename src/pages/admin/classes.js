import { icons } from '../../icons.js';
import { classes, subjects, teachers, classSubjects } from '../../data/mock.js';

export function render() {
  const classList = classes.map((c, index) => `
    <div class="panel-item ${index === 0 ? 'active' : ''}" data-class-id="${c.id}">
      <div>${c.name}</div>
      <div class="panel-item-count badge badge-neutral">${c.studentCount} students</div>
    </div>
  `).join('');

  return `
    <div class="page-header">
      <h2>Classes & Subjects</h2>
    </div>
    
    <div class="two-panel">
      <div class="panel">
        <div class="panel-header" style="display:flex;justify-content:space-between;align-items:center;">
          <h3>Classes</h3>
          <button class="btn btn-sm btn-primary">${icons.plus} Add Class</button>
        </div>
        <div class="panel-body" id="class-list">
          ${classList}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header" style="display:flex;justify-content:space-between;align-items:center;">
          <h3>Subjects</h3>
          <button class="btn btn-sm btn-primary">${icons.plus} Add Subject</button>
        </div>
        <div class="panel-body" id="subject-list">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
  `;
}

function renderSubjectsForClass(classId) {
  const classSubs = classSubjects.filter(cs => cs.classId === classId);
  
  if (classSubs.length === 0) {
    return `<div class="empty-state">No subjects assigned to this class.</div>`;
  }
  
  return classSubs.map(cs => {
    const subject = subjects.find(s => s.id === cs.subjectId);
    const teacher = teachers.find(t => t.id === cs.teacherId);
    return `
      <div class="form-row" style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;padding:12px;border:1px solid #eee;border-radius:6px;">
        <div class="font-medium">${subject ? subject.name : 'Unknown Subject'}</div>
        <div>
          <select class="form-select form-select-sm">
            <option value="">Assign Teacher</option>
            ${teachers.map(t => `<option value="${t.id}" ${teacher && t.id === teacher.id ? 'selected' : ''}>${t.name}</option>`).join('')}
          </select>
        </div>
      </div>
    `;
  }).join('');
}

export function init() {
  const classList = document.getElementById('class-list');
  const subjectList = document.getElementById('subject-list');
  
  // Initialize with first class
  if (classes.length > 0) {
    subjectList.innerHTML = renderSubjectsForClass(classes[0].id);
  }

  classList.addEventListener('click', (e) => {
    const item = e.target.closest('.panel-item');
    if (!item) return;

    // Update active state
    document.querySelectorAll('.panel-item').forEach(el => el.classList.remove('active'));
    item.classList.add('active');

    // Update right panel
    const classId = item.dataset.classId;
    subjectList.innerHTML = renderSubjectsForClass(classId);
  });
}
