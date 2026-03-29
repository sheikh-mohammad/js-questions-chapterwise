var number = +prompt("Enter a number to show its multiplication table");
var len = +prompt("Enter length multplication table");

for (var i = 1; i <= len; i++) {
    document.writeln(`${number} x ${i} = ${number * i} <br />`);
}