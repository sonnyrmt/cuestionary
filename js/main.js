import { cuestionary } from "./modules/pyr.js";

let rightAnswerCounter = 0;
let wrongAnswerCounter = 0;

let questionArea = document.getElementsByClassName("question")[0],
  answerArea = document.getElementsByClassName("answers")[0],
  current = 0;
	const printQuestion = (curr) => {
		let question = Object.keys(cuestionary)[curr];
		/* console.log(question); */
		questionArea.innerHTML = "";
		questionArea.innerHTML = question;
	};

const printAnswer = (curr) => {
  let answers = cuestionary[Object.keys(cuestionary)[curr]];
  answerArea.innerHTML = "";
  /* console.log(answers.length-1); */

  for (let i = 0; i < answers.length - 1; i += 1) {
    let div = document.createElement("div");
    let text = document.createTextNode(answers[i]);

    div.appendChild(text);
    div.setAttribute("id", `${i}`);

    div.addEventListener("click", reply_click(i, answers));
    answerArea.appendChild(div);
  }
};

const reply_click = (i, answers) => {
  return function () {
    let selectedAnswer = i,
      correctAnswer = answers[answers.length - 1];

    if (selectedAnswer === correctAnswer) {
      rightAnswerCounter++;
    } else {
      wrongAnswerCounter++;
    }

    if (current < Object.keys(cuestionary).length - 1) {
      current++;
      printQuestion(current);
      printAnswer(current);
    } else {
      questionArea.innerHTML = `Respondiste ${rightAnswerCounter} bien y ${wrongAnswerCounter} mal`;
      answerArea.innerHTML = "";
    
      
    }
  };
};

printQuestion(current);
printAnswer(current);
