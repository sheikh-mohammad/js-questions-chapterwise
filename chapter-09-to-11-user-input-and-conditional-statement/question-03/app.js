// Question 3 - Chapter 09-11 User Input and Conditional Statement

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// Signal color Message
// Red    Must Stop
// Yellow Ready to move
// Green  Move now

var signalColor = prompt("Enter Your Road Traffic Signal Color: ");

if (signalColor == "Red") {
    console.log("Must Stop");
} else if (signalColor == "Yellow") {
    console.log("Ready to move");
} else if (signalColor == "Green") {
    console.log("Move now");
}