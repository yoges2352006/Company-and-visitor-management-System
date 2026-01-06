const role = localStorage.getItem("role");
const page = window.location.pathname;

if (
  role === "visitor" &&
  (page.includes("admin") || page.includes("visitor-list"))
) {
  alert("Access Denied!");
  window.location.href = "login.html";
}
