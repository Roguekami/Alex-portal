import { icons } from '../../icons.js';
import { students, results, classes, subjects } from '../../data/mock.js';

export function render() {
  const classOptions = (classes || []).map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  const subjectOptions = (subjects || []).map(s => `<option value="${s.id}">${s.name}</option>`).join('');
  
  // Filter students for SS2 specifically
  const ss2Students = (students || []).filter(s => s.class === 'SS2' || s.class.includes('SS2'));
  
  const rowsHtml = ss2Students.map((student, i) => {
    // Attempt to find existing result or mock one
    const studentResult = (results || []).find(r => r.studentId === student.id) || { score: 0, remark: '' };
    const cbtScore = Math.floor(studentResult.score * 0.4); // Random mock logic for CBT
    const finalScore = studentResult.score || '';
    
    return `
      <tr class="border-b">
        <td class="p-3">${i + 1}</td>
        <td class="p-3 font-medium">${student.name}</td>
        <td class="p-3 text-secondary">${cbtScore} / 40</td>
        <td class="p-3"><input type="number" class="form-input score-input w-24 p-1 border rounded" value="${finalScore}" max="100" /></td>
        <td class="p-3"><input type="text" class="form-input remark-input w-full p-1 border rounded" value="${studentResult.remark}" placeholder="e.g. Excellent" /></td>
      </tr>
    `;
  }).join('');

  return `
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Results Entry</h2>
    </div>
    
    <div class="filter-bar mb-6 flex gap-4 p-4 bg-white rounded shadow-sm">
      <select class="filter-select form-select w-48 p-2 border rounded">
        ${classOptions}
      </select>
      <select class="filter-select form-select w-48 p-2 border rounded">
        ${subjectOptions}
      </select>
    </div>
    
    <div class="table-card bg-white rounded shadow-sm">
      <table style="width: 100%; text-align: left; border-collapse: collapse;">
        <thead>
          <tr class="bg-gray-50 border-b">
            <th class="table-header-left p-3" style="width: 50px;">#</th>
            <th class="table-header-left p-3">Student Name</th>
            <th class="table-header-left p-3" style="width: 150px;">CBT Score</th>
            <th class="table-header-left p-3" style="width: 150px;">Final Score</th>
            <th class="table-header-left p-3">Remark</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
      <div class="mt-6 p-4 border-t flex justify-end">
        <button class="btn btn-primary">Save Results</button>
      </div>
    </div>
  `;
}

export function init() {
  // Bind events for save results
}
