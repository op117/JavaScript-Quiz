import { questions_1 } from '../data/questions-1.js';
import { questions_2 } from '../data/questions-2.js';
import { questions_3 } from '../data/questions-3.js';
import { questions_4 } from '../data/questions-4.js';
import { questions_5 } from '../data/questions-5.js';

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");

let TIME_PER_QUESTION = 60;
let questions = [];
let currentQuestionIndex = 0;
let totalQuizTime;
let score = 0;
let timer;
let timeLeft;

const startButton = document.getElementById("start-btn");
startButton.disabled = false;

// Listen for difficulty selection
document.querySelectorAll('input[name="difficulty"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const difficulty = event.target.value;
  
      if (difficulty === 'easy') {
        TIME_PER_QUESTION = 60;
      } else if (difficulty === 'medium') {
        TIME_PER_QUESTION = 30;
      } else if (difficulty === 'hard') {
        TIME_PER_QUESTION = 5;
      }
  
      startButton.disabled = false;
    });
});

// Start quiz on button click
document.getElementById("start-btn").addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    const startScreen = document.getElementById("start-screen");
    
    if (startScreen) {
      startScreen.style.display = "none";
    }
    
    const questionSets = [
        questions_1, 
        questions_2, 
        questions_3, 
        questions_4,
        questions_5,
    ];
    const randomSet = questionSets[Math.floor(Math.random() * questionSets.length)];
    questions = shuffleArray(randomSet);

    totalQuizTime = questions.length * TIME_PER_QUESTION;
    timeLeft = totalQuizTime;

    createAndShowTimer();
    startTimer();
    showQuestion();
}

function createAndShowTimer() {
    const timerElement = document.createElement('div');
    timerElement.id = 'timer';
    timerElement.style.textAlign = 'center';
    timerElement.style.fontSize = '1.5em';
    timerElement.style.marginTop = '10px';
    timerElement.style.color = '#006400';
    timerElement.textContent = `Time Left: ${formatTime(timeLeft)}`;
    document.body.insertBefore(timerElement, quizContainer);
}

function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();

      if (timeLeft <= 0) {
        clearInterval(timer);
        showResult();
      }
    }, 1000);
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('timer');
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    if (timeLeft < 60) {
        timerElement.style.color = '#FF3333';
        timerElement.style.fontWeight = 'bold';
    } else {
        timerElement.style.color = '#00FF00';
        timerElement.style.fontWeight = 'normal';
    }

    timerElement.textContent = `Time Left: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function showQuestion() {
    quizContainer.innerHTML = ""; 

    const currentQuestion = questions[currentQuestionIndex];

    const questionElement = document.createElement("div");
    questionElement.classList.add("question-container");
    questionElement.innerHTML = `<p class="question">${currentQuestion.question}</p>`;
    quizContainer.appendChild(questionElement);

    const shuffledAnswers = shuffleArray(currentQuestion.answers);

    const answersContainer = document.createElement("div");
    answersContainer.classList.add("answers");

    shuffledAnswers.forEach(answer => {
      const button = document.createElement("button");
      button.textContent = answer.text;
      button.addEventListener("click", () => selectAnswer(answer));
      answersContainer.appendChild(button);
    });
    quizContainer.appendChild(answersContainer);
}

function selectAnswer(answer) {
    if (answer.correct) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
}

function showResult() {
    clearInterval(timer);
    quizContainer.innerHTML = "";
    const timerElement = document.getElementById('timer');
    if (timerElement) {
      timerElement.remove();
    }

    const timeUsed = totalQuizTime - timeLeft;

    if (timeLeft <= 0) {
      resultContainer.innerHTML = `Time's up!<br>
      You answered ${currentQuestionIndex} out of ${questions.length} questions.<br>
      You scored ${score} points out of ${questions.length}.`;
    } else {
      resultContainer.innerHTML = `You completed the quiz!<br>
      You answered ${questions.length} questions in ${formatTimeWithText(timeUsed)}.<br>
      You scored ${score} points out of ${questions.length}.`;
    }

    // Display the restart options
    const restartOptions = document.getElementById("restart-options");
    restartOptions.style.display = "block";
    restartBtn.style.display = "block";
    restartBtn.disabled = false;
}

// Listen for difficulty selection on the results page
document.querySelectorAll('input[name="difficulty-restart"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const difficulty = event.target.value;

        // Set time per question based on selected difficulty for restart
        if (difficulty === 'easy') {
            TIME_PER_QUESTION = 60;
        } else if (difficulty === 'medium') {
            TIME_PER_QUESTION = 30;
        } else if (difficulty === 'hard') {
            TIME_PER_QUESTION = 5;
        }

        restartBtn.disabled = false;
    });
});

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.innerHTML = "";

    // Hide the restart options after restarting
    const restartOptions = document.getElementById("restart-options");
    restartOptions.style.display = "none"; 
    
    startQuiz();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function formatTimeWithText(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ${secs} second${secs !== 1 ? 's' : ''}`;
}
