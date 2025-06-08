function hitungTotal() {
  const hargaBarang = parseInt(document.getElementById("barang").value);
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(jumlah) || jumlah <= 0) {
    hasil.innerText = "Masukkan jumlah yang valid.";
    return;
  }

  let total = hargaBarang * jumlah;
  let diskon = 0;

  if (total >= 100000) {
    diskon = 0.2;
  } else if (total >= 60000) {
    diskon = 0.1;
  } else if (total >= 30000) {
    diskon = 0.05;
  }

  let potongan = total * diskon;
  let totalSetelahDiskon = total - potongan;

  hasil.innerHTML = `
    Total Belanja: Rp ${total.toLocaleString("id-ID")} <br>
    Diskon: ${diskon * 100}% (Rp ${potongan.toLocaleString("id-ID")}) <br>
    Total Bayar: Rp ${totalSetelahDiskon.toLocaleString("id-ID")}
  `;
}
