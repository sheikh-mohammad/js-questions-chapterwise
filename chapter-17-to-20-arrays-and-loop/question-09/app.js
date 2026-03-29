var A = [24, 53, 78, 91, 12];
var smallestNum = A[0];

for (var i = 0; i < A.length; i++) {
    if (A[i] <= smallestNum) {
        smallestNum = A[i];
    }
}

document.writeln(`Array items: ${A} <br />`);
document.writeln(`The smallest number is ${smallestNum}`);