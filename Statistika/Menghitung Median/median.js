function hitungMedian() {
  const input = document.getElementById("dataInput").value;
  const angka = input.split(",").map(x => parseFloat(x.trim())).filter(x => !isNaN(x));

  if (angka.length === 0) {
    document.getElementById("hasil").innerText = "Masukkan angka yang valid!";
    return;
  }

  const sorted = angka.sort((a, b) => a - b);
  const tengah = Math.floor(sorted.length / 2);

  let median;
  if (sorted.length % 2 === 0) {
    median = (sorted[tengah - 1] + sorted[tengah]) / 2;
  } else {
    median = sorted[tengah];
  }

  document.getElementById("hasil").innerText = `Median: ${median}`;
}
