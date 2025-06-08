function konversi() {
  const kursDollar = 16300; 
  const rupiah = document.getElementById("rupiahInput").value;

  if (rupiah === "" || isNaN(rupiah) || rupiah < 0) {
    document.getElementById("hasil").innerText = "Masukkan jumlah rupiah yang valid.";
    return;
  }

  const dollar = rupiah / kursDollar;
  document.getElementById("hasil").innerText = `💵 $${dollar.toFixed(2)}`;
}
