function gabungkanArray() {
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  const hasil = array1.concat(array2);

  document.getElementById("hasilGabung").textContent = "[" + hasil.join(", ") + "]";
}
