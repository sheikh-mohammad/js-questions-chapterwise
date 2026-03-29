var integer1 = +prompt("Enter first integer (0, -1, 1, etc.)");
var integer2 = +prompt("Enter second integer (0, -1, 1, etc.)");

if (integer1 > integer2 && integer2 < integer1) {
    alert(`${integer1} is larger integer between ${integer1} and ${integer2}`);
} else if (integer2 > integer1 && integer1 < integer2) {
    alert(`${integer2} is larger integer between ${integer1} and ${integer2}`);
} else {
    alert(`${integer1} and ${integer2} are both equal to each other`);
}