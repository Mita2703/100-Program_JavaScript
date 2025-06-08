function validasiForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const umur = document.getElementById("umur").value.trim();
  const pesan = document.getElementById("pesanError");

  if (nama === "" || email === "" || umur === "") {
    pesan.textContent = "Semua kolom harus diisi!";
    return false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    pesan.textContent = "Email tidak valid!";
    return false;
  }

  if (isNaN(umur) || umur < 13) {
    pesan.textContent = "Umur harus angka dan minimal 13 tahun!";
    return false;
  }

  pesan.style.color = "green";
  pesan.textContent = "Form berhasil dikirim!";
  return false; 
}
