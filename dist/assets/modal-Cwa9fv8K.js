import{i}from"./index-xgeGj0Eo.js";let o=null;function r(){o||(o=document.createElement("div"),o.id="modal-root",document.body.appendChild(o))}function v({title:e,content:n,footer:s}){r();const c=s??`
    <button class="btn btn-secondary" data-modal-close>Cancel</button>
    <button class="btn btn-primary" data-modal-submit>Save</button>
  `;o.innerHTML=`
    <div class="modal-overlay open" id="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <h3 class="modal-title">${e}</h3>
          <button class="modal-close" data-modal-close>${i.x}</button>
        </div>
        <div class="modal-body">${n}</div>
        <div class="modal-footer">${c}</div>
      </div>
    </div>
  `,o.querySelectorAll("[data-modal-close]").forEach(t=>{t.addEventListener("click",a)});const d=o.querySelector(".modal-overlay");d.addEventListener("click",t=>{t.target===d&&a()}),document.addEventListener("keydown",l)}function a(){if(!o)return;const e=o.querySelector(".modal-overlay");e&&(e.classList.remove("open"),setTimeout(()=>{o.innerHTML=""},200)),document.removeEventListener("keydown",l)}function l(e){e.key==="Escape"&&a()}export{v as o};
