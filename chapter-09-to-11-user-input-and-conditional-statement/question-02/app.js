// Question 2 - Chapter 09-11 User Input and Conditional Statement

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gender: ");

if (gender == "male") {
    console.log("Good Morning Sir");
} else if (gender == "female") {
    console.log("Good Morning Ma’am");
}