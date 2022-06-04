//Welcome t o this simple number guessing game. The stage starts with guessing between 1 and 2. As the stages increase, the range of values increases by one. 

//Program begin
let successMsg = "Congratulations! You guessed right. Proceed to the next stage";
let failMsg = "Uh oh! You guessed wrong. Try again from Stage 1"
let finalScore;
//using arrow function
const GUESS_FUNCTION = () => {

  let success = true; //this checks if the user guesses right or wrong
  let stage = 1;
  //stage initialization
  let score = 0;
  let stageVal = 2; //this is the default value (1 and 2) i.e stage one
  

  do {
    const stageMsg = "This is stage " + stage;
    //AI randomly generated number. The range of value is between 1 and 2 meaning the minimum value is 1. 
    let minValue = 1;
    let randValue = Math.floor(Math.random() * (stageVal - minValue + 1)) + minValue; //This complex function generates a random number between a range - setting 1 as the minimum and stageVal as the maximum
    console.log(stageMsg);
    console.log("Guess value is " + randValue)
  //user input
  let userInput = Number(prompt('Make your guess: '));

  if (typeof userInput != 'number'){
    console.log("Please enter a value that is of number type only i.e 1,2 etc. 'One' or 'Two' is not recognised")
  }
    else if (userInput == randValue) {
    console.log(successMsg)
    success = true;
    stage++
    stageVal++
    score++
    finalScore = score
  } else {
    console.log(failMsg)
    success = false;
  }
  } while(success)
  
  return "Program Terminated. " + "Your score is " + score;
  
}

console.log("Welcome to this Simple Guessing Game!\nThe game begins at stage 1 where you have to guess the number - 1 or 2. \n\nWith each new stage, the range of guess increases by one i.e stage 10 wil involve you guessing between 1 and 11.\n\nMay Lady luck be on your side.\n")
//function call
console.log(GUESS_FUNCTION());