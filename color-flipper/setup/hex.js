const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const displayedColor = document.querySelector(".color");
button.addEventListener("click", changeColor);

function changeColor() {
  let color = "#";
  while (color.length < 7) {
    color += hex[getRandomElement()];
  }
  console.log("color", color);
  document.body.style.backgroundColor = color;
  displayedColor.textContent = color;
}

function getRandomElement() {
  return Math.floor(Math.random() * hex.length);
}
