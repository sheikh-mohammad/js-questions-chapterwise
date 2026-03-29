var char = prompt("Enter a character (number or string)");

if ((char.length <= 1) && (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57)) {
    alert(`${char} is a number`);
} else if ((char.length <= 1) && (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)) {
    alert(`${char} is a letter in upper case`);
} else if ((char.length <= 1) && (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) {
    alert(`${char} is a letter in lower case`);
} else {
    alert("ENTER A SINGLE CHARACTER!");
}