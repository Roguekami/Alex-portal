import{i as c}from"./index-xgeGj0Eo.js";import{c as d,h as r,i as u,t as l}from"./mock-C48JQzvI.js";function v(){const a=d.map((s,t)=>`
    <div class="panel-item ${t===0?"active":""}" data-class-id="${s.id}">
      <div>${s.name}</div>
      <div class="panel-item-count badge badge-neutral">${s.studentCount} students</div>
    </div>
  `).join("");return`
    <div class="page-header">
      <h2>Classes & Subjects</h2>
    </div>
    
    <div class="two-panel">
      <div class="panel">
        <div class="panel-header" style="display:flex;justify-content:space-between;align-items:center;">
          <h3>Classes</h3>
          <button class="btn btn-sm btn-primary">${c.plus} Add Class</button>
        </div>
        <div class="panel-body" id="class-list">
          ${a}
        </div>
      </div>
      <div class="panel">
        <div class="panel-header" style="display:flex;justify-content:space-between;align-items:center;">
          <h3>Subjects</h3>
          <button class="btn btn-sm btn-primary">${c.plus} Add Subject</button>
        </div>
        <div class="panel-body" id="subject-list">
          <!-- Populated by JS -->
        </div>
      </div>
    </div>
  `}function o(a){const s=r.filter(t=>t.classId===a);return s.length===0?'<div class="empty-state">No subjects assigned to this class.</div>':s.map(t=>{const i=u.find(e=>e.id===t.subjectId),n=l.find(e=>e.id===t.teacherId);return`
      <div class="form-row" style="margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;padding:12px;border:1px solid #eee;border-radius:6px;">
        <div class="font-medium">${i?i.name:"Unknown Subject"}</div>
        <div>
          <select class="form-select form-select-sm">
            <option value="">Assign Teacher</option>
            ${l.map(e=>`<option value="${e.id}" ${n&&e.id===n.id?"selected":""}>${e.name}</option>`).join("")}
          </select>
        </div>
      </div>
    `}).join("")}function b(){const a=document.getElementById("class-list"),s=document.getElementById("subject-list");d.length>0&&(s.innerHTML=o(d[0].id)),a.addEventListener("click",t=>{const i=t.target.closest(".panel-item");if(!i)return;document.querySelectorAll(".panel-item").forEach(e=>e.classList.remove("active")),i.classList.add("active");const n=i.dataset.classId;s.innerHTML=o(n)})}export{b as init,v as render};
