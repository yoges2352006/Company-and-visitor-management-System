const visitors = JSON.parse(localStorage.getItem("visitors")) || [];
const table = document.getElementById("visitorTable");

visitors.forEach(v => {
  const row = `
    <tr>
      <td>${v.name}</td>
      <td>${v.company}</td>
      <td>${v.purpose}</td>
      <td>
        <a href="visitor-details.html?id=${v.id}">View</a>
      </td>
    </tr>`;
  table.innerHTML += row;
});
