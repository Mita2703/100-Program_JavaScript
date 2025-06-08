const form = document.getElementById("dataForm");
const tbody = document.querySelector("#dataTable tbody");
let nomor = 1;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const umur = document.getElementById("umur").value.trim();

  if (!nama || !umur || isNaN(umur) || umur <= 0) {
    alert("Mohon isi nama dan umur dengan benar.");
    return;
  }

  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${nomor++}</td>
    <td>${nama}</td>
    <td>${umur}</td>
  `;

  tbody.appendChild(tr);

  form.reset();
});
