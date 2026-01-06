fields.forEach((field, index) => {
  field.style.opacity = "0";
  field.style.transition = "opacity 0.4s ease";
  
  setTimeout(() => {
    field.style.opacity = "1";
  }, 200 * index);
});
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
const visitor = visitors.find(v => v.id == id);

if (visitor) {
  visitorName.textContent = visitor.name;
  visitorCompany.textContent = visitor.company;
  visitorPurpose.textContent = visitor.purpose;
  visitorMeet.textContent = visitor.meet;
  visitorIn.textContent = visitor.inTime;
}

