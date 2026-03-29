var correctPass = "hello123";
var userPass = prompt("Enter Password:");

if (userPass) {
    if (userPass == correctPass) {
        alert("Correct! The password you entered matches the original password");
    } else {
        alert("Incorrect password");
    }
} else {
    alert("Please enter your password");
}