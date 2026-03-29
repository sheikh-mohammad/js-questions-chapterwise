var numMatrix;
numMatrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 0; i < numMatrix.length; i++) {
    var row = numMatrix[i];
    for (var j = 0; j < row.length; j++) {
        document.writeln(`${row[j]} `);
    }
    document.writeln("<br />")
}