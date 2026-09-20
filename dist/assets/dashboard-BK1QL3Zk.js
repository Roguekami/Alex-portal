import{n as a,i as s}from"./index-xgeGj0Eo.js";import{f as d,g as o,a as r,b as u,e as m,s as b,t as g}from"./mock-C48JQzvI.js";function h(){const n=b.length,i=g.length,e=d(o()),c=d(r()),v=u.slice(0,2).map(t=>`
    <div class="announcement-card">
      <div class="announcement-date">${t.date}</div>
      <div class="announcement-title">${t.title}</div>
      <div class="announcement-body">${t.body}</div>
    </div>
  `).join(""),l=m.map(t=>`
    <div class="event-item">
      <div class="event-date-badge">
        <span class="day">${t.day}</span>
        <span class="month">${t.month}</span>
      </div>
      <div>
        <div class="event-title">${t.title}</div>
        <div class="event-desc">${t.description||""}</div>
      </div>
    </div>
  `).join("");return`
    <div class="page-header">
      <h2>Dashboard</h2>
    </div>
    
    <div class="card-grid">
      <div class="stat-card">
        <div class="stat-card-content">
          <div class="stat-card-label">Total Students</div>
          <div class="stat-card-value">${n}</div>
          <div class="stat-card-sub">Currently enrolled</div>
        </div>
        <div class="stat-icon blue">${s.users}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-content">
          <div class="stat-card-label">Total Teachers</div>
          <div class="stat-card-value">${i}</div>
          <div class="stat-card-sub">Active staff</div>
        </div>
        <div class="stat-icon green">${s.graduationCap}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-content">
          <div class="stat-card-label">Fees Collected</div>
          <div class="stat-card-value">${e}</div>
          <div class="stat-card-sub">This term</div>
        </div>
        <div class="stat-icon blue">${s.creditCard}</div>
      </div>
      <div class="stat-card">
        <div class="stat-card-content">
          <div class="stat-card-label">Fees Outstanding</div>
          <div class="stat-card-value">${c}</div>
          <div class="stat-card-sub">Pending payments</div>
        </div>
        <div class="stat-icon amber">${s.creditCard}</div>
      </div>
    </div>

    <div class="quick-actions mt-6 mb-6">
      <button class="btn btn-primary" id="btn-enroll">
        ${s.plus} Enroll Student
      </button>
      <button class="btn btn-secondary" id="btn-announce">
        ${s.megaphone} Post Announcement
      </button>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
      <div>
        <div class="section-heading">Recent Announcements</div>
        <div class="card">
          ${v}
        </div>
      </div>
      <div>
        <div class="section-heading">Upcoming Events</div>
        <div class="card">
          ${l}
        </div>
      </div>
    </div>
  `}function y(){document.getElementById("btn-enroll").addEventListener("click",()=>a("#/admin/students")),document.getElementById("btn-announce").addEventListener("click",()=>a("#/admin/announcements"))}export{y as init,h as render};
