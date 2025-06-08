// Akun contoh
const users = [
  { username: "admin", password: "admin123" },
  { username: "siswa", password: "siswa123" }
];

// Cek jika sudah login
window.onload = function () {
  const currentUser = localStorage.getItem("user");
  if (currentUser) {
    showWelcome(currentUser);
  }
};

function login() {
  const uname = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error-msg");

  const user = users.find(u => u.username === uname && u.password === pass);

  if (user) {
    localStorage.setItem("user", uname);
    showWelcome(uname);
  } else {
    error.textContent = "Username atau password salah!";
  }
}

function logout() {
  localStorage.removeItem("user");
  document.getElementById("welcome-box").style.display = "none";
  document.getElementById("login-box").style.display = "block";
}

function showWelcome(username) {
  document.getElementById("user-display").textContent = username;
  document.getElementById("login-box").style.display = "none";
  document.getElementById("welcome-box").style.display = "block";
}
