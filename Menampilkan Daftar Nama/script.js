function tampilkanNama() {
  const daftarNama = ["Mita", "Qirana", "Nony", "Aulia", "Zara"];
  const ul = document.getElementById("daftarNama");

  ul.innerHTML = "";

  daftarNama.forEach(function(nama) {
    const li = document.createElement("li");
    li.textContent = nama;
    ul.appendChild(li);
  });
}
