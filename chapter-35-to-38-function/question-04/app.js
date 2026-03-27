function calculate(num1, num2, operator) {
    if (operator == "+") {
        return num1 + num2;
    } else if (operator == "-") {
        return num1 - num2;
    } else if (operator == "*") {
        return num1 * num2;
    } else if (operator == "/") {
        return num1 / num2;
    } else {
        return "Invalid Input";
    }
}

var res = calculate(2, 2, "+");

document.writeln(`2 + 2 = ${res}`);