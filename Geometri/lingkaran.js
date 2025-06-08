const jariP = document.getElementById('fr-jariP');
const jari = document.getElementById('fr-jari');
const btnhasil = document.getElementById('btn-hasil');
const Luas = document.getElementById('txt-luas');
const Keliling = document.getElementById('txt-keliling');

const hitungluas = (JP) => 3.14 * JP;
const hitungkeliling = (J) => 2 * 3.14 * J;

btnhasil.addEventListener('click', function() {
  let JP = Number(jariP.value);
  let J =  Number(jari.value);
  Luas.textContent = hitungluas (JP).toFixed(2);
  Keliling.textContent = hitungkeliling (J).toFixed(2);
})