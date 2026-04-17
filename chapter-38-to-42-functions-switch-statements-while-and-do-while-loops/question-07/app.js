// aa ae ai ao au
// ea ee ei eo eu
// ia ie ii io iu
// oa oe oi oo ou
// ua ue ui uo uu

function countPairVowels(sentence) {
    var loweredSentence = sentence.toLowerCase();
    var count = 0;
    for (var i = 0; i < sentence.length; i++) {
        var first = sentence[i];
        var second = sentence[i + 1];
        switch (first) {
            case "a":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;
            case "e":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;
            case "i":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;
            case "o":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;
            case "u":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;

            case "A":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;
            case "E":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;
            case "I":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;
            case "O":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;
            case "U":
                switch (second) {
                    case "a":
                        count++;
                        break;
                    case "e":
                        count++;
                        break;
                    case "i":
                        count++;
                        break;
                    case "o":
                        count++;
                        break;
                    case "u":
                        count++;
                        break;

                    case "A":
                        count++;
                        break;
                    case "E":
                        count++;
                        break;
                    case "I":
                        count++;
                        break;
                    case "O":
                        count++;
                        break;
                    case "U":
                        count++;
                        break;
                }
                break;
        }
    }

    return count;
}

console.log("Pleases read this application and give me gratuity", countPairVowels("Pleases read this application and give me gratuity"));