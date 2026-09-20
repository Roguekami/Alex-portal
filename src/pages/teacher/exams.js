import { icons } from '../../icons.js';
import { examQuestions, classes } from '../../data/mock.js';

export function render() {
  const questions = examQuestions || [];
  const hasQuestions = questions.length > 0;
  
  const classOptions = (classes || []).map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  
  const questionsHtml = questions.map((q, i) => `
    <div class="question-card card mb-4 p-4 border rounded">
      <div class="question-card-header flex justify-between items-center mb-3">
        <div class="question-number font-medium text-lg">Question ${i + 1}</div>
        <div class="flex gap-2">
          <button class="btn btn-sm btn-ghost text-secondary">${icons.edit}</button>
          <button class="btn btn-sm btn-ghost text-danger">${icons.trash}</button>
        </div>
      </div>
      <div class="question-text mb-4 text-gray-800">${q.question}</div>
      <div class="question-options" style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        ${(q.options || []).map((opt, optIndex) => `
          <div class="question-opt p-3 border rounded ${opt === q.correct ? 'correct bg-green-50 border-green-500' : 'bg-gray-50'}">
            <span class="font-medium mr-2">${['A', 'B', 'C', 'D'][optIndex]}.</span> ${opt}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    <div class="page-header flex justify-between items-center mb-6">
      <h2>Exam Creation</h2>
      <button class="btn btn-primary" ${!hasQuestions ? 'disabled' : ''}>Publish Exam</button>
    </div>
    
    <div class="card mb-6 p-5">
      <div class="form-row flex gap-4 mb-4">
        <div class="form-group flex-1">
          <label class="form-label block mb-2 font-medium">Subject</label>
          <select class="form-select w-full p-2 border rounded">
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Biology</option>
          </select>
        </div>
        <div class="form-group flex-1">
          <label class="form-label block mb-2 font-medium">Class</label>
          <select class="form-select w-full p-2 border rounded">
            ${classOptions}
          </select>
        </div>
      </div>
      <div class="form-row flex gap-4 items-end">
        <div class="form-group flex-1">
          <label class="form-label block mb-2 font-medium">Exam Date & Time</label>
          <input type="datetime-local" class="form-input w-full p-2 border rounded" />
        </div>
        <div class="form-group flex-1">
          <label class="form-label block mb-2 font-medium">Duration (minutes)</label>
          <input type="number" class="form-input w-full p-2 border rounded" value="60" />
        </div>
        <div class="mb-2">
          <span class="badge badge-warning p-2">Draft</span>
        </div>
      </div>
    </div>
    
    <div class="section-heading mb-4 text-xl font-semibold">Question Bank (${questions.length} questions)</div>
    
    <div class="cbt-body questions-list">
      ${questionsHtml}
    </div>
    
    <button class="btn btn-secondary mt-4 flex items-center gap-2">
      ${icons.plus} Add Question
    </button>
  `;
}

export function init() {
  // Initialize dynamic behaviors if needed
}
