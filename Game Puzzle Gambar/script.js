let puzzle = [];
const grid = document.getElementById("puzzle");
const statusText = document.getElementById("status");

const correct = [...Array(9).keys()];

function buatPuzzle() {
  puzzle = [...correct];
  updateTampilan();
}

function acakPuzzle() {
  puzzle = [...correct];

  for (let i = puzzle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [puzzle[i], puzzle[j]] = [puzzle[j], puzzle[i]];
  }

  updateTampilan();
  statusText.textContent = "";
}

function updateTampilan() {
  grid.innerHTML = "";

  puzzle.forEach((pos, index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    if (pos === 8) {
      tile.classList.add("empty");
    } else {
      const x = (pos % 3) * -100;
      const y = Math.floor(pos / 3) * -100;
      tile.style.backgroundPosition = `${x}px ${y}px`;
      tile.onclick = () => geserTile(index);
    }

    grid.appendChild(tile);
  });
}

function geserTile(i) {
  const kosong = puzzle.indexOf(8);
  const bisaGeser = [i - 1, i + 1, i - 3, i + 3];

  if (bisaGeser.includes(kosong) && validGerakan(i, kosong)) {
    [puzzle[i], puzzle[kosong]] = [puzzle[kosong], puzzle[i]];
    updateTampilan();

    if (sudahBenar()) {
      statusText.textContent = "🎉 Puzzle selesai!";
    }
  }
}

function validGerakan(i, kosong) {
  const baris1 = Math.floor(i / 3);
  const baris2 = Math.floor(kosong / 3);
  return Math.abs(baris1 - baris2) <= 1;
}

function sudahBenar() {
  return puzzle.every((val, idx) => val === correct[idx]);
}

window.onload = () => {
  buatPuzzle();
};
