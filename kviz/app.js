const quizData = [
  {
    question: "Koji je glavni grad Francuske?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "London", correct: false },
      { text: "Pariz", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Koliko ima dana u nedelji?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question: 'Ko je autor "Romea i Julije"?',
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Fyodor Dostoevsky", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion(quizData[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  answerButtons.innerHTML = "";
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(answer) {
  const correct = answer.correct;
  if (correct) {
    score++;
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion(quizData[currentQuestionIndex]);
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  questionContainer.innerHTML = `Vaš rezultat: ${score} od ${quizData.length}`;
  answerButtons.innerHTML = "";
}
startQuiz();
