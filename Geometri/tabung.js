const jari = document.getElementById('fr-jari')
const tinggi = document.getElementById('fr-tinggi')
const btnhasil = document.querySelector('#btn-hasil')
const volume = document.querySelector('#txt-volume')
const luasP = document.querySelector('#txt-luasp')

const hasilvolume = (r,t) => Math.PI * r * r * t ;
const hasilluasp = (r,t) => 2 * Math.PI * r * (r + t) ;

btnhasil.addEventListener('click', function () {
  let r = Number(jari.value) ;
  let t = Number(tinggi.value) ;
  volume.textContent = hasilvolume (r,t).toFixed(2) ;
  luasP.textContent = hasilluasp (r,t).toFixed(2) ;
})