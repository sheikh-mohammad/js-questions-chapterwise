var text = "The quick brown fox jumps over the lazy dog";
text = text.toLowerCase();
text = text.split(" ");
var count = 0;

for (var i = 0; i < text.length; i++) {
    if (text[i] == "the") {
        count++;
    }
}

text = text.join(" ");
text = text[0].toUpperCase() + text.slice(1);

document.writeln(`Text: ${text} <br />`);
document.writeln(`There are ${count} occurrence(s) of word 'the'`);