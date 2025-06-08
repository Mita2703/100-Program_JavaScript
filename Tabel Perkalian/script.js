function tampilkanTabel() {
  const angka = parseInt(document.getElementById("angka").value);
  const divTabel = document.getElementById("tabelPerkalian");

  if (isNaN(angka) || angka < 1) {
    divTabel.innerHTML = "<p>Masukkan angka valid (minimal 1)!</p>";
    return;
  }

  let html = `<table>
                <tr><th>Perkalian</th><th>Hasil</th></tr>`;

  for (let i = 1; i <= 10; i++) {
    html += `<tr><td>${angka} × ${i}</td><td>${angka * i}</td></tr>`;
  }

  html += "";

  divTabel.innerHTML = html;
}
