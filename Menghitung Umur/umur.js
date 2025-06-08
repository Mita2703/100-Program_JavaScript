const tahun = document.getElementById('tahun');
const hitung = document.getElementById('hitungBtn');
const hasil = document.getElementById('hasil');

hitung.addEventListener('click', () => {
  const tahunLahir = parseInt(tahun.value);
  const tahunSekarang = new Date().getFullYear();

  if (isNaN(tahunLahir) || tahunLahir > tahunSekarang || tahunLahir < 1900) {
    hasil.textContent = "Masukkan tahun lahir yang valid ya!";
  } else {
    const umur = tahunSekarang - tahunLahir;
    hasil.textContent = `Kamu berumur ${umur} tahun`;
  }
});
