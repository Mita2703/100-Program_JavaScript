function hitungJarakNyata() {
  const skala = parseFloat(document.getElementById("skala").value);
  const jarakPeta = parseFloat(document.getElementById("jarakPeta").value);

  if (isNaN(skala) || isNaN(jarakPeta) || skala <= 0 || jarakPeta <= 0) {
    document.getElementById("hasil").innerText = "Masukkan angka yang valid!";
    return;
  }

  // Konversi: 1 cm di peta = skala cm di dunia nyata → cm ke km
  const jarakNyataKm = (jarakPeta * skala) / 100000;

  document.getElementById("hasil").innerText = `Jarak sebenarnya: ${jarakNyataKm.toFixed(2)} km`;
}
