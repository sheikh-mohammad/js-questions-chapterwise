// Question 10 - Chapter 09-11 User Input and Conditional Statement

var temperature = +prompt("Enter Temperature:");

if (temperature > 40) {
    alert("It is too hot outside");
} else if (temperature > 30) {
    alert("The Weather today is Normal");
} else if (temperature > 20) {
    alert("Today’s Weather is cool")
} else {
    alert("OMG! Today’s weather is so Cool");
}