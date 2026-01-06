function saveVisitor(e) {
    e.preventDefault();
  
    const visitor = {
      id: Date.now(),
      name: name.value,
      company: company.value,
      purpose: purpose.value,
      meet: meet.value,
      inTime: new Date().toLocaleTimeString()
    };
  
    const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
    visitors.push(visitor);
    localStorage.setItem("visitors", JSON.stringify(visitors));
  
    alert("Visitor Registered Successfully");
    window.location.href = "login.html";
  }
  