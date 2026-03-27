var toss = Math.floor(Math.random() * 2) + 1;

document.writeln(`${toss} <br />`);

if (toss == 1) {
    document.writeln("random coin value: Tails");
} else {
    document.writeln("random coin value: Heads");
}