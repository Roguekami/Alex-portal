import { icons } from '../../icons.js';
import { examQuestions } from '../../data/mock.js';
import { navigate } from '../../router.js';

let state = {
  currentQuestion: 0,
  answers: [],
  flagged: [],
  reviewPanelOpen: false
};

export function render() {
  return `
    <div class="cbt-layout">
      <div class="cbt-header flex justify-between items-center p-4 bg-white border-b">
        <div class="font-semibold">Mathematics &mdash; SS2 Exam</div>
        <div class="cbt-progress text-sm">Question <span id="q-num">1</span> of ${examQuestions.length}</div>
        <div class="cbt-timer font-mono font-medium flex items-center gap-2">
          ${icons.clock} 45:00
        </div>
      </div>
      
      <div class="flex flex-1 overflow-hidden relative">
        <div class="cbt-main flex-1 flex flex-col p-6 overflow-y-auto">
          <div class="cbt-body max-w-3xl mx-auto w-full flex-1">
            <h3 class="cbt-question-num text-lg font-medium mb-4" id="q-title">Question 1</h3>
            <div class="cbt-question text-lg mb-8" id="q-text"></div>
            
            <div class="cbt-options flex flex-col gap-3" id="q-options">
              <!-- Options rendered via JS -->
            </div>
          </div>
          
          <div class="cbt-footer flex justify-between items-center mt-8 pt-4 border-t">
            <div class="flex gap-2">
              <button class="btn btn-secondary flex items-center gap-2" id="btn-flag">
                ${icons.flag} Flag for Review
              </button>
              <button class="btn btn-secondary flex items-center gap-2" id="btn-review">
                ${icons.eye} Review
              </button>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-secondary" id="btn-prev" disabled>Previous</button>
              <button class="btn btn-primary flex items-center gap-2" id="btn-next">
                Next ${icons.chevronRight}
              </button>
            </div>
          </div>
        </div>
        
        <div class="cbt-review-panel bg-gray-50 border-l w-64 flex-col hidden" id="review-panel">
          <div class="cbt-review-header p-4 border-b font-medium flex justify-between items-center">
            Review Questions
            <button class="btn btn-ghost p-1" id="btn-close-review">${icons.x}</button>
          </div>
          <div class="cbt-review-grid grid grid-cols-4 gap-2 p-4 overflow-y-auto" id="review-grid">
            <!-- Review dots rendered via JS -->
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderQuestion() {
  const q = examQuestions[state.currentQuestion];
  document.getElementById('q-num').textContent = state.currentQuestion + 1;
  document.getElementById('q-title').textContent = `Question ${state.currentQuestion + 1}`;
  document.getElementById('q-text').textContent = q.question;
  
  const optionsContainer = document.getElementById('q-options');
  const letters = ['A', 'B', 'C', 'D'];
  optionsContainer.innerHTML = q.options.map((opt, i) => `
    <div class="cbt-option p-4 border rounded cursor-pointer hover:bg-gray-50 transition-colors ${state.answers[state.currentQuestion] === i ? 'selected border-blue-500 bg-blue-50' : ''}" data-index="${i}">
      <span class="cbt-option-letter font-medium mr-3">${letters[i]}.</span>
      <span class="cbt-option-text">${opt}</span>
    </div>
  `).join('');
  
  document.getElementById('btn-prev').disabled = state.currentQuestion === 0;
  
  const btnNext = document.getElementById('btn-next');
  if (state.currentQuestion === examQuestions.length - 1) {
    btnNext.innerHTML = 'Submit Exam';
    btnNext.classList.remove('btn-secondary');
    btnNext.classList.add('btn-primary');
  } else {
    btnNext.innerHTML = `Next ${icons.chevronRight}`;
  }
  
  const btnFlag = document.getElementById('btn-flag');
  if (state.flagged.includes(state.currentQuestion)) {
    btnFlag.classList.add('text-amber-600', 'bg-amber-50');
  } else {
    btnFlag.classList.remove('text-amber-600', 'bg-amber-50');
  }
  
  renderReviewGrid();
}

function renderReviewGrid() {
  const grid = document.getElementById('review-grid');
  grid.innerHTML = examQuestions.map((_, i) => `
    <div class="cbt-review-dot w-10 h-10 flex items-center justify-center rounded border cursor-pointer
      ${state.currentQuestion === i ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}
      ${state.answers[i] !== undefined ? 'bg-blue-100 text-blue-800' : 'bg-white'}
      ${state.flagged.includes(i) ? 'border-amber-500' : ''}
    " data-index="${i}">
      ${i + 1}
    </div>
  `).join('');
}

export function init() {
  state = {
    currentQuestion: 0,
    answers: [],
    flagged: [],
    reviewPanelOpen: false
  };
  
  renderQuestion();
  
  document.getElementById('q-options').addEventListener('click', (e) => {
    const option = e.target.closest('.cbt-option');
    if (option) {
      const idx = parseInt(option.dataset.index);
      state.answers[state.currentQuestion] = idx;
      
      document.querySelectorAll('.cbt-option').forEach(el => {
        el.classList.remove('selected', 'border-blue-500', 'bg-blue-50');
      });
      option.classList.add('selected', 'border-blue-500', 'bg-blue-50');
      renderReviewGrid();
    }
  });
  
  document.getElementById('btn-next').addEventListener('click', () => {
    if (state.currentQuestion < examQuestions.length - 1) {
      state.currentQuestion++;
      renderQuestion();
    } else {
      if (confirm('Are you sure you want to submit your exam?')) {
        navigate('#/student/results');
      }
    }
  });
  
  document.getElementById('btn-prev').addEventListener('click', () => {
    if (state.currentQuestion > 0) {
      state.currentQuestion--;
      renderQuestion();
    }
  });
  
  document.getElementById('btn-flag').addEventListener('click', () => {
    const idx = state.flagged.indexOf(state.currentQuestion);
    if (idx > -1) {
      state.flagged.splice(idx, 1);
    } else {
      state.flagged.push(state.currentQuestion);
    }
    renderQuestion();
  });
  
  const toggleReview = () => {
    state.reviewPanelOpen = !state.reviewPanelOpen;
    const panel = document.getElementById('review-panel');
    if (state.reviewPanelOpen) {
      panel.classList.remove('hidden');
      panel.classList.add('flex');
    } else {
      panel.classList.add('hidden');
      panel.classList.remove('flex');
    }
  };
  
  document.getElementById('btn-review').addEventListener('click', toggleReview);
  document.getElementById('btn-close-review').addEventListener('click', toggleReview);
  
  document.getElementById('review-grid').addEventListener('click', (e) => {
    const dot = e.target.closest('.cbt-review-dot');
    if (dot) {
      state.currentQuestion = parseInt(dot.dataset.index);
      renderQuestion();
    }
  });
}
