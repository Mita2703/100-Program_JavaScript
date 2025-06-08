const button = document.getElementById('warna');
const kodewarna = document.getElementById('kodewarna');

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, '0')}`;
}

button.addEventListener('click', () => {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  kodewarna.textContent = newColor;
  kodewarna.style.backgroundColor = newColor;
})