function konversiBerat() {
  const nilai = parseFloat(document.getElementById("nilai").value);
  const dari = document.getElementById("dari").value;
  const ke = document.getElementById("ke").value;
  const hasilElemen = document.getElementById("hasil");

  if (isNaN(nilai)) {
    hasilElemen.textContent = "Masukkan nilai berat";
    hasilElemen.style.color = "red";
    return;
  }

  let kg;
  switch (dari) {
    case "kg": kg = nilai; break;
    case "g": kg = nilai / 1000; break;
    case "ons": kg = nilai / 10; break;
  }

  let hasil;
  switch (ke) {
    case "kg": hasil = kg; break;
    case "g": hasil = kg * 1000; break;
    case "ons": hasil = kg * 10; break;
  }

  hasilElemen.textContent = `${nilai} ${dari} = ${hasil} ${ke}`;
  hasilElemen.style.color = "green";
}
