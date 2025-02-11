let quizData = [];
let currentQuestionIndex = 0;
let userResponses = [];

$.ajax({
    url: 'quiz.json', 
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        quizData = data;
        console.log(quizData);
        
        displayQuestion(currentQuestionIndex);
    },
    error: function (xhr, status, error) {
        console.error("Error fetching quiz data:", error, "status:", status, xhr);
    }
});
  

function displayQuestion(index) {
    if (index >= quizData.length) {
        showResults(); // If no more questions, show results
        return;
    }

    const questionData = quizData[index];
    const questionContainer = document.querySelector('.question-answer');
    document.getElementById('no-ofquestion').innerText = `Question no ${index + 1} of ${quizData.length}`;
    questionContainer.innerHTML = '';

    
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerText = `Question: ${questionData.question}`;
    questionContainer.appendChild(questionElement);
    questionData.options.forEach((option, optionIndex) => {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('form-check', 'answer');
        answerDiv.innerHTML = `
            <input class="form-check-input" type="radio" name="question" value="${optionIndex}" id="option${optionIndex}">
            <label class="form-check-label" for="option${optionIndex}">${option}</label>
        `;
        questionContainer.appendChild(answerDiv);
    });
}

document.getElementById('submit').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="question"]:checked');

    if (!selectedOption) {
        alert("Please select an answer before proceeding.");
        return;
    }

    userResponses[currentQuestionIndex] = parseInt(selectedOption.value);

    currentQuestionIndex++;

    displayQuestion(currentQuestionIndex);
});
function showResults() {

    let correctCount = 0;
    let incorrectCount = 0;

    quizData.forEach((questionData, index) => {
        if (userResponses[index] === questionData.correctAnswer) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    });

    
    const resultContainer = document.querySelector('.question-answer');
    resultContainer.innerHTML = `
        <h3>Quiz Completed!</h3>
        <p>You got ${correctCount} correct answers and ${incorrectCount} wrong answers.</p>

        <button class="btn btn-primary" onclick="restartQuiz()">Restart Quiz</button>
    `;
    
    
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userResponses = [];
    document.getElementsByClassName('submitbtn')[0].style.display = 'none';
    document.getElementById('submit').style.display = 'block';
    displayQuestion(currentQuestionIndex);
}
  
