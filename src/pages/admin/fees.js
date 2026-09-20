import { icons } from '../../icons.js';
import { students, payments, classes, formatCurrency, formatDate, getTotalCollected, getTotalOutstanding } from '../../data/mock.js';
import { openModal, closeModal } from '../../components/modal.js';

export function render() {
  const totalCollected = formatCurrency(getTotalCollected());
  const totalOutstanding = formatCurrency(getTotalOutstanding());
  const classOptions = classes.map(c => `<option value="${c.name}">${c.name}</option>`).join('');

  const studentLedger = students.map(s => {
    const balance = s.amountDue - s.amountPaid;
    const balanceColor = balance > 0 ? 'color: red;' : 'color: green;';
    const lastPayment = payments.find(p => p.studentId === s.id);
    const lastPaymentDate = lastPayment ? formatDate(lastPayment.date) : 'N/A';
    
    return `
      <tr class="ledger-row" data-class="${s.class}">
        <td class="td-name">${s.name}</td>
        <td>${s.class}</td>
        <td>${formatCurrency(s.amountDue)}</td>
        <td>${formatCurrency(s.amountPaid)}</td>
        <td style="${balanceColor} font-weight:bold;">${formatCurrency(balance)}</td>
        <td>${lastPaymentDate}</td>
        <td>
          ${balance > 0 ? `<button class="btn btn-sm btn-primary record-payment-btn" data-id="${s.id}" data-name="${s.name}" data-balance="${balance}">Record Payment</button>` : '<span class="text-muted">Cleared</span>'}
        </td>
      </tr>
    `;
  }).join('');

  return `
    <div class="page-header">
      <h2>Fee Management</h2>
    </div>
    
    <div class="summary-bar" style="display:flex;gap:20px;margin-bottom:24px;">
      <div class="summary-item stat-card" style="flex:1;">
        <div class="stat-card-content">
          <div class="summary-item-label stat-card-label">Total Collected</div>
          <div class="summary-item-value stat-card-value">${totalCollected}</div>
        </div>
        <div class="stat-icon green">${icons.creditCard}</div>
      </div>
      <div class="summary-item stat-card" style="flex:1;">
        <div class="stat-card-content">
          <div class="summary-item-label stat-card-label">Total Outstanding</div>
          <div class="summary-item-value stat-card-value">${totalOutstanding}</div>
        </div>
        <div class="stat-icon amber">${icons.creditCard}</div>
      </div>
    </div>
    
    <div class="table-card">
      <div class="table-header">
        <div class="table-header-left">
          <select id="fee-class-filter" class="form-select filter-select">
            <option value="all">All Classes</option>
            ${classOptions}
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
          ${studentLedger}
        </tbody>
      </table>
    </div>
  `;
}

export function init() {
  const classFilter = document.getElementById('fee-class-filter');
  const rows = document.querySelectorAll('.ledger-row');

  classFilter.addEventListener('change', () => {
    const val = classFilter.value;
    rows.forEach(row => {
      row.style.display = (val === 'all' || row.dataset.class === val) ? '' : 'none';
    });
  });

  document.querySelectorAll('.record-payment-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const studentName = e.target.dataset.name;
      const balance = parseFloat(e.target.dataset.balance);
      
      openModal({
        title: `Record Payment - ${studentName}`,
        content: `
          <div class="form-group">
            <label class="form-label">Amount</label>
            <input type="number" class="form-input" max="${balance}" value="${balance}" required>
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
        `,
        onSubmit: () => {
          closeModal();
        }
      });
    });
  });
}
