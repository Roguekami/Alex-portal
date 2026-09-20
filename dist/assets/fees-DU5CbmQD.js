import{o as i,f as t,j as m}from"./mock-C48JQzvI.js";function o(){const d=i(1),s=75e3,a=75e3,n=s-a;return`
    <div class="page-header">
      <h2>Fees & Payment</h2>
    </div>

    <div class="summary-bar mb-6">
      <div class="summary-item">
        <div class="summary-item-label">Amount Due</div>
        <div class="summary-item-value">${t(s)}</div>
      </div>
      <div class="summary-item">
        <div class="summary-item-label">Amount Paid</div>
        <div class="summary-item-value">${t(a)}</div>
      </div>
    </div>

    <div class="card mb-6">
      <h3 class="section-heading mb-4">Account Summary</h3>
      <div class="flex justify-between items-center mb-2">
        <span class="text-secondary">Term Fee</span>
        <span class="font-medium">${t(s)}</span>
      </div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-secondary">Total Paid</span>
        <span class="font-medium">${t(a)}</span>
      </div>
      <div class="flex justify-between items-center mt-4 pt-4 border-t">
        <span class="font-semibold">Balance</span>
        <span class="font-semibold text-success">${t(n)}</span>
      </div>
    </div>

    <div class="card">
      <h3 class="section-heading mb-4">Payment History</h3>
      <div class="table-card">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            ${d.map(e=>`
              <tr>
                <td>${m(e.date)}</td>
                <td>${t(e.amount)}</td>
                <td>${e.method}</td>
              </tr>
            `).join("")}
            ${d.length===0?`
              <tr>
                <td colspan="3" class="text-center text-muted">No payments found.</td>
              </tr>
            `:""}
          </tbody>
        </table>
      </div>
    </div>
  `}function r(){}export{r as init,o as render};
