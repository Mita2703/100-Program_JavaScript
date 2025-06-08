const alas = document.getElementById('fr-alas')
const tinggi = document.getElementById('fr-tinggi')
const Kalas = document.getElementById('fr-Kalas')
const tinggiP = document.getElementById('fr-tinggiP')
const btnhasil = document.querySelector('#btn-hasil')
const LuasPermukaanP = document.querySelector('#txt-luasPP')
const Volume = document.querySelector('#txt-volume')

const hasilluasPP = (a,t,KA,TP) => (2 * 1/2 * a * t) + (KA * TP)  ;
const hasilvolume = (a,t,TP) => (1/2 * a * t) * TP ;

btnhasil.addEventListener('click', function () {
  let a = Number(alas.value) ;
  let t = Number(tinggi.value) ;
  let KA = Number(Kalas.value) ;
  let TP = Number(tinggiP.value) ;

  LuasPermukaanP.textContent = hasilluasPP (a,t,KA,TP) ;
  Volume.textContent = hasilvolume (a,t,TP) ;
})