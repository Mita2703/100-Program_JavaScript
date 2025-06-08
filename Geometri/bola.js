const jari = document.getElementById('fr-jari');
const btnhasil = document.querySelector('#btn-hasil');
const volume = document.querySelector('#txt-volume');
const LuasP = document.querySelector('#txt-luasP');

const hasilvolume = (r) => 4/3 * 3.14 * r * r * r;
const hasilluasP = (r) => 4 * 3.14 * r * r;

btnhasil.addEventListener('click', function () {
  let r = Number(jari.value);
  volume.textContent = hasilvolume (r).toFixed(2);
  LuasP.textContent = hasilluasP (r).toFixed(2);
})