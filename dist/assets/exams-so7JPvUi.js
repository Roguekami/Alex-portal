import{i as t}from"./index-xgeGj0Eo.js";import{c as r,m as c}from"./mock-C48JQzvI.js";function u(){const e=c||[],i=e.length>0,l=(r||[]).map(s=>`<option value="${s.id}">${s.name}</option>`).join(""),n=e.map((s,a)=>`
    <div class="question-card card mb-4 p-4 border rounded">
      <div class="question-card-header flex justify-between items-center mb-3">
        <div class="question-number font-medium text-lg">Question ${a+1}</div>
        <div class="flex gap-2">
          <button class="btn btn-sm btn-ghost text-secondary">${t.edit}</button>
          <button class="btn btn-sm btn-ghost text-danger">${t.trash}</button>
        </div>
      </div>
      <div class="question-text mb-4 text-gray-800">${s.question}</div>
      <div class="question-options" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        ${(s.options||[]).map((o,d)=>`
          <div class="question-opt p-3 border rounded ${o===s.correct?"correct bg-green-50 border-green-500":"bg-gray-50"}">
            <span class="font-medium mr-2">${["A","B","C","D"][d]}.</span> ${o}
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");return`
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Exam Creation</h2>
      <button class="btn btn-primary" ${i?"":"disabled"}>Publish Exam</button>
    </div>
    
    <div class="card mb-6 p-5">
      <div class="form-row flex gap-4 mb-4">
        <div class="form-group flex-1">
          <label class="form-label block mb-2 font-medium">Subject</label>
          <select class="form-select w-full p-2 border rounded">
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Biology</option>
          </select>
        </div>
        <div class="form-group flex-1">
          <label class="form-label block mb-2 font-medium">Class</label>
          <select class="form-select w-full p-2 border rounded">
            ${l}
          </select>
        </div>
      </div>
      <div class="form-row flex gap-4 items-end">
        <div class="form-group flex-1">
          <label class="form-label block mb-2 font-medium">Exam Date & Time</label>
          <input type="datetime-local" class="form-input w-full p-2 border rounded" />
        </div>
        <div class="form-group flex-1">
          <label class="form-label block mb-2 font-medium">Duration (minutes)</label>
          <input type="number" class="form-input w-full p-2 border rounded" value="60" />
        </div>
        <div class="mb-2">
          <span class="badge badge-warning p-2">Draft</span>
        </div>
      </div>
    </div>
    
    <div class="section-heading mb-4 text-xl font-semibold">Question Bank (${e.length} questions)</div>
    
    <div class="cbt-body questions-list">
      ${n}
    </div>
    
    <button class="btn btn-secondary mt-4 flex items-center gap-2">
      ${t.plus} Add Question
    </button>
  `}function p(){}export{p as init,u as render};
