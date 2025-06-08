const alas = document.getElementById('fr-alas')
const tinggi = document.getElementById('fr-tinggi')
const btnhasil = document.querySelector('#btn-hasil')
const luas = document.querySelector('#txt-luas')

const hasilluas = (a,t) => 1/2 * a * t ;

btnhasil.addEventListener('click', function () {
  let a = Number(alas.value) ;
  let t = Number(tinggi.value) ;
  luas.textContent = hasilluas (a,t) ;
})