let ukuranFont = 24; 

function ubahFont(aksi) {
  if (aksi === "besar") {
    ukuranFont += 2;
  } else if (aksi === "kecil") {
    ukuranFont = Math.max(8, ukuranFont - 2); 
  }
  document.getElementById("teks").style.fontSize = ukuranFont + "px";
}

function resetFont() {
  ukuranFont = 24;
  document.getElementById("teks").style.fontSize = ukuranFont + "px";
}
