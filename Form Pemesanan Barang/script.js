const hargaBarang = {
  "Topi": 500000,
  "Sepatu":1500000,
  "Dress": 2000000,
  "Jeans": 500000
};

function updateHarga() {
  const barang = document.getElementById("barang").value;
  const harga = hargaBarang[barang] || 0;
  document.getElementById("harga").value = harga;
  hitungTotal(); 
}

function hitungTotal() {
  const harga = parseInt(document.getElementById("harga").value) || 0;
  const jumlah = parseInt(document.getElementById("jumlah").value) || 0;
  const total = harga * jumlah;
  document.getElementById("total").value = total;
}
