document.writeln(`<b>Counting:</b> <br /> <br />`);

for (var i = 1; i <= 15; i++) {
    document.writeln(`${i}, `);
}

document.writeln(`<br /> <br /> <b>Reverse counting:</b> <br /> <br />`);

for (var i = 10; i >= 1; i--) {
    document.writeln(`${i}, `);
}

document.writeln(`<br /> <br /> <b>Even:</b> <br /> <br />`);

for (var i = 0; i <= 20; i += 2) {
    document.writeln(`${i}, `);
}

document.writeln(`<br /> <br /> <b>Odd:</b> <br /> <br />`);

for (var i = 1; i <= 19; i += 2) {
    document.writeln(`${i}, `);
}

document.writeln(`<br /> <br /> <b>Series:</b> <br /> <br />`);

for (var i = 2; i <= 20; i += 2) {
    document.writeln(`${i}k, `);
}