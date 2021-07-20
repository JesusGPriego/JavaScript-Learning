const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

let settedColor = -1;

btn.addEventListener("click", changeColor);

function changeColor() {
  //random  number between 0 - 3
  let randomNumber = -1;
  do {
    randomNumber = getRandomNumber();
  } while (settedColor === randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  settedColor = randomNumber;
}

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
