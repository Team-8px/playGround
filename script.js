const colorChangebtn = document.querySelector(".btn");
const colorContainer = document.querySelector(".color-container");

let counter = 0;

colorChangebtn.addEventListener("click", e => {
  let colorBox = ["green", "black", "red", "gold"];
  if (colorBox.length === counter) {
    counter = 0;
  } else if (e.target.classList.value === "btn") {
    colorContainer.style.backgroundColor = colorBox[counter];
    counter += 1;
  }
  console.log(counter);
});
