import{s as t,n as s}from"./index-xgeGj0Eo.js";import{d}from"./mock-C48JQzvI.js";function v(){return`
    <div class="login-layout">
      <div class="login-card">
        <div class="login-logo">AL<span>Ex</span>portal</div>
        <p class="login-subtitle">Sign in to your school portal</p>

        <form id="login-form">
          <div class="form-group">
            <label class="form-label" for="login-email">Email address</label>
            <input class="form-input" type="email" id="login-email" placeholder="Enter your email" autocomplete="email" />
          </div>
          <div class="form-group">
            <label class="form-label" for="login-password">Password</label>
            <input class="form-input" type="password" id="login-password" placeholder="Enter your password" autocomplete="current-password" />
          </div>
          <a href="#" class="login-forgot">Forgot password?</a>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;padding:12px;">
            Sign in
          </button>
        </form>

        <div class="demo-accounts">
          <div class="demo-accounts-label">Quick demo access</div>
          <button class="demo-btn" data-role="admin">
            <div class="demo-btn-avatar" style="background:#2563eb;">AJ</div>
            <div class="demo-btn-info">
              <div class="demo-btn-name">Adewale Johnson</div>
              <div class="demo-btn-role">Administrator</div>
            </div>
          </button>
          <button class="demo-btn" data-role="teacher">
            <div class="demo-btn-avatar" style="background:#059669;">NO</div>
            <div class="demo-btn-info">
              <div class="demo-btn-name">Mrs. Ngozi Okafor</div>
              <div class="demo-btn-role">Teacher — Mathematics</div>
            </div>
          </button>
          <button class="demo-btn" data-role="student">
            <div class="demo-btn-avatar" style="background:#d97706;">CE</div>
            <div class="demo-btn-info">
              <div class="demo-btn-name">Chidera Eze</div>
              <div class="demo-btn-role">Student — SS2</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  `}function u(){var i;document.querySelectorAll(".demo-btn").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.role;t(d[a]),s(`#/${a}/dashboard`)})}),(i=document.getElementById("login-form"))==null||i.addEventListener("submit",o=>{var l,n;o.preventDefault();const a=(n=(l=document.getElementById("login-email"))==null?void 0:l.value)==null?void 0:n.trim().toLowerCase(),e=Object.values(d).find(r=>r.email===a);e?(t(e),s(`#/${e.role}/dashboard`)):(t(d.admin),s("#/admin/dashboard"))})}export{u as init,v as render};
