function deleteVowels(sentence) {
    if (sentence.length > 25) {
        console.log("Max length 25 chars allowed.");
        return;
    }
    var lowerVowels = ["a", "e", "i", "o", "u"];
    var upperVowels = ["A", "E", "I", "O", "U"];
    var temp = [];
    for (var i = 0; i < sentence.length; i++) {
        if (lowerVowels.includes(sentence[i])) {
            temp.push("");
        } else if (upperVowels.includes(sentence[i])) {
            temp.push("");
        } else {
            temp.push(sentence[i]);
        }
    }
    var newSentence = temp.join("");
    return newSentence;
}

console.log(deleteVowels("I am a boy. How are you. Do you want to play hide and seek"));
console.log(deleteVowels("I am a boy."));