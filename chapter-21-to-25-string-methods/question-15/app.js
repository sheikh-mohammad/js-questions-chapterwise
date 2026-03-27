var password = prompt("Enter Password:").toLowerCase();
var alphabets = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var hasAlpha = false;
var hasNum = false;
var properLen = false;
var startsWithNum = false;

for (var i = 0; i < password.length; i++) {
    char = password[i];
    if (alphabets.includes(char)) {
        hasAlpha = true;
    }
    if (numbers.includes(char)) {
        hasNum = true;
    }
}

if (password.length >= 6) {
    properLen = true;
}

if (numbers.includes(password[0])) {
    startsWithNum = true;
}

document.writeln(`Entered password: ${password} <br />`)

if (!hasAlpha) {
    document.writeln("Password can not exclude alphabets <br />");
}
if (!hasNum) {
    document.writeln("Password can not exclude numbers <br />");
}
if (!properLen) {
    document.writeln("Password can not be less than 6 characters <br />");
}
if (startsWithNum) {
    document.writeln("Password can not begin with a number <br />");
}

if (!hasAlpha || !hasNum || !properLen || startsWithNum) {
    document.writeln(`Please enter a valid password`);
} else {
    document.writeln("Congrats! You entered a valid password.");
}