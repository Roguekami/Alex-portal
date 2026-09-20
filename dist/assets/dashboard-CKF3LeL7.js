import{n as t,i}from"./index-xgeGj0Eo.js";import{k as n}from"./mock-C48JQzvI.js";function r(){const e=new Date().toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),a=n.map(s=>`
    <div class="schedule-item flex items-center justify-between p-3 border-b last:border-0">
      <div class="flex items-center gap-4">
        <div class="schedule-time font-medium">${i.clock} ${s.time}</div>
        <div class="schedule-info">
          <div class="schedule-subject font-semibold">${s.subject}</div>
          <div class="schedule-class text-sm text-secondary">${s.class}</div>
        </div>
      </div>
      <button class="btn btn-sm btn-primary mark-attendance-btn">Mark Attendance</button>
    </div>
  `).join("");return`
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Teacher Dashboard</h2>
    </div>
    
    <div class="card mb-6">
      <h3>Welcome back, Mrs. Ngozi Okafor</h3>
      <p class="text-secondary">${e}</p>
    </div>

    <div class="card-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
      <div class="card">
        <h3 class="section-heading mb-4">Today's Schedule</h3>
        <div class="schedule-list">
          ${a}
        </div>
      </div>
      
      <div class="card">
        <h3 class="section-heading mb-4">Pending Actions</h3>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li class="flex items-center gap-3 mb-4">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: var(--danger, #dc2626);"></span> 
            <span>SS2 Mathematics results not yet submitted</span>
          </li>
          <li class="flex items-center gap-3 mb-4">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: var(--warning, #d97706);"></span> 
            <span>SS1 Further Mathematics results pending</span>
          </li>
          <li class="flex items-center gap-3">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: var(--info, #2563eb);"></span> 
            <span>Upload resources for SS2 Physics</span>
          </li>
        </ul>
      </div>
    </div>
  `}function l(){document.querySelectorAll(".mark-attendance-btn").forEach(e=>{e.addEventListener("click",()=>{t("#/teacher/attendance")})})}export{l as init,r as render};
