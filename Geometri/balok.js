const panjang = document.getElementById('fr-panjang')
const lebar = document.getElementById('fr-lebar')
const tinggi = document.getElementById('fr-tinggi')
const btnHitung = document.getElementById('btn-hitung')
const luas = document.getElementById('txt-luas')
const volume = document.getElementById('txt-volume')


const hitungVolume = (p,l,t) => p * l * t ;
const hitungLuas = (p,l,t) => 2 * (p * l) + (p * t) + (l * t) ;


btnHitung.addEventListener ('click', function (){
  let p = panjang.value;
  let l = lebar.value;
  let t = tinggi.value;
  luas.textContent = hitungLuas(p,l,t);
  volume.textContent = hitungVolume(p,l,t);
})