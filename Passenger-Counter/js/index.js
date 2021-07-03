// document.getElementById("count_el").innerText = 5;

//vars:

let count = 0;
let count_el = document.getElementById("count_el");
let saveEl = document.getElementById("save-el");
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
//functions:
function increment() {
  console.log("increment function start. count value: " + count);

  count++;
  console.log("count value has been incremented by 1. Count value: " + count);
  count_el.innerText = count;
  console.log("increment function end.");
}

function save() {
  saveEl.innerText += " " + count + " -";
}

//Events:
incrementBtn.addEventListener("click", increment, false);
saveBtn.addEventListener("click", save, false);
