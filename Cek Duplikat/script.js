function cekDuplikat() {
  const array = [1, 2, 3, 4, 2, 5, 3, 6, 1];
  const duplikat = [];

  const hitung = {};

  for (let angka of array) {
    hitung[angka] = (hitung[angka] || 0) + 1;
  }

  for (let angka in hitung) {
    if (hitung[angka] > 1) {
      duplikat.push(angka);
    }
  }

  const hasil = document.getElementById("hasilDuplikat");

  if (duplikat.length > 0) {
    hasil.textContent = `Duplikat ditemukan: [${duplikat.join(", ")}]`;
    hasil.style.color = "red";
  } else {
    hasil.textContent = "Tidak ada duplikat.";
    hasil.style.color = "green";
  }
}
