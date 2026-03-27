var positiveInt = Number(prompt("Enter Positive Integer:"));

if (positiveInt < 0) {
    alert("Please Enter Postive Interger!");
} else {
    document.writeln(`number: ${postiveInt} <br />`);
    document.writeln(`round off value: ${Math.round(postiveInt)} <br />`);
    document.writeln(`floor value: ${Math.floor(postiveInt)} <br />`);
    document.writeln(`ceil value: ${Math.ceil(postiveInt)}`);
}