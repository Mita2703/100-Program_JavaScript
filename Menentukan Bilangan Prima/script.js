function cekPrima() {
  const angka = parseInt(document.getElementById("angkaInput").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(angka) || angka < 1) {
    hasil.innerText = "Masukkan angka lebih dari 0.";
    return;
  }

  if (angka === 1) {
    hasil.innerText = "1 bukan bilangan prima.";
    return;
  }

  let prima = true;
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      prima = false;
      break;
    }
  }

  if (prima) {
    hasil.innerText = `${angka} adalah bilangan prima. ✅`;
  } else {
    hasil.innerText = `${angka} bukan bilangan prima. ❌`;
  }
}
