var username = prompt("Enter Username:");
var anySpecial = false;
var specialChars = [33, 44, 46, 64];

for (var i = 0; i < username.length; i++) {
    if (specialChars.includes(username.charCodeAt(i))) {
        anySpecial = true;
    }
}

if (anySpecial) {
    alert("Please enter a valid username");
}