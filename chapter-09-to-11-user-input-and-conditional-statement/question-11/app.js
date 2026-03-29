var number1 = +prompt("Enter Number 1");
var operator = prompt("Enter Operator (+, -, *, /, %)");
var number2 = +prompt("Enter Number 2");

var result = 0;

if (operator === "+") {
    result = number1 + number2;
    alert(`${number1} ${operator} ${number2} = ${result}`)
} else if (operator === "-") {
    result = number1 - number2;
    alert(`${number1} ${operator} ${number2} = ${result}`)
} else if (operator === "*") {
    result = number1 * number2;
    alert(`${number1} ${operator} ${number2} = ${result}`)
} else if (operator === "/") {
    result = number1 / number2;
    alert(`${number1} ${operator} ${number2} = ${result}`)
} else if (operator === "%") {
    result = number1 % number2;
    alert(`${number1} ${operator} ${number2} = ${result}`)
} else {
    alert("ERROR!");
}