function hitungFPB(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function hitungKPK(a, b) {
  return (a * b) / hitungFPB(a, b);
}

function hitung() {
  const bil1 = parseInt(document.getElementById("bil1").value);
  const bil2 = parseInt(document.getElementById("bil2").value);

  if (isNaN(bil1) || isNaN(bil2)) {
    alert("Masukkan dua bilangan yang valid.");
    return;
  }

  const fpb = hitungFPB(bil1, bil2);
  const kpk = hitungKPK(bil1, bil2);

  document.getElementById("hasilFPB").textContent = `FPB: ${fpb}`;
  document.getElementById("hasilKPK").textContent = `KPK: ${kpk}`;
}
