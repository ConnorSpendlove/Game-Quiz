// Retrieves start and next buttons
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var submitButton = document.getElementById('submit-btn')

var p = document.getElementById('p')

var form = document.getElementById('form')
var endMessage = document.getElementById('end-message')
var allButtons = document.getElementById('allButtons')
var button = document.getElementsByClassName('btn')
// var falseButton = document.getElementById('false')

// Retrieves all question sets
var questionsContainer1 = document.getElementById('questions-card1')
var questionsContainer2 = document.getElementById('questions-card2')
var questionsContainer3 = document.getElementById('questions-card3')
var questionsContainer4 = document.getElementById('questions-card4')
var questionsContainer5 = document.getElementById('questions-card5')


var buttonTrue1 = document.getElementById('true1')
var buttonTrue2 = document.getElementById('true2')
var buttonTrue3 = document.getElementById('true3')
var buttonTrue4 = document.getElementById('true4')
var buttonTrue5 = document.getElementById('true5')

var container = document.getElementById('container')

var time = 120
var timer = document.getElementById("timer-element")

var score = 0;

// Puts all questions into an arrary
var allQuestions = [questionsContainer1, questionsContainer2, questionsContainer3, questionsContainer4, questionsContainer5,]

// starts the game on click
startButton.addEventListener('click', startGame)
function startGame () {
console.log('Started');
// hides the start button on click
startButton.classList.add('hide')
// hides the p message on click
p.classList.add('hide')
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
     console.log(currentIndex)
    } 

}

var timerElement;

// Changes innerHTML of timer div and decreases the time ever second until 0, then displays the users score.
function startTimer() {
    let timerElement = setInterval(function() {
      time--;
      timer.innerHTML = "Time Remaining: " + time;
      console.log("Time Remaining: " + time);
    //   If the timer reaches 0 the timer is stopped and the gameOver function is called
      if (time <= 0) {
        clearInterval(timerElement);
        console.log("Countdown stopped at 0.");
        gameOver()
        // If the current question index is greater than or equal to the length of the allQuestions array - 1, the timer is stopped and the inerrHTML is altered for a bonus question.
      } else if(currentIndex === 4) {
        timer.innerHTML = "Bonus! No Time limit!"
        clearInterval(timerElement)
      }
    //   timer decreases every second
    }, 500);
  }

//   hides all elements and displays the losing text and unhides the form
  function gameOver() {
    timer.innerHTML = "You ran out of time with a score of " + score + "!"
    questionsContainer1.classList.add("hide")
    questionsContainer2.classList.add("hide")
    questionsContainer3.classList.add("hide")
    questionsContainer4.classList.add("hide")
    questionsContainer5.classList.add("hide")
    form.classList.remove("hide")
    nextButton.classList.add("hide")
   
  }

//   Hides all elements, unhides the form, and displays the winning message
function displayScore(){
    console.log("Final Score: " + score)
    form.classList.remove("hide")
    questionsContainer1.classList.add("hide")
    questionsContainer2.classList.add("hide")
    questionsContainer3.classList.add("hide")
    questionsContainer4.classList.add("hide")
    questionsContainer5.classList.add("hide")
    nextButton.classList.add("hide")
    timer.innerHTML = "Congrats! You got a score of " + score + "!" 

}

submitButton.addEventListener('click', displayLeaderBoard)



var topScore = document.getElementById('top-scores')
var userInput = document.getElementById("inputField")



// displays the scores
function displayLeaderBoard() {
  
  topScore.classList.remove("hide")
  // creates a new "li" element that is equal to the value of the input box and the users score
  var newItem = document.createElement("li");
  newItem.textContent =(userInput.value + " - "  + "Score: " + score)
  // creates a text spot for the newly created element
  var itemContent = document.createTextNode(userInput.textContent);
  // appends the new element to the dom
  newItem.appendChild(itemContent);
  var list = document.getElementById("user-record");
  list.appendChild(newItem);
  localStorage.setItem("score", newItem.textContent)

}


var falseButtons = document.querySelectorAll("#false");

// adds event listener for each false button that turns them red on click
falseButtons.forEach(function(button) {
  button.addEventListener("click", function(){
    button.style.backgroundColor = "red";
    (time = time - 10)
  });
});

// Increases the score value when every right answer is pressed
// credit to "mkamalkayani" on freeCodeCamp.org for the idea to use {once:true} to limit the amount of times the player could recive a point for clicking the right answer
buttonTrue1.addEventListener('click', addScore, {once:true})

function addScore(){
    if (buttonTrue1){
        score = (++score)
    }
    console.log("Score: " + score)
    
}

buttonTrue2.addEventListener('click', addScore, {once:true})

function addScore(){
    if (buttonTrue2){
        score = (++score)
    }
    console.log("Score: " + score)
     
}

buttonTrue3.addEventListener('click', addScore, {once:true})

function addScore(){
    if (buttonTrue3){
        score = (++score)
    }
    console.log("Score: " + score)
    
}

buttonTrue4.addEventListener('click', addScore, {once:true})

function addScore(){
    if (buttonTrue4){
        score = (++score)
    }
    console.log("Score: " + score)
    
}

buttonTrue5.addEventListener('click', addScore, {once:true})

function addScore(){
    if (buttonTrue5){
        score = (++score)
    }
    console.log("Score: " + score)
    
}

// Changes correct answers to green upon click
buttonTrue1.addEventListener('click', changeColor1)

function changeColor1 () {
  buttonTrue1.style.backgroundColor = "green"
}
   
buttonTrue2.addEventListener('click', changeColor2)

function changeColor2 () {
  buttonTrue2.style.backgroundColor = "green"
}

buttonTrue3.addEventListener('click', changeColor3)

function changeColor3 () {
  buttonTrue3.style.backgroundColor = "green"
}

buttonTrue4.addEventListener('click', changeColor4)

function changeColor4 () {
  buttonTrue4.style.backgroundColor = "green"
}

buttonTrue5.addEventListener('click', changeColor5)

function changeColor5 () {
  buttonTrue5.style.backgroundColor = "green"
}

