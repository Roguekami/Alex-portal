import{c as n,i,s as p,r as u}from"./mock-C48JQzvI.js";function m(){const s=(n||[]).map(e=>`<option value="${e.id}">${e.name}</option>`).join(""),l=(i||[]).map(e=>`<option value="${e.id}">${e.name}</option>`).join(""),a=(p||[]).filter(e=>e.class==="SS2"||e.class.includes("SS2")).map((e,r)=>{const t=(u||[]).find(c=>c.studentId===e.id)||{score:0,remark:""},d=Math.floor(t.score*.4),o=t.score||"";return`
      <tr class="border-b">
        <td class="p-3">${r+1}</td>
        <td class="p-3 font-medium">${e.name}</td>
        <td class="p-3 text-secondary">${d} / 40</td>
        <td class="p-3"><input type="number" class="form-input score-input w-24 p-1 border rounded" value="${o}" max="100" /></td>
        <td class="p-3"><input type="text" class="form-input remark-input w-full p-1 border rounded" value="${t.remark}" placeholder="e.g. Excellent" /></td>
      </tr>
    `}).join("");return`
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Results Entry</h2>
    </div>
    
    <div class="filter-bar mb-6 flex gap-4 p-4 bg-white rounded shadow-sm">
      <select class="filter-select form-select w-48 p-2 border rounded">
        ${s}
      </select>
      <select class="filter-select form-select w-48 p-2 border rounded">
        ${l}
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
          ${a}
        </tbody>
      </table>
      <div class="mt-6 p-4 border-t flex justify-end">
        <button class="btn btn-primary">Save Results</button>
      </div>
    </div>
  `}function f(){}export{f as init,m as render};
