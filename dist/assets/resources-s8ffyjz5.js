import{i as a}from"./index-xgeGj0Eo.js";import{n,i as d,j as o}from"./mock-C48JQzvI.js";function m(){const l=n.filter(e=>!e.class||e.class==="SS2"||e.class==="All Classes"),i={};return d.forEach(e=>{i[e.name]=l.filter(t=>t.subject===e.name||!t.subject&&e.name==="General")}),`
    <div class="page-header">
      <h2>Learning Resources</h2>
    </div>
    
    <div class="mt-6">
      ${Object.keys(i).map(e=>{const t=i[e];return t.length===0?"":`
          <div class="mb-8">
            <h3 class="section-heading mb-4">${e}</h3>
            <div class="card flex flex-col gap-3">
              ${t.map(s=>`
                <div class="file-item flex justify-between items-center p-3 border rounded hover:bg-gray-50">
                  <div class="flex items-center gap-3">
                    <div class="file-icon text-blue-500">
                      ${s.type==="pdf"?a.fileText:a.file}
                    </div>
                    <div class="file-info">
                      <div class="file-name font-medium">${s.title}</div>
                      <div class="file-meta text-xs text-muted mt-1 uppercase">${s.type} &middot; ${o(s.uploadDate)}</div>
                    </div>
                  </div>
                  <button class="btn btn-sm btn-ghost flex items-center justify-center p-2 text-gray-500 hover:text-gray-700" title="Download">
                    ${a.download}
                  </button>
                </div>
              `).join("")}
            </div>
          </div>
        `}).join("")}
      
      ${l.length===0?`
        <div class="empty-state p-8 text-center bg-gray-50 rounded border text-muted">
          No resources shared yet for your class.
        </div>
      `:""}
    </div>
  `}function u(){}export{u as init,m as render};
