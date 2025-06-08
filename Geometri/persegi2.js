const sisi = document.getElementById('fr-sisi')
const btnhasil = document.querySelector('#btn-hasil')
const luas = document.querySelector('#txt-luas')
const keliling = document.querySelector('#txt-keliling')

const hasilluas = (sisi) => sisi * sisi
const hasilkeliling = (sisi) => 4 * sisi

btnhasil.addEventListener('click', function () {
  let s = sisi.value 
  luas.textContent = hasilluas (s)
  keliling.textContent = hasilkeliling (s)
})