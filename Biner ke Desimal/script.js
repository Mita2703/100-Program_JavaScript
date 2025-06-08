function konversiBiner() {
  const biner = document.getElementById("biner").value.trim();
  const hasilElemen = document.getElementById("hasil");

  if (!/^[01]+$/.test(biner)) {
    hasilElemen.textContent = "Input tidak valid. Hanya boleh berisi angka 0 dan 1.";
    hasilElemen.style.color = "red";
    return;
  }

  const desimal = parseInt(biner, 2);
  hasilElemen.textContent = `Desimal dari ${biner} adalah ${desimal}`;
  hasilElemen.style.color = "green";
}
