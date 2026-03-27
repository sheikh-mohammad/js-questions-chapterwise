function displayCounting(startNum, endNum) {
    startNum = +startNum;
    endNum = +endNum;

    if (startNum < endNum) {
        for (var i = startNum; i <= endNum; i++) {
            document.writeln(`${i} <br />`);
        }
    } else if (startNum > endNum) {
        for (var i = startNum; i >= endNum; i--) {
            document.writeln(`${i} <br />`);
        }
    } else if (startNum == endNum) {
        document.writeln(`${startNum} <br />`)
    } else {
        document.writeln("Error!");
    }
}

displayCounting(-1, 10)