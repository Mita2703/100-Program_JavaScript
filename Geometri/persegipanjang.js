const panjang = document.getElementById('fr-panjang')
const lebar = document.getElementById('fr-lebar')
const btnhasil = document.querySelector('#btn-hasil')
const luas = document.querySelector('#txt-luas')


const hasilluas = (p,l) => p * l


btnhasil.addEventListener('click', function () {
  let p = panjang.value 
  let l = lebar.value 
  luas.textContent = hasilluas (p,l)
})