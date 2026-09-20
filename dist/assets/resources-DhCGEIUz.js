import{i as s}from"./index-xgeGj0Eo.js";import{c as d,i as l,n as r,j as t}from"./mock-C48JQzvI.js";function v(){const i=(d||[]).map(e=>`<option value="${e.id}">${e.name}</option>`).join(""),o=(l||[]).map(e=>`<option value="${e.id}">${e.name}</option>`).join(""),a=(r||[]).map(e=>`
    <div class="file-item flex justify-between items-center p-4 border-b last:border-0 hover:bg-gray-50">
      <div class="flex items-center gap-4">
        <div class="file-icon text-primary text-2xl">${s.fileText}</div>
        <div class="file-info">
          <div class="file-name font-medium text-gray-800">${e.title}</div>
          <div class="file-meta text-sm text-secondary">${e.type} &middot; ${t?t(e.uploadDate):e.uploadDate}</div>
        </div>
      </div>
      <button class="btn btn-sm btn-ghost text-danger">${s.trash}</button>
    </div>
  `).join("");return`
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Resources</h2>
    </div>
    
    <div class="filter-bar mb-6 flex gap-4 p-4 bg-white rounded shadow-sm">
      <select class="filter-select form-select w-48 p-2 border rounded">
        <option value="">All Classes</option>
        ${i}
      </select>
      <select class="filter-select form-select w-48 p-2 border rounded">
        <option value="">All Subjects</option>
        ${o}
      </select>
    </div>
    
    <div class="upload-area p-10 border-2 border-dashed rounded-lg text-center mb-6 bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
      <div class="text-4xl text-secondary mb-3 flex justify-center">${s.upload}</div>
      <div class="font-medium text-lg">Drag & drop files here</div>
      <div class="text-secondary mt-1">or browse files</div>
    </div>
    
    <div class="card bg-white rounded shadow-sm p-0">
      <div class="p-4 border-b">
        <h3 class="section-heading m-0">Shared Resources</h3>
      </div>
      <div class="file-list">
        ${a}
      </div>
    </div>
  `}function m(){}export{m as init,v as render};
