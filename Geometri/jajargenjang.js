const nilaiA = document.getElementById('fr-a')
const nilaiB = document.getElementById('fr-b')
const tinggi = document.getElementById('fr-tinggi')
const btnhasil = document.querySelector('#btn-hasil')
const luas = document.querySelector('#txt-luas')
const keliling = document.querySelector('#txt-keliling')

const hasilluas = (a,t) => a * t ;
const hasilkeliling = (a,b) => 2 * (a + b);

btnhasil.addEventListener('click', function () {
  let a = Number(nilaiA.value) ;
  let b = Number(nilaiB.value) ;
  let t = Number(tinggi.value) ;
  luas.textContent = hasilluas (a,t) ;
  keliling.textContent = hasilkeliling (a,b) ;
})