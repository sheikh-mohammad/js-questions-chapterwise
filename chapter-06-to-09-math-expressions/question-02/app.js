var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//            1  -  0  +  1  +  1

// Explain the output at each stage:
// --a; -> in this state a is 2 and a is with pre decrement so first update then read 2 - 1 = 1
// --a - --b; in this state a is 1 and b is 1, b is with pre decrement so first update then read 1 - 1 = 0 so this statements says 1 - 0
// --a - --b + ++b; in this state a is 1 and b is 0, b is with pre increment so first update then read 0 + 1 = 1 so this statements says 1 - 0 + 1
// --a - --b + ++b + b--; in this state a is 1 and b is 1, b is with post decrement so first read then updtae no changes in b for this line so this statements says 1 - 0 + 1 + 1

// After that b will be 0
// After that a will be 1
// Result will be evaluated usign BODMAS
// 1 - 0 + 1 + 1
// 1 + 1 + 1 = 3

// result = 3
// a = 1
// b = 0

document.writeln(`a is ${a} <br />`);
document.writeln(`b is ${b} <br />`);
document.writeln(`result is ${result} <br />`);