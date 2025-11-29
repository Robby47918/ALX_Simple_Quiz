// quiz.js

// Function Declaration
function checkAnswer() {
  // Identify the Correct Answer
  const correctAnswer = "4";

  // Retrieve the User’s Answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  let userAnswer = "";

  if (selectedOption) {
    userAnswer = selectedOption.value;
  }

  // Compare the User’s Answer with the Correct Answer
  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Add Event Listener to the Submit Button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
