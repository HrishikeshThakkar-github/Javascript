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


function displayQuestion(index){

}

    
