let acc = document.getElementsByClassName("accordion");

for (let i =  0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight === "300px") {
        panel.style.maxHeight = "0";
    } else {
        panel.style.maxHeight = "300px";
    }
  })
}