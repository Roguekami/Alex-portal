import{l as c}from"./mock-C48JQzvI.js";function i(){const s=new Date().toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short",year:"numeric"}),n=c||[],a=n.map((t,e)=>`
    <tr>
      <td>${e+1}</td>
      <td class="font-medium">${t.name}</td>
      <td>
        <div class="toggle-group flex gap-2">
          <button class="toggle-option active btn btn-sm" data-status="present">Present</button>
          <button class="toggle-option btn btn-sm" data-status="late">Late</button>
          <button class="toggle-option btn btn-sm" data-status="absent">Absent</button>
        </div>
      </td>
    </tr>
  `).join("");return`
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Mark Attendance</h2>
    </div>
    
    <div class="filter-bar flex justify-between items-center mb-6 p-4 bg-white rounded shadow-sm">
      <select class="filter-select form-select w-48">
        <option>SS1</option>
        <option>SS2</option>
      </select>
      <div class="font-medium text-secondary">Date: ${s}</div>
    </div>

    <div class="table-card bg-white rounded shadow-sm">
      <table style="width: 100%; text-align: left; border-collapse: collapse;">
        <thead>
          <tr class="border-b">
            <th class="table-header-left p-4" style="width: 50px;">#</th>
            <th class="table-header-left p-4">Student Name</th>
            <th class="table-header-left p-4" style="width: 300px;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${a}
        </tbody>
      </table>
      <div class="flex items-center justify-between mt-6 p-4 border-t">
        <div class="text-secondary font-medium">
          <span id="present-count">${n.length}</span> Present &middot; 
          <span id="absent-count">0</span> Absent &middot; 
          <span id="late-count">0</span> Late
        </div>
        <button class="btn btn-primary">Save Attendance</button>
      </div>
    </div>
  `}function r(){document.querySelectorAll(".toggle-group").forEach(s=>{const n=s.querySelectorAll(".toggle-option");n.forEach(a=>{a.addEventListener("click",t=>{n.forEach(o=>{o.classList.remove("active","active-warning","active-danger")});const e=t.target.dataset.status;e==="present"?t.target.classList.add("active"):e==="late"?t.target.classList.add("active-warning"):e==="absent"&&t.target.classList.add("active-danger"),l()})})}),l()}function l(){const s=document.querySelectorAll(".toggle-option.active").length,n=document.querySelectorAll(".toggle-option.active-warning").length,a=document.querySelectorAll(".toggle-option.active-danger").length,t=document.getElementById("present-count"),e=document.getElementById("late-count"),o=document.getElementById("absent-count");t&&(t.textContent=s),e&&(e.textContent=n),o&&(o.textContent=a)}export{r as init,i as render};
