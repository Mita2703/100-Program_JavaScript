let counter = 0;

function uploadDisplay() {
  document.getElementById('display').innerHTML = counter;
}
function tambah() {
  counter++;
  uploadDisplay();
}
function kurang() {
  counter--;
  uploadDisplay();
}
function reset() {
  counter = 0;
  uploadDisplay();
}