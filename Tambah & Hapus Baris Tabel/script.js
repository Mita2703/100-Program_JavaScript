function tambahData() {
  const nama = document.getElementById('nama').value.trim();
  const umur = document.getElementById('umur').value.trim();

  if (nama === '' || umur === '') {
    alert('Nama dan Umur harus diisi!');
    return;
  }

  const tabel = document.getElementById('tabelData');
  const baris = document.createElement('tr');

  baris.innerHTML = `
    <td>${nama}</td>
    <td>${umur}</td>
    <td><button onclick="hapusBaris(this)">Hapus</button></td>
  `;

  tabel.appendChild(baris);

  document.getElementById('nama').value = '';
  document.getElementById('umur').value = '';
}

function hapusBaris(button) {
  const baris = button.parentElement.parentElement;
  baris.remove();
}
