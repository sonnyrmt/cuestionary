import { cuestionary } from "./modules/pyr.js";

let current = 0;
let rightAnswerCounter = 0;
let wrongAnswerCounter = 0;

const printQuestion = (i) => {
  const q = cuestionary[i];
  let questionHTML = document.getElementById("question");
  questionHTML.innerHTML = q.question;
};

const changeHidden = (number) => {
  document.querySelector(".answer-data").value = number;
};

function reply_click(clicked_id, selectedAnswerHTML,rightAnswer) {
  let buttonSelector = document.getElementById(`${clicked_id}`);
  buttonSelector.classList.add("selected");

  let finalAnswer = selectedAnswerHTML[clicked_id]

  if (finalAnswer != rightAnswer) {
    buttonSelector.style.backgroundColor = "red";
    wrongAnswerCounter++
    printQuestion(1);
    printAnswer(1);

  } else {
    buttonSelector.style.backgroundColor = "green";
    rightAnswerCounter++
    printQuestion(1);
    printAnswer(1);
  }

}

const printAnswer = (x) => {
  const container = document.querySelector(".container");
  const a = cuestionary[x].answer;
  const r = cuestionary[x].rightAnswer; 
  let documentFragment = document.createDocumentFragment();

  for (let i = 0; i < 5; i++) {
    let p = document.createElement("P");
    p.classList.add("answers");
    p.innerHTML = `<button id="${i}"></button> ${a[i]}`;

    p.addEventListener("click", () => {
      reply_click(i,a,r);
      changeHidden(i);
    });

    documentFragment.appendChild(p);
  }
  container.appendChild(documentFragment); 
};



printQuestion(current);
printAnswer(current);
