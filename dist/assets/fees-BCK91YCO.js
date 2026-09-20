import{i as r}from"./index-xgeGj0Eo.js";import{f as l,g as u,a as v,c as p,s as b,p as f,j as y}from"./mock-C48JQzvI.js";import{o as h}from"./modal-Cwa9fv8K.js";function P(){const d=l(u()),n=l(v()),s=p.map(t=>`<option value="${t.name}">${t.name}</option>`).join(""),a=b.map(t=>{const e=t.amountDue-t.amountPaid,c=e>0?"color: red;":"color: green;",o=f.find(m=>m.studentId===t.id),i=o?y(o.date):"N/A";return`
      <tr class="ledger-row" data-class="${t.class}">
        <td class="td-name">${t.name}</td>
        <td>${t.class}</td>
        <td>${l(t.amountDue)}</td>
        <td>${l(t.amountPaid)}</td>
        <td style="${c} font-weight:bold;">${l(e)}</td>
        <td>${i}</td>
        <td>
          ${e>0?`<button class="btn btn-sm btn-primary record-payment-btn" data-id="${t.id}" data-name="${t.name}" data-balance="${e}">Record Payment</button>`:'<span class="text-muted">Cleared</span>'}
        </td>
      </tr>
    `}).join("");return`
    <div class="page-header">
      <h2>Fee Management</h2>
    </div>
    
    <div class="summary-bar" style="display:flex;gap:20px;margin-bottom:24px;">
      <div class="summary-item stat-card" style="flex:1;">
        <div class="stat-card-content">
          <div class="summary-item-label stat-card-label">Total Collected</div>
          <div class="summary-item-value stat-card-value">${d}</div>
        </div>
        <div class="stat-icon green">${r.creditCard}</div>
      </div>
      <div class="summary-item stat-card" style="flex:1;">
        <div class="stat-card-content">
          <div class="summary-item-label stat-card-label">Total Outstanding</div>
          <div class="summary-item-value stat-card-value">${n}</div>
        </div>
        <div class="stat-icon amber">${r.creditCard}</div>
      </div>
    </div>
    
    <div class="table-card">
      <div class="table-header">
        <div class="table-header-left">
          <select id="fee-class-filter" class="form-select filter-select">
            <option value="all">All Classes</option>
            ${s}
          </select>
        </div>
      </div>
      <table style="width:100%;text-align:left;border-collapse:collapse;">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Amount Due</th>
            <th>Amount Paid</th>
            <th>Balance</th>
            <th>Last Payment Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${a}
        </tbody>
      </table>
    </div>
  `}function x(){const d=document.getElementById("fee-class-filter"),n=document.querySelectorAll(".ledger-row");d.addEventListener("change",()=>{const s=d.value;n.forEach(a=>{a.style.display=s==="all"||a.dataset.class===s?"":"none"})}),document.querySelectorAll(".record-payment-btn").forEach(s=>{s.addEventListener("click",a=>{const t=a.target.dataset.name,e=parseFloat(a.target.dataset.balance);h({title:`Record Payment - ${t}`,content:`
          <div class="form-group">
            <label class="form-label">Amount</label>
            <input type="number" class="form-input" max="${e}" value="${e}" required>
          </div>
          <div class="form-group">
            <label class="form-label">Date</label>
            <input type="date" class="form-input" required>
          </div>
          <div class="form-group">
            <label class="form-label">Method</label>
            <select class="form-select" required>
              <option value="Bank Transfer">Bank Transfer</option>
              <option value="Cash">Cash</option>
              <option value="POS">POS</option>
            </select>
          </div>
        `})})})}export{x as init,P as render};
