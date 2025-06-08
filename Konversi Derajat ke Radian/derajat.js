function konversi() {
  const deg = parseFloat(document.getElementById("derajat").value);
  const output = document.getElementById("hasil");

  if (isNaN(deg)) {
    output.innerText = "Masukkan angka yang valid!";
  } else {
    const rad = (deg * Math.PI / 180).toFixed(4);
    output.innerText = `Radian: ${rad}`;
  }
}
