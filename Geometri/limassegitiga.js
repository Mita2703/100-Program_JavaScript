const luasA = document.getElementById('fr-luasA')
const luasST = document.getElementById('fr-luasST')
const tinggi = document.getElementById('fr-tinggi')
const btnhasil = document.getElementById('btn-hasil')
const LuasP = document.getElementById('txt-luasP')
const volume = document.getElementById('txt-volume')

const hitungluasP = (LA, LST) => LA + (3 * LST);
const hitungvolume = (LA, t) => 1/3 * LA * t

btnhasil.addEventListener('click', function() {
  let LA = Number(luasA.value);
  let LST = Number(luasST.value);
  let t = Number(tinggi.value);
  LuasP.textContent = hitungluasP(LA, LST).toFixed(2);
  volume.textContent = hitungvolume(LA, t).toFixed(2);
})