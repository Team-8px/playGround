const colorChangebtn = document.querySelector(".btn");
const colorContainer = document.querySelector(".color-container");

let colorBox = [
  "var(--main-color--navy)",
  "var(--main-color--black)",
  "var(--main-color--beige)",
  "var(--main-color--red)",
];

let counter = 0;

colorChangebtn.addEventListener("click", e => {
  if (colorBox.length === counter) {
    counter = 1;
    colorContainer.style.backgroundColor = colorBox[0];
  } else if (e.target.classList.value === "btn") {
    colorContainer.style.backgroundColor = colorBox[counter];
    counter += 1;
  }
});
