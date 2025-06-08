const nilaiA = document.getElementById('fr-a')
const nilaiB = document.getElementById('fr-b')
const nilaiC = document.getElementById('fr-c')
const nilaiD = document.getElementById('fr-d')
const tinggi = document.getElementById('fr-tinggi')
const btnhasil = document.querySelector('#btn-hasil')
const luas = document.querySelector('#txt-luas')
const keliling = document.querySelector('#txt-keliling')

const hasilluas = (a,b,t) => 1/2 * (a + b) * t ;
const hasilkeliling = (a,b,c,d) => a + b + c + d ;

btnhasil.addEventListener('click', function () {
  let a = Number(nilaiA.value) ;
  let b = Number(nilaiB.value) ;
  let c = Number(nilaiC.value) ;
  let d = Number(nilaiD.value) ;
  let t = Number(tinggi.value) ;
  luas.textContent = hasilluas (a,b,t) ;
  keliling.textContent = hasilkeliling (a,b,c,d) ;
})