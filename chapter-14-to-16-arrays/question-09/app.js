// Question 9

var colors = ["Red", "Orange", "Black"];

document.writeln(`- ${colors} <br />`);

// Part A

var beginColor = prompt("What color you wants to add to the beginning");

colors.unshift(beginColor);

document.writeln(`a. ${colors} <br />`);

// Part B

var endColor = prompt("What color you wants to add to the end");

colors.push(endColor);

document.writeln(`b. ${colors} <br />`);

// Part C

colors.unshift("Pink", "Purple");

document.writeln(`c. ${colors} <br />`);

// Part D

colors.shift();

document.writeln(`d. ${colors} <br />`);

// Part E

colors.pop();

document.writeln(`$e. {colors} <br />`);

// Part F

var colorAddIndex = +prompt("At which index you wants to add a color");

var colorAdd = prompt(`What color you wants to add to the index ${colorAddIndex}`);

colors.splice(colorAddIndex, 0, colorAdd);

document.writeln(`f. ${colors} <br />`);

// Part G

var colorDelIndex = +prompt("At which index you wants to delete a color");

var colorDelCount = +prompt("How many colors you wants to delete");

colors.splice(colorDelIndex, colorDelCount);

document.writeln(`g. ${colors} <br />`);