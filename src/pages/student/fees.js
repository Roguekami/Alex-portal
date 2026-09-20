import { icons } from '../../icons.js';
import { demoAccounts, formatCurrency, formatDate, getPaymentsForStudent } from '../../data/mock.js';

export function render() {
  const studentId = 1;
  const payments = getPaymentsForStudent(studentId);
  const amountDue = 75000;
  const amountPaid = 75000;
  const balance = amountDue - amountPaid;

  return `
    <div class="page-header">
      <h2>Fees & Payment</h2>
    </div>

    <div class="summary-bar mb-6">
      <div class="summary-item">
        <div class="summary-item-label">Amount Due</div>
        <div class="summary-item-value">${formatCurrency(amountDue)}</div>
      </div>
      <div class="summary-item">
        <div class="summary-item-label">Amount Paid</div>
        <div class="summary-item-value">${formatCurrency(amountPaid)}</div>
      </div>
    </div>

    <div class="card mb-6">
      <h3 class="section-heading mb-4">Account Summary</h3>
      <div class="flex justify-between items-center mb-2">
        <span class="text-secondary">Term Fee</span>
        <span class="font-medium">${formatCurrency(amountDue)}</span>
      </div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-secondary">Total Paid</span>
        <span class="font-medium">${formatCurrency(amountPaid)}</span>
      </div>
      <div class="flex justify-between items-center mt-4 pt-4 border-t">
        <span class="font-semibold">Balance</span>
        <span class="font-semibold ${balance === 0 ? 'text-success' : 'text-danger'}">${formatCurrency(balance)}</span>
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
            ${payments.map(payment => `
              <tr>
                <td>${formatDate(payment.date)}</td>
                <td>${formatCurrency(payment.amount)}</td>
                <td>${payment.method}</td>
              </tr>
            `).join('')}
            ${payments.length === 0 ? `
              <tr>
                <td colspan="3" class="text-center text-muted">No payments found.</td>
              </tr>
            ` : ''}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

export function init() {
  // Initialization logic for fees
}
