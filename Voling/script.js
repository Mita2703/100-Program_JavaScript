const suara = {
  Anies: 0,
  Prabowo : 0,
  Ganjar: 0
};

const form = document.getElementById("votingForm");
const hasilVoting = document.getElementById("hasilVoting");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const pilihan = document.querySelector('input[name="candidate"]:checked');
  if (!pilihan) {
    alert("Silakan pilih kandidat terlebih dahulu!");
    return;
  }

  const kandidat = pilihan.value;
  suara[kandidat]++;
  tampilkanHasil();
  form.reset();
});

function tampilkanHasil() {
  hasilVoting.innerHTML = "";
  for (const kandidat in suara) {
    const li = document.createElement("li");
    li.textContent = `${kandidat}: ${suara[kandidat]} suara`;
    hasilVoting.appendChild(li);
  }
}

tampilkanHasil();
