import{n as b,i as r}from"./index-xgeGj0Eo.js";import{m as o}from"./mock-C48JQzvI.js";let e={currentQuestion:0,answers:[],flagged:[],reviewPanelOpen:!1};function g(){return`
    <div class="cbt-layout">
      <div class="cbt-header flex justify-between items-center p-4 bg-white border-b">
        <div class="font-semibold">Mathematics &mdash; SS2 Exam</div>
        <div class="cbt-progress text-sm">Question <span id="q-num">1</span> of ${o.length}</div>
        <div class="cbt-timer font-mono font-medium flex items-center gap-2">
          ${r.clock} 45:00
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
                ${r.flag} Flag for Review
              </button>
              <button class="btn btn-secondary flex items-center gap-2" id="btn-review">
                ${r.eye} Review
              </button>
            </div>
            <div class="flex gap-2">
              <button class="btn btn-secondary" id="btn-prev" disabled>Previous</button>
              <button class="btn btn-primary flex items-center gap-2" id="btn-next">
                Next ${r.chevronRight}
              </button>
            </div>
          </div>
        </div>
        
        <div class="cbt-review-panel bg-gray-50 border-l w-64 flex-col hidden" id="review-panel">
          <div class="cbt-review-header p-4 border-b font-medium flex justify-between items-center">
            Review Questions
            <button class="btn btn-ghost p-1" id="btn-close-review">${r.x}</button>
          </div>
          <div class="cbt-review-grid grid grid-cols-4 gap-2 p-4 overflow-y-auto" id="review-grid">
            <!-- Review dots rendered via JS -->
          </div>
        </div>
      </div>
    </div>
  `}function d(){const i=o[e.currentQuestion];document.getElementById("q-num").textContent=e.currentQuestion+1,document.getElementById("q-title").textContent=`Question ${e.currentQuestion+1}`,document.getElementById("q-text").textContent=i.question;const t=document.getElementById("q-options"),n=["A","B","C","D"];t.innerHTML=i.options.map((u,c)=>`
    <div class="cbt-option p-4 border rounded cursor-pointer hover:bg-gray-50 transition-colors ${e.answers[e.currentQuestion]===c?"selected border-blue-500 bg-blue-50":""}" data-index="${c}">
      <span class="cbt-option-letter font-medium mr-3">${n[c]}.</span>
      <span class="cbt-option-text">${u}</span>
    </div>
  `).join(""),document.getElementById("btn-prev").disabled=e.currentQuestion===0;const s=document.getElementById("btn-next");e.currentQuestion===o.length-1?(s.innerHTML="Submit Exam",s.classList.remove("btn-secondary"),s.classList.add("btn-primary")):s.innerHTML=`Next ${r.chevronRight}`;const l=document.getElementById("btn-flag");e.flagged.includes(e.currentQuestion)?l.classList.add("text-amber-600","bg-amber-50"):l.classList.remove("text-amber-600","bg-amber-50"),a()}function a(){const i=document.getElementById("review-grid");i.innerHTML=o.map((t,n)=>`
    <div class="cbt-review-dot w-10 h-10 flex items-center justify-center rounded border cursor-pointer
      ${e.currentQuestion===n?"border-blue-500 ring-2 ring-blue-200":"border-gray-200"}
      ${e.answers[n]!==void 0?"bg-blue-100 text-blue-800":"bg-white"}
      ${e.flagged.includes(n)?"border-amber-500":""}
    " data-index="${n}">
      ${n+1}
    </div>
  `).join("")}function f(){e={currentQuestion:0,answers:[],flagged:[],reviewPanelOpen:!1},d(),document.getElementById("q-options").addEventListener("click",t=>{const n=t.target.closest(".cbt-option");if(n){const s=parseInt(n.dataset.index);e.answers[e.currentQuestion]=s,document.querySelectorAll(".cbt-option").forEach(l=>{l.classList.remove("selected","border-blue-500","bg-blue-50")}),n.classList.add("selected","border-blue-500","bg-blue-50"),a()}}),document.getElementById("btn-next").addEventListener("click",()=>{e.currentQuestion<o.length-1?(e.currentQuestion++,d()):confirm("Are you sure you want to submit your exam?")&&b("#/student/results")}),document.getElementById("btn-prev").addEventListener("click",()=>{e.currentQuestion>0&&(e.currentQuestion--,d())}),document.getElementById("btn-flag").addEventListener("click",()=>{const t=e.flagged.indexOf(e.currentQuestion);t>-1?e.flagged.splice(t,1):e.flagged.push(e.currentQuestion),d()});const i=()=>{e.reviewPanelOpen=!e.reviewPanelOpen;const t=document.getElementById("review-panel");e.reviewPanelOpen?(t.classList.remove("hidden"),t.classList.add("flex")):(t.classList.add("hidden"),t.classList.remove("flex"))};document.getElementById("btn-review").addEventListener("click",i),document.getElementById("btn-close-review").addEventListener("click",i),document.getElementById("review-grid").addEventListener("click",t=>{const n=t.target.closest(".cbt-review-dot");n&&(e.currentQuestion=parseInt(n.dataset.index),d())})}export{f as init,g as render};
