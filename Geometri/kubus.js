const sisi = document.getElementById('fr-sisi')
const btnhasil = document.querySelector('#btn-hasil')
const luas = document.querySelector('#txt-luas')
const keliling = document.querySelector('#txt-keliling')

const hasilluas = (s) => 6 * (s * s)
const hasilkeliling = (s) => 12 * s

btnhasil.addEventListener('click', function () {
  let s = sisi.value 
  luas.textContent = hasilluas (s)
  keliling.textContent = hasilkeliling (s)
})