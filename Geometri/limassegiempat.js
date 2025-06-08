const luasA = document.getElementById('luasA')
const luasSL = document.getElementById('fr-luasSL')
const tinggi = document.getElementById('fr-tinggi')
const btnhasil = document.getElementById('btn-hasil')
const luasP = document.getElementById('txt-luasP')
const volume = document.getElementById('txt-volume')

const hitungluasP = (LA, LSL) => LA + LSL;
const hitungvolume = (LA, t) => 1/3 * LA * t;

btnhasil.addEventListener('click', function() {
  let LA = parseFloat(luasA.value);
  let LSL = parseFloat(luasSL.value);
  let t = parseFloat(tinggi.value);
  luasP.textContent = hitungluasP(LA,LSL)
  volume.textContent = hitungvolume(LA,t)
})
