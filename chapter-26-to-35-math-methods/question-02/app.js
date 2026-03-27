var negativeInt = Number(prompt("Enter Negative Integer:"));

if (negativeInt > 0) {
    alert("Please Enter Negative Interger!");
} else {
    document.writeln(`number: ${negativeInt} <br />`);
    document.writeln(`round off value: ${Math.round(negativeInt)} <br />`);
    document.writeln(`floor value: ${Math.floor(negativeInt)} <br />`);
    document.writeln(`ceil value: ${Math.ceil(negativeInt)}`);
}