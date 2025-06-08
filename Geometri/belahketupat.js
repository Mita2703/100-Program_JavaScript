const diagonal1 = document.getElementById ('fr-d1')
const diagonal2 = document.getElementById ('fr-d2')
const sisi = document.getElementById ('fr-sisi')
const btnhasil = document.getElementById ('btn-hasil')
const luas = document.getElementById ('txt-luas')
const keliling = document.getElementById ('txt-keliling')


const hitungluas = (d1,d2) => 1/2 * d1 * d2;
const hitungkeliling = (s) => 4 * s;


btnhasil.addEventListener ('click', function (){
  let d1 = diagonal1.value;
  let d2 = diagonal2.value;
  let s = sisi.value;
  luas.textContent = hitungluas(d1,d2);
  keliling.textContent = hitungkeliling(s);
})


