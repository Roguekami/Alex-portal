import{i as a}from"./index-xgeGj0Eo.js";import{b as o,j as n}from"./mock-C48JQzvI.js";import{o as s}from"./modal-Cwa9fv8K.js";function d(){const t=o.map(e=>`
    <div class="announcement-card" style="margin-bottom:16px;">
      <div class="announcement-date font-medium text-sm text-secondary">${n?n(e.date):e.date}</div>
      <div class="announcement-title font-semibold mt-2">${e.title}</div>
      <div class="announcement-body mt-2 text-muted">${e.body}</div>
    </div>
  `).join("");return`
    <div class="page-header">
      <h2>Announcements & Events</h2>
      <button class="btn btn-primary" id="btn-new-announcement">
        ${a.plus} New Announcement
      </button>
    </div>
    
    <div class="card">
      ${t}
    </div>
  `}function m(){document.getElementById("btn-new-announcement").addEventListener("click",()=>{s({title:"New Announcement",content:`
        <div class="form-group">
          <label class="form-label">Title</label>
          <input type="text" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Date</label>
          <input type="date" class="form-input" required>
        </div>
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea class="form-textarea form-input" rows="4" required></textarea>
        </div>
      `})})}export{m as init,d as render};
