// Question 7 - Chapter 09-11 User Input and Conditional Statement

var secretNum = 7;
var guess = +prompt("Guess the Secret Number:");

if ((guess + 1) == secretNum) {
    console.log("Close enough to the correct answer");
} else if (guess == secretNum) {
    console.log("Bingo! Correct answer");
} else {
    console.log("Wrong Answer!");
}