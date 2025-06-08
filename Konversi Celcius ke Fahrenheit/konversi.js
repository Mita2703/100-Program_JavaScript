const suhu = document.getElementById('celcius');
const konversi = document.getElementById('konvertBtn');
const hasil = document.getElementById('hasil');

konversi.addEventListener('click', () => {
  const celcius = parseFloat(suhu.value);

  if (isNaN(celcius)) {
    hasil.textContent = "Masukkan angka yang valid ya!";
  } else {
    const fahrenheit = (celcius * 9/5) + 32;
    hasil.textContent = `${celcius}°C = ${fahrenheit.toFixed(2)}°F`;
  }
});
