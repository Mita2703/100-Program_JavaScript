function hitungRataRata() {
  const input = document.getElementById("inputArray").value;
  const hasilElemen = document.getElementById("hasil");

  if (!input.trim()) {
    hasilElemen.textContent = "Masukkan angka";
    hasilElemen.style.color = "red";
    return;
  }

  const angkaArray = input
    .split(",")
    .map((item) => parseFloat(item.trim()))
    .filter((num) => !isNaN(num));

  if (angkaArray.length === 0) {
    hasilElemen.textContent = "Input tidak valid, masukkan angka yang benar.";
    hasilElemen.style.color = "red";
    return;
  }

  const total = angkaArray.reduce((acc, curr) => acc + curr, 0);
  const rataRata = (total / angkaArray.length).toFixed(2);

  hasilElemen.textContent = `Rata-rata dari [${angkaArray.join(
    ", "
  )}] adalah ${rataRata}`;
  hasilElemen.style.color = "green";
}
