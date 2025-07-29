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
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Markup Language", "None"],
    answer: "Hyper Text Markup Language"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="radio" name="option" value="${option}" /> ${option}`;
    optionsEl.appendChild(li);
  });
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
    questionEl.textContent = `You scored ${score} out of ${questions.length}`;
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
});

showQuestion();
