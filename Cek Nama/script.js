let daftarNama = ["Mita", "Qirana", "Nony", "Aulia", "Zara","Faisal", "Fahrizal", "Azka", "Felix","Marcel","Jude Bellingham", "Mbape", "Ghina", "Alvin", "Iky"];

function cekNama() {
  const input = document.getElementById("inputNama");
  const namaDicari = input.value.trim();
  const hasil = document.getElementById("hasilCek");

  if (namaDicari === "") {
    hasil.textContent = "Silakan masukkan nama terlebih dahulu.";
    hasil.style.color = "red";
    return;
  }

  const index = daftarNama.findIndex(nama => nama.toLowerCase() === namaDicari.toLowerCase());

  if (index !== -1) {
    hasil.textContent = `Nama "${namaDicari}" ditemukan di daftar. ✅`;
    hasil.style.color = "green";
  } else {
    hasil.textContent = `Nama "${namaDicari}" tidak ditemukan. ❌`;
    hasil.style.color = "red";
  }
}

function hapusNama() {
  const input = document.getElementById("inputNama");
  const namaHapus = input.value.trim();
  const hasil = document.getElementById("hasilCek");

  if (namaHapus === "") {
    hasil.textContent = "Silakan masukkan nama terlebih dahulu.";
    hasil.style.color = "red";
    return;
  }

  const index = daftarNama.findIndex(nama => nama.toLowerCase() === namaHapus.toLowerCase());

  if (index !== -1) {
    daftarNama.splice(index, 1);
    hasil.textContent = `Nama "${namaHapus}" berhasil dihapus. ✅`;
    hasil.style.color = "green";
  } else {
    hasil.textContent = `Nama "${namaHapus}" tidak ditemukan, jadi tidak bisa dihapus. ❌`;
    hasil.style.color = "red";
  }
}
