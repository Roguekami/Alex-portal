import{i as c}from"./index-xgeGj0Eo.js";import{c as o,s as u}from"./mock-C48JQzvI.js";import{o as m}from"./modal-Cwa9fv8K.js";function f(){const a=o.map(e=>`<option value="${e.name}">${e.name}</option>`).join(""),s=u.map(e=>{const l=e.feeStatus==="paid"?"badge-success":"badge-danger";return`
      <tr class="student-row" data-name="${e.name.toLowerCase()}" data-class="${e.class}">
        <td class="td-name">${e.name}</td>
        <td>${e.class}</td>
        <td>${e.admissionNo}</td>
        <td>${e.guardian}</td>
        <td>${e.guardianPhone}</td>
        <td><span class="badge ${l}">${e.feeStatus}</span></td>
      </tr>
    `}).join("");return`
    <div class="page-header">
      <h2>Student Registry</h2>
      <button class="btn btn-primary" id="btn-enroll-student">
        ${c.plus} Enroll Student
      </button>
    </div>
    
    <div class="table-card">
      <div class="table-header">
        <div class="table-header-left">
          <input type="text" id="search-student" class="search-input" placeholder="Search by name...">
          <select id="filter-class" class="form-select filter-select">
            <option value="all">All Classes</option>
            ${a}
          </select>
        </div>
      </div>
      <table style="width:100%;text-align:left;border-collapse:collapse;">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Admission No</th>
            <th>Guardian</th>
            <th>Phone</th>
            <th>Fee Status</th>
          </tr>
        </thead>
        <tbody id="student-tbody">
          ${s}
        </tbody>
      </table>
    </div>
  `}function v(){const a=document.getElementById("search-student"),s=document.getElementById("filter-class"),e=document.querySelectorAll(".student-row");function l(){const n=a.value.toLowerCase(),t=s.value;e.forEach(d=>{const r=d.dataset.name.includes(n),i=t==="all"||d.dataset.class===t;d.style.display=r&&i?"":"none"})}a.addEventListener("input",l),s.addEventListener("change",l),document.getElementById("btn-enroll-student").addEventListener("click",()=>{const n=o.map(t=>`<option value="${t.id}">${t.name}</option>`).join("");m({title:"Enroll Student",content:`
        <div class="form-group">
          <label class="form-label">Student Name</label>
          <input type="text" class="form-input" id="enroll-name" required>
        </div>
        <div class="form-group">
          <label class="form-label">Date of Birth</label>
          <input type="date" class="form-input" id="enroll-dob" required>
        </div>
        <div class="form-group">
          <label class="form-label">Class</label>
          <select class="form-select" id="enroll-class" required>
            ${n}
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Guardian Name</label>
          <input type="text" class="form-input" id="enroll-guardian" required>
        </div>
        <div class="form-group">
          <label class="form-label">Guardian Phone</label>
          <input type="text" class="form-input" id="enroll-phone" required>
        </div>
      `})})}export{v as init,f as render};
