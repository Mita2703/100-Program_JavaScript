function hitungJarak() {
  const x1 = parseFloat(document.getElementById("x1").value);
  const y1 = parseFloat(document.getElementById("y1").value);
  const x2 = parseFloat(document.getElementById("x2").value);
  const y2 = parseFloat(document.getElementById("y2").value);
  const hasilElemen = document.getElementById("hasil");

  if ([x1, y1, x2, y2].some(isNaN)) {
    hasilElemen.textContent = "Masukkan semua koordinat";
    hasilElemen.style.color = "red";
    return;
  }

  const dx = x2 - x1;
  const dy = y2 - y1;
  const jarak = Math.sqrt(dx * dx + dy * dy).toFixed(2);

  hasilElemen.textContent = `Jarak antara dua titik adalah ${jarak}`;
  hasilElemen.style.color = "green";
}
