function konversiPanjang() {
  const nilai = parseFloat(document.getElementById("nilai").value);
  const dari = document.getElementById("dari").value;
  const ke = document.getElementById("ke").value;
  const hasilElemen = document.getElementById("hasil");

  if (isNaN(nilai)) {
    hasilElemen.textContent = "Masukkan nilai panjang yang valid.";
    hasilElemen.style.color = "red";
    return;
  }

  let meter;
  switch (dari) {
    case "m": meter = nilai; break;
    case "cm": meter = nilai / 100; break;
    case "km": meter = nilai * 1000; break;
  }

  let hasil;
  switch (ke) {
    case "m": hasil = meter; break;
    case "cm": hasil = meter * 100; break;
    case "km": hasil = meter / 1000; break;
  }

  hasilElemen.textContent = `${nilai} ${dari} = ${hasil} ${ke}`;
  hasilElemen.style.color = "green";
}
