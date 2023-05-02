console.log(document);



  const myButton = document.querySelector("#scroll");
myButton.addEventListener("click", () => {
  alert("Button clicked!");
});

/// EVENT LISTENERS ///

// h1 style
let h = document.getElementById("Abtme");
if (h) {
  h.addEventListener("click", function (e) {
    this.style.color = "#5D3FD3";
  });
}

let h2 = document.getElementById("edu1");
if (h2) {
  h2.addEventListener("click", function (e) {
    this.style.color = "#5D3FD3";
  });
}