// Retrieves start and next buttons
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
// Retrieves all question sets
var questionsContainer1 = document.getElementById('questions-card1')
var questionsContainer2 = document.getElementById('questions-card2')
var questionsContainer3 = document.getElementById('questions-card3')
var questionsContainer4 = document.getElementById('questions-card4')
var questionsContainer5 = document.getElementById('questions-card5')

// Retrieves true and false values of each answer
var buttonFalse = document.getElementById('false')
var buttonTrue1 = document.getElementById('true1')
var buttonTrue2 = document.getElementById('true2')
var buttonTrue3 = document.getElementById('true3')
var buttonTrue4 = document.getElementById('true4')
var buttonTrue5 = document.getElementById('true5')

var time = 60
var timer = document.getElementById("timer-element")

var score = 0;


// Puts all questions into an arrary
var allQuestions = [questionsContainer1, questionsContainer2, questionsContainer3, questionsContainer4, questionsContainer5]

// starts the game on click
startButton.addEventListener('click', startGame)
function startGame () {
console.log('Started');
// hides the start button on click
startButton.classList.add('hide')
// unhides the first question on click
questionsContainer1.classList.remove('hide')
// unhides the next button on click
nextButton.classList.remove('hide')
// unhides the timer on click
timer.classList.remove('hide')
// starts the timer
startTimer ();
}

 // sets starting index
var currentIndex = 0

// Allows the questions to scroll on click
nextButton.addEventListener('click', nextQuestion)
function nextQuestion(){
    // If no questions are available, calls displayScore function
    if(currentIndex >= allQuestions.length - 1){
        displayScore()
    } else {
     // sets current index to hide
     allQuestions[currentIndex].classList.add("hide")
     // adds 1 to the index
     currentIndex = (currentIndex + 1)
     // removes hide class from new index
     allQuestions[currentIndex].classList.remove('hide') 
    }
     
}



// Changes innerHTML of timer div and decreases the time ever second until 0, then displays the users score.
var timerElement;
function startTimer(){
    if (time <= 0){
        return
    } else {
        timerElement = setInterval(()=>{
            timer.innerHTML = "Time Remaining: " + time + " second(s)";
            time --;
        }, 1000)
    }

}

function displayScore(){
    console.log("nice")
}


buttonTrue1.addEventListener('click', addScore)

function addScore(){
    if (buttonTrue1){
        score = (++score)
    }
    console.log(score)
    
}

buttonTrue2.addEventListener('click', addScore)

function addScore(){
    if (buttonTrue2){
        score = (++score)
    }
    console.log(score)
    
}

buttonTrue3.addEventListener('click', addScore)

function addScore(){
    if (buttonTrue3){
        score = (++score)
    }
    console.log(score)
    
}

buttonTrue4.addEventListener('click', addScore)

function addScore(){
    if (buttonTrue4){
        score = (++score)
    }
    console.log(score)
    
}

buttonTrue5.addEventListener('click', addScore)

function addScore(){
    if (buttonTrue5){
        score = (++score)
    }
    console.log(score)
    
}
    
   
