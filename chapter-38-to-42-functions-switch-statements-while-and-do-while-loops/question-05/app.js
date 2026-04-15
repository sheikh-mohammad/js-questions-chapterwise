function charIndexOf(str, char) {
    if (char.length > 1) {
        console.log("Only Give Single Character in arguments");
        return;
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

console.log(charIndexOf("ahmed ali", "m"));