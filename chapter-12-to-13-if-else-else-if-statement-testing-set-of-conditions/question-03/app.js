var number = +prompt("Enter a number");

if (number > 0) {
    alert(`${number} is a positive number`);
} else if (number < 0) {
    alert(`${number} is a negative number`);
} else if (number == 0) {
    alert(`${number} is zero`);
} else {
    alert("ERROR!");
}