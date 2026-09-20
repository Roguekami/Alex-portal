import{q as l}from"./mock-C48JQzvI.js";function o(e){return e>=70?"A":e>=60?"B":e>=50?"C":e>=40?"D":"F"}function c(){const s=l(1);let d=0;s.forEach(t=>d+=t.score);const r=s.length>0?(d/s.length).toFixed(1):0,a=o(Math.round(r));return`
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Results</h2>
      <button class="btn btn-secondary flex items-center gap-2" onclick="window.print()">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
        Print
      </button>
    </div>

    <div class="filter-bar mb-6">
      <select class="filter-select form-select">
        <option value="term1">2024/2025 &mdash; Term 1</option>
      </select>
    </div>

    <div class="report-card card p-8">
      <div class="report-header text-center mb-8 border-b pb-4">
        <h3 class="text-xl font-bold">ALExportal Academy</h3>
        <p class="text-secondary mt-1">Student Report Card &mdash; 2024/2025 Term 1</p>
      </div>
      
      <div class="report-body">
        <div class="grid grid-cols-2 gap-4 mb-8">
          <div>
            <p class="text-sm text-muted mb-1">Name</p>
            <p class="font-medium">Chidera Eze</p>
          </div>
          <div>
            <p class="text-sm text-muted mb-1">Admission No</p>
            <p class="font-medium">ALP/2024/0342</p>
          </div>
          <div>
            <p class="text-sm text-muted mb-1">Class</p>
            <p class="font-medium">SS2</p>
          </div>
        </div>
        
        <div class="table-card mb-8">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-gray-50 border-b">
                <th class="p-3 font-semibold">Subject</th>
                <th class="p-3 font-semibold">Score (/100)</th>
                <th class="p-3 font-semibold">Grade</th>
                <th class="p-3 font-semibold">Remark</th>
              </tr>
            </thead>
            <tbody>
              ${s.map(t=>`
                <tr class="border-b">
                  <td class="p-3">${t.subject}</td>
                  <td class="p-3">${t.score}</td>
                  <td class="p-3 font-medium">${o(t.score)}</td>
                  <td class="p-3 text-secondary">${t.remark}</td>
                </tr>
              `).join("")}
              ${s.length===0?'<tr><td colspan="4" class="p-3 text-center text-muted">No results found for this term.</td></tr>':""}
            </tbody>
            <tfoot>
              <tr class="bg-gray-50 font-semibold">
                <td class="p-3">Summary</td>
                <td class="p-3">${r}</td>
                <td class="p-3">${a}</td>
                <td class="p-3"></td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <div class="border-t pt-4">
          <h4 class="font-semibold mb-2">Teacher's Comment</h4>
          <p class="text-secondary italic">"Chidera has shown great improvement this term. Keep up the good work!"</p>
        </div>
      </div>
    </div>
  `}function n(){}export{n as init,c as render};
