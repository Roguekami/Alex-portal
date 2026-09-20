import { icons } from '../../icons.js';
import { resources, subjects, formatDate } from '../../data/mock.js';

export function render() {
  const studentClass = 'SS2';
  const availableResources = resources.filter(r => !r.class || r.class === studentClass || r.class === 'All Classes');
  
  // Group by subject
  const grouped = {};
  subjects.forEach(sub => {
    grouped[sub.name] = availableResources.filter(r => r.subject === sub.name || (!r.subject && sub.name === 'General'));
  });

  return `
    <div class="page-header">
      <h2>Learning Resources</h2>
    </div>
    
    <div class="mt-6">
      ${Object.keys(grouped).map(subjectName => {
        const resList = grouped[subjectName];
        if (resList.length === 0) return '';
        
        return `
          <div class="mb-8">
            <h3 class="section-heading mb-4">${subjectName}</h3>
            <div class="card flex flex-col gap-3">
              ${resList.map(r => `
                <div class="file-item flex justify-between items-center p-3 border rounded hover:bg-gray-50">
                  <div class="flex items-center gap-3">
                    <div class="file-icon text-blue-500">
                      ${r.type === 'pdf' ? icons.fileText : icons.file}
                    </div>
                    <div class="file-info">
                      <div class="file-name font-medium">${r.title}</div>
                      <div class="file-meta text-xs text-muted mt-1 uppercase">${r.type} &middot; ${formatDate(r.uploadDate)}</div>
                    </div>
                  </div>
                  <button class="btn btn-sm btn-ghost flex items-center justify-center p-2 text-gray-500 hover:text-gray-700" title="Download">
                    ${icons.download}
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
      
      ${availableResources.length === 0 ? `
        <div class="empty-state p-8 text-center bg-gray-50 rounded border text-muted">
          No resources shared yet for your class.
        </div>
      ` : ''}
    </div>
  `;
}

export function init() {
  // Initialization logic for resources
}
