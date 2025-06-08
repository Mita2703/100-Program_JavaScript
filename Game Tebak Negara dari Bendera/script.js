const soal = [
  {
    negara: "Indonesia",
    gambar: "https://flagcdn.com/w320/id.png"
  },
  {
    negara: "Jepang",
    gambar: "https://flagcdn.com/w320/jp.png"
  },
  {
    negara: "Amerika Serikat",
    gambar: "https://flagcdn.com/w320/us.png"
  },
  {
    negara: "Jerman",
    gambar: "https://flagcdn.com/w320/de.png"
  },
  {
    negara: "Brasil",
    gambar: "https://flagcdn.com/w320/br.png"
  }
];

let indeksSoal = 0;
let skor = 0;

function tampilkanSoal() {
  const data = soal[indeksSoal];
  document.getElementById("flag").src = data.gambar;
  document.getElementById("jawaban").value = "";
  document.getElementById("feedback").textContent = "";
}

function cekJawaban() {
  const jawaban = document.getElementById("jawaban").value.trim().toLowerCase();
  const benar = soal[indeksSoal].negara.toLowerCase();

  if (jawaban === benar) {
    skor++;
    document.getElementById("feedback").textContent = "✅ Benar!";
  } else {
    document.getElementById("feedback").textContent = `❌ Salah! Jawaban: ${soal[indeksSoal].negara}`;
  }

  document.getElementById("skor").textContent = skor;
}

function nextSoal() {
  indeksSoal = (indeksSoal + 1) % soal.length;
  tampilkanSoal();
}

// Inisialisasi
window.onload = tampilkanSoal;
