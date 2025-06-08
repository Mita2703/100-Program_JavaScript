function hitungRange() {
  const input = document.getElementById("angka").value;
  const angkaArray = input.split(',').map(a => parseFloat(a.trim())).filter(a => !isNaN(a));

  if (angkaArray.length === 0) {
    document.getElementById("hasil").innerText = "Masukkan angka yang valid!";
    return;
  }

  const min = Math.min(...angkaArray);
  const max = Math.max(...angkaArray);
  const range = max - min;

  document.getElementById("hasil").innerText = `Range: ${range} (Max: ${max} - Min: ${min})`;
}
