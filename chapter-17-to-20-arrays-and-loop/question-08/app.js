var A = [24, 53, 78, 91, 12];
var largestNum = 0;

for (var i = 0; i < A.length; i++) {
    if (A[i] >= largestNum) {
        largestNum = A[i];
    }
}

document.writeln(`Array items: ${A} <br />`);
document.writeln(`The largest number is ${largestNum}`);