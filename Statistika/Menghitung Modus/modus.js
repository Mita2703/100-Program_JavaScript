function hitungModus() {
  const input = document.getElementById("dataInput").value;
  const angka = input.split(",").map(x => parseFloat(x.trim())).filter(x => !isNaN(x));

  if (angka.length === 0) {
    document.getElementById("hasil").innerText = "Masukkan angka yang valid!";
    return;
  }

  const frekuensi = {};
  let maxFreq = 0;
  let modus = [];

  angka.forEach(nilai => {
    frekuensi[nilai] = (frekuensi[nilai] || 0) + 1;
    if (frekuensi[nilai] > maxFreq) {
      maxFreq = frekuensi[nilai];
    }
  });

  for (const nilai in frekuensi) {
    if (frekuensi[nilai] === maxFreq && maxFreq > 1) {
      modus.push(Number(nilai));
    }
  }

  if (modus.length === 0) {
    document.getElementById("hasil").innerText = "Modus: Tidak ada (semua nilai unik)";
  } else {
    document.getElementById("hasil").innerText = `Modus: ${modus.join(", ")}`;
  }
}
