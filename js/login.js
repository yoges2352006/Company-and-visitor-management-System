function login() {
    const role = document.getElementById("role").value;
    if (role === "admin") {
      window.location.href = "admindashboard.html";
    } else {
      window.location.href = "employeedashboard.html";
    }
  }
  function handleLogin(e) {
    e.preventDefault();
  
    const role = document.getElementById("role").value;
  
    localStorage.setItem("role", role);
  
    if (role === "visitor") {
      window.location.href = "register.html";
    } else if (role === "admin") {
      window.location.href = "admin-dashboard.html";
    } else {
      alert("Access page not implemented yet");
    }
  }
  