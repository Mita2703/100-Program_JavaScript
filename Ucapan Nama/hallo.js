const inputnama = document.getElementById('namaInput');
const SayHiBtn = document.getElementById('sayHello');
const output = document.getElementById('output');

SayHiBtn.addEventListener('click', () => {
  const nama = inputnama.value.trim();
  if (nama) {
    output.textContent = `Hello, ${nama}! 👋` ;
  } else {
    output.textContent = `Tolong isi Nama dulu ya 😉`;
  };
})