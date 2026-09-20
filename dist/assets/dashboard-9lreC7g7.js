import{i as a}from"./index-xgeGj0Eo.js";import{b as d,j as s}from"./mock-C48JQzvI.js";function c(){const t=d[0];return`
    <div class="page-header">
      <h2>Dashboard</h2>
    </div>

    <div class="greeting-card card">
      <h2>Good morning, Chidera</h2>
      <p>SS2 &middot; ALP/2024/0342</p>
    </div>

    <div class="card-grid mt-6">
      <div class="stat-card">
        <div class="stat-icon blue">
          ${a.clipboardCheck}
        </div>
        <div>
          <div class="stat-card-label">Attendance</div>
          <div class="stat-card-value">18/20 days</div>
          <div class="stat-card-sub text-sm text-muted">90% attendance rate</div>
        </div>
      </div>
      
      <div class="stat-card">
        <div class="stat-icon green">
          ${a.creditCard}
        </div>
        <div>
          <div class="stat-card-label">Fee Balance</div>
          <div class="stat-card-value">₦0</div>
          <div class="stat-card-sub text-sm text-muted">Fully paid &mdash; Term 2</div>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon blue">
          ${a.trendingUp}
        </div>
        <div>
          <div class="stat-card-label">Class Position</div>
          <div class="stat-card-value">3rd</div>
          <div class="stat-card-sub text-sm text-muted">Out of 33 students</div>
        </div>
      </div>
    </div>

    <div class="mt-6">
      <h3 class="section-heading">Latest Announcement</h3>
      ${t?`
        <div class="announcement-card card">
          <div class="announcement-date text-sm text-muted mb-2">${s(t.date)}</div>
          <h4 class="announcement-title font-semibold mb-2">${t.title}</h4>
          <p class="announcement-body text-secondary">${t.body}</p>
        </div>
      `:'<div class="empty-state">No new announcements.</div>'}
    </div>
  `}function n(){}export{n as init,c as render};
