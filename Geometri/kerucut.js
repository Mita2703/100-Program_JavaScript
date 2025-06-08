const jaripersegi = document.getElementById('fr-jariP')
const tinggi = document.getElementById('fr-tinggi')
const jari = document.getElementById('fr-jari')
const sisi = document.getElementById('fr-sisi')
const luas = document.querySelector('#txt-luas')
const keliling = document.querySelector('#txt-keliling')
const btnhasil = document.querySelector('#btn-hitung')

const hitungluas = (j,s) => 3.14 * j * (j + s);
const hitungkeliling = (jP,t) => 1/3 * 3.14 * jP * t;

btnhasil.addEventListener('click', function() {
  let t = Number(tinggi.value); 
  let s = Number(sisi.value);
  let jP = Number(jaripersegi.value);
  let j = Number(jari.value);
  luas.textContent = hitungluas (j,s).toFixed(2);
  keliling.textContent = hitungkeliling (jP,t).toFixed(2);
})
