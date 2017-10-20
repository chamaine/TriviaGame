
//add a timer function 
//set the time allowed for all questions
//do not allow pauses
//reset function







// Questions for our trivia game.
var questions = {
  q1: ["Which country is in Northern Africa?", "Morocco"],
  q2: ["Name the capital of United Kingdom", "London"],
  q3: ["Where is the capital city of the Netherlands?", "Amersterdam",]
  q4: ["Name the capital of the United States", "Washington, D.C."],
  q5: ["How many continents are in the world?", "7"]

      console.log(questions);
    	console.log(answerOne[1]);
    	console.log(answerOne[2]);
    	console.log(answerOne[3]);
}      

//Options for questions here
//var q1 = ["Zimbabwe", "Jamaica", "Morocco", "Nigeria"]
//var q2 = ["Glasgow", "Britain", "Scotland", "London"]
//var q3 = []


//Answer    	
// var question = prompt("Which country is in Northern Africa");

    var score = 0;
     Variable to hold the index of current question.
    var questionIndex = 0;
      // Array of questions.
     var questionsArray = [question.q1, question.q2, question.q3, question.q4, question.q5];
    console.log(questionsArray)

      // FUNCTIONS
      // ==============================================================================

      // Function to render questions.
      //function renderQuestion() {
        // If there are still more questions, render the next one.
    
       // if (questionIndex <= (questionsArray.length - 1)) {
        //  document.querySelector("#question").innerHTML = questionsArray[questionIndex][0];
       // }
        // If there aren't, render the end game screen.
      //  else {
      //    document.querySelector("#question").innerHTML = "Game Over!";
       //   document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
      //  }
     //}

      // Function that updates the score...
     // function updateScore() {
    //    document.querySelector("#score").innerHTML = "Score: " + score;
      //}




// Now we check the myBands array to see if it contains the user's answer.
     /* // If the user's band is not in the array...
     // if (answer.indexOf(q1) === -1) {
        alert("Next Question");
     // }
      // If it is in the array...
      else {
        alert("Right!");
      }
      console.log(answer)
	document.write("Congratulations");