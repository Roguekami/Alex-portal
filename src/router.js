// ===========================================================
// ALExportal — Router & Auth State
// ===========================================================

let _user = null;

export function navigate(path) {
  window.location.hash = path;
}

export function getUser() {
  return _user;
}

export function setUser(user) {
  _user = user;
}

export function clearUser() {
  _user = null;
}
