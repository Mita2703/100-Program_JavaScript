const diagonal1 = document.getElementById('fr-d1')
const diagonal2 = document.getElementById('fr-d2')
const sisi1 = document.getElementById('fr-sisi1')
const sisi2 = document.getElementById('fr-sisi2')
const btnhasil = document.getElementById('btn-hasil')
const luas = document.getElementById('txt-luas')
const keliling = document.getElementById('txt-keliling')

const hitungluas = (d1,d2) => 1/2 * d1 * d2;
const hitungkeliling = (s1,s2) => 2 * (s1 + s2);

btnhasil.addEventListener ('click', function () {
  let d1 = diagonal1.value;
  let d2 = diagonal2.value;
  let s1 = sisi1.value;
  let s2 = sisi2.value;
  luas.textContent = hitungluas(d1,d2);
  keliling.textContent = hitungkeliling(s1,s2);
})