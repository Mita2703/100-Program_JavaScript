function kurangkan() {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById("hasil").innerText = "Masukkan dua angka valid!";
    return;
  }

  const hasil = angka1 - angka2;
  document.getElementById("hasil").innerText = `Hasil: ${hasil}`;
}
