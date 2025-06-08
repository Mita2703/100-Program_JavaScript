function validasiNoHP() {
  const nohp = document.getElementById("nohp").value.trim();
  const hasilElemen = document.getElementById("hasil");

  const regex = /^08\d{8,11}$/;

  if (!nohp) {
    hasilElemen.textContent = "Masukkan nomor HP.";
    hasilElemen.style.color = "red";
    return;
  }

  if (regex.test(nohp)) {
    hasilElemen.textContent = "Nomor HP valid ✅";
    hasilElemen.style.color = "green";
  } else {
    hasilElemen.textContent = "Nomor HP tidak valid ❌";
    hasilElemen.style.color = "red";
  }
}
