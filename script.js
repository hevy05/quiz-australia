const questions = [
  {
    question: "What is the traditional dance form of the Indigenous people in Australia?",
    options: ["Didgeridoo Dance", "Boomerang Ballet", "Corroboree Dance"]
  },
  {
    question: "Which iconic Australian spread is often enjoyed on toast and is a staple in many Aussie households?",
    options: ["Kangaroo Jam", "Tim Tam Spread", "Vegemite"]
  },
  {
    question: "In Australian sports, what oval-shaped ball is used in a game that combines elements of soccer and rugby?",
    options: ["Rugby Ball", "Aussie Rules Football", "Soccer Oval Ball"]
  },
  {
    question: "Which natural wonder in Australia is the only living structure visible from space?",
    options: ["Uluru Rock Formation", "Great Ocean Road Reef", "Great Barrier Reef"]
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  
  questionContainer.innerHTML = `<p>${questions[currentQuestion].question}</p>`;
  optionsContainer.innerHTML = "";

  questions[currentQuestion].options.forEach((option, index) => {
    optionsContainer.innerHTML += `
      <input type="radio" name="option" value="${index}" id="option${index}">
      <label for="option${index}">${option}</label><br>
    `;
  });
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }

  // Check if the selected option is correct
  const isCorrect = selectedOption.value == questions[currentQuestion].options.indexOf("Corroboree Dance") ||
                    selectedOption.value == questions[currentQuestion].options.indexOf("Vegemite") ||
                    selectedOption.value == questions[currentQuestion].options.indexOf("Aussie Rules Football") ||
                    selectedOption.value == questions[currentQuestion].options.indexOf("Great Barrier Reef");

  // Display result
  alert(isCorrect ? "Correct!" : "Incorrect!");

  // Move to the next question
  currentQuestion++;

  // Check if there are more questions
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz completed! Thanks for playing.");
  }
}

// Load the first question when the page loads
window.onload = loadQuestion;
