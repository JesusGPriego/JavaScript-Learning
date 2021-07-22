//Using selectors inside the element

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

//Traversing the DOM

/* const btns = document.querySelectorAll(".question-btn");
// Events
btns.forEach(function (btn) {
  btn.addEventListener("click", toggleAnswer);
});

// Functions
function toggleAnswer(e) {
  const question = e.currentTarget.parentElement.parentElement;

  question.classList.toggle("show-text");
} */
