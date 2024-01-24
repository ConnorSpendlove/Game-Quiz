var startButton = document.getElementById('start-btn')
var questionsContainer = document.getElementById('questions-card')
var questionElement = document.getElementById('question')
var answerButton = document.getElementById('btn')
var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame () {
console.log('Started');
startButton.classList.add('hide')
questionsContainer.classList.remove('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
nextQuestion();
}

// answerButton.addEventListener('click', nextQuestion)

function nextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}

function showQuestion (questions) {
    questionElement.innerText = questions.question 

}

var questions = [
    {
        question: 'Question 1',
        answers: [
            {text: 'false', correct: false},
            {text: 'false', correct: false},
            {text: 'true', correct: true},
            {text: 'false', correct: false},
        ]
    },
    {
        question: 'Question 2',
        answers: [
            {text: 'false', correct: false},
            {text: 'true', correct: true},
            {text: 'false', correct: false},
            {text: 'false', correct: false},
        ]
    },
    {
        question: 'Question 3',
        answers: [
            {text: 'false', correct: false},
            {text: 'false', correct: false},
            {text: 'false', correct: false},
            {text: 'true', correct: true},
        ]
    },
    {
        question: 'Question 4',
        answers: [
            {text: 'true', correct: true},
            {text: 'false', correct: false},
            {text: 'false', correct: false},
            {text: 'false', correct: false},
        ]
    },
    {
        question: 'Question 5',
        answers: [
            {text: 'false', correct: false},
            {text: 'true', correct: true},
            {text: 'false', correct: false},
            {text: 'false', correct: false},
        ]
    },
]
