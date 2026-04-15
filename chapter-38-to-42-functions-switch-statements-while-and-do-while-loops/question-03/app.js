function calcTriangleArea(a, b, c) {
    var S = calcTriangleArea(a, b, c);
    var area = S * (S - a) * (S - b) * (S - c);
    return area;
}

function calcSide(a, b, c) {
    var result = (a + b + c) / 2
    return result;
}

console.log(10, 20, 30, calcTriangleArea(10, 20, 30));