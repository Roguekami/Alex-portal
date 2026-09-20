function d(){return`
    <div class="page-header">
      <h2>Attendance Summary</h2>
    </div>

    <div class="card mb-6">
      <div class="mb-4">
        <h3 class="font-semibold">2024/2025 &mdash; Term 2</h3>
        <p class="text-sm text-muted">Jan 08, 2024 - Mar 28, 2024</p>
      </div>

      <div class="flex gap-4 mb-4">
        <div class="flex-1">
          <p class="text-sm text-muted">Days Present</p>
          <p class="font-semibold text-lg">18</p>
        </div>
        <div class="flex-1">
          <p class="text-sm text-muted">Days Absent</p>
          <p class="font-semibold text-lg">2</p>
        </div>
        <div class="flex-1">
          <p class="text-sm text-muted">Attendance Rate</p>
          <p class="font-semibold text-lg">90%</p>
        </div>
      </div>

      <div class="progress-bar mb-2">
        <div class="progress-fill green" style="width: 90%;"></div>
      </div>
    </div>

    <div class="card">
      <h3 class="section-heading mb-4">Monthly Breakdown</h3>
      <div class="table-card">
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Days Present</th>
              <th>Days Absent</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>January</td>
              <td>10</td>
              <td>1</td>
              <td>90.9%</td>
            </tr>
            <tr>
              <td>February</td>
              <td>8</td>
              <td>1</td>
              <td>88.9%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `}function a(){}export{a as init,d as render};
