function konversiBiner() {
  const desimal = parseInt(document.getElementById("desimal").value);
  const hasilElemen = document.getElementById("hasil");

  if (isNaN(desimal)) {
    hasilElemen.textContent = "Masukkan angka desimal.";
    return;
  }

  const biner = desimal.toString(2);
  hasilElemen.textContent = `Biner dari ${desimal} adalah ${biner}`;
}