var userInput = prompt("Enter User Input:");
var titleCase = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

document.writeln(`User input: ${userInput} <br />`);
document.writeln(`Title case: ${titleCase} <br />`);