import { icons } from '../../icons.js';
import { resources, classes, subjects, formatDate } from '../../data/mock.js';

export function render() {
  const classOptions = (classes || []).map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  const subjectOptions = (subjects || []).map(s => `<option value="${s.id}">${s.name}</option>`).join('');
  
  const filesHtml = (resources || []).map(r => `
    <div class="file-item flex justify-between items-center p-4 border-b last:border-0 hover:bg-gray-50">
      <div class="flex items-center gap-4">
        <div class="file-icon text-primary text-2xl">${icons.fileText}</div>
        <div class="file-info">
          <div class="file-name font-medium text-gray-800">${r.title}</div>
          <div class="file-meta text-sm text-secondary">${r.type} &middot; ${formatDate ? formatDate(r.uploadDate) : r.uploadDate}</div>
        </div>
      </div>
      <button class="btn btn-sm btn-ghost text-danger">${icons.trash}</button>
    </div>
  `).join('');

  return `
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Resources</h2>
    </div>
    
    <div class="filter-bar mb-6 flex gap-4 p-4 bg-white rounded shadow-sm">
      <select class="filter-select form-select w-48 p-2 border rounded">
        <option value="">All Classes</option>
        ${classOptions}
      </select>
      <select class="filter-select form-select w-48 p-2 border rounded">
        <option value="">All Subjects</option>
        ${subjectOptions}
      </select>
    </div>
    
    <div class="upload-area p-10 border-2 border-dashed rounded-lg text-center mb-6 bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
      <div class="text-4xl text-secondary mb-3 flex justify-center">${icons.upload}</div>
      <div class="font-medium text-lg">Drag & drop files here</div>
      <div class="text-secondary mt-1">or browse files</div>
    </div>
    
    <div class="card bg-white rounded shadow-sm p-0">
      <div class="p-4 border-b">
        <h3 class="section-heading m-0">Shared Resources</h3>
      </div>
      <div class="file-list">
        ${filesHtml}
      </div>
    </div>
  `;
}

export function init() {
  // Bind drag and drop events, file selection
}
