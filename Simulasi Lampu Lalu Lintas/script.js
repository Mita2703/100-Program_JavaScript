let index = 0;
const lampu = ["merah", "kuning", "hijau"];

function gantiLampu() {
  lampu.forEach(id => {
    document.getElementById(id).classList.remove("aktif");
  });

  document.getElementById(lampu[index]).classList.add("aktif");

  index = (index + 1) % lampu.length;
}

setInterval(gantiLampu, 2000);

gantiLampu();
