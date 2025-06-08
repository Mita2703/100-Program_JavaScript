let antrian = [];

function tambahAntrian() {
  const nama = document.getElementById('nama').value.trim();
  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  antrian.push(nama);
  document.getElementById('nama').value = "";
  tampilkanAntrian();
  document.getElementById('pesanLayanan').textContent = "";
}

function layaniAntrian() {
  if (antrian.length === 0) {
    document.getElementById('pesanLayanan').textContent = "Antrian kosong!";
    return;
  }

  const dilayani = antrian.shift();
  tampilkanAntrian();
  document.getElementById('pesanLayanan').textContent = `Sedang melayani: ${dilayani}`;
}

function tampilkanAntrian() {
  const daftar = document.getElementById('daftarAntrian');
  daftar.innerHTML = "";

  antrian.forEach((orang, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${orang}`;
    daftar.appendChild(item);
  });
}
