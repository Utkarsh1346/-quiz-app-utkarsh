const questions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Markup Language", "None of these"],
    answer: "Hyper Text Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  scoreEl.textContent = "";

  q.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `<label><input type="radio" name="option" value="${option}" /> ${option}</label>`;
    optionsEl.appendChild(li);
  });
}

function showScore() {
  const percent = Math.round((score / questions.length) * 100);
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  scoreEl.innerHTML = `You scored ${score} out of ${questions.length} (${percent}%)`;
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector("input[name='option']:checked");
  if (!selected) {
    alert("Please select an option!");
    return;
  }

  if (selected.value === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  restartBtn.style.display = "none";
  showQuestion();
});

showQuestion();
