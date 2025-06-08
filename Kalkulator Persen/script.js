function hitungPersen() {
  const nilai = parseFloat(document.getElementById("nilai").value);
  const persen = parseFloat(document.getElementById("persen").value);
  const hasilElemen = document.getElementById("hasil");

  if (isNaN(nilai) || isNaN(persen)) {
    hasilElemen.textContent = "Masukkan angka yang valid.";
    return;
  }

  const hasil = (persen / 100) * nilai;
  hasilElemen.textContent = `${persen}% dari ${nilai} adalah ${hasil}`;
}
