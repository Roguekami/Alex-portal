import{i as r}from"./index-xgeGj0Eo.js";import{t as d}from"./mock-C48JQzvI.js";import{o as c}from"./modal-Cwa9fv8K.js";function m(){const t=d.map(e=>{const s=e.status==="active"?"badge-success":"badge-neutral",a=(e.subjects||[]).join(", "),l=(e.classes||[]).join(", ");return`
      <tr class="teacher-row" data-name="${e.name.toLowerCase()}">
        <td class="td-name">${e.name}</td>
        <td class="text-muted">${e.email}</td>
        <td>${e.phone}</td>
        <td>${a}</td>
        <td>${l}</td>
        <td><span class="badge ${s}">${e.status}</span></td>
      </tr>
    `}).join("");return`
    <div class="page-header">
      <h2>Teacher Management</h2>
      <button class="btn btn-primary" id="btn-add-teacher">
        ${r.plus} Add Teacher
      </button>
    </div>
    
    <div class="table-card">
      <div class="table-header">
        <div class="table-header-left">
          <input type="text" id="search-teacher" class="search-input" placeholder="Search by name...">
        </div>
      </div>
      <table style="width:100%;text-align:left;border-collapse:collapse;">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Subjects</th>
            <th>Classes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="teacher-tbody">
          ${t}
        </tbody>
      </table>
    </div>
  `}function h(){const t=document.getElementById("search-teacher"),e=document.querySelectorAll(".teacher-row");t.addEventListener("input",()=>{const s=t.value.toLowerCase();e.forEach(a=>{const l=a.dataset.name.includes(s);a.style.display=l?"":"none"})}),document.getElementById("btn-add-teacher").addEventListener("click",()=>{c({title:"Add Teacher",content:`
        <div class="form-group">
          <label class="form-label">Name</label>
          <input type="text" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Phone</label>
          <input type="text" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Subjects (comma separated)</label>
          <input type="text" class="form-input" placeholder="e.g. Math, English" required>
        </div>
        <div class="form-group">
          <label class="form-label">Class Assignment (comma separated)</label>
          <input type="text" class="form-input" placeholder="e.g. JSS1, JSS2" required>
        </div>
      `})})}export{h as init,m as render};
