var secretNum = Math.floor(Math.random() * 10) + 1;

var userGuess = Number(prompt("Enter a number between 1 and 10"));

if (userGuess == secretNum) {
    alert("Congratulations");
} else {
    alert("Try again!");
}