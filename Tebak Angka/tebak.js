const angka = document.getElementById('angka');
const checkBtn = document.getElementById('checkBtn');
const hasil = document.getElementById('hasil');

const randomNumber = Math.floor(Math.random() * 10) + 1;

checkBtn.addEventListener('click', () => {
  const guess = parseInt(angka.value);
  
  if (!guess || guess < 1 || guess > 10) {
    hasil.textContent = 'Masukkan angka dari 1 sampai 10 ya!';
  } else if (guess === randomNumber) {
    hasil.textContent = `🎉 Benar! Angkanya adalah ${randomNumber}`;
  } else {
    hasil.textContent = `❌ Salah. Ayo coba lagi!`;
  }
});
