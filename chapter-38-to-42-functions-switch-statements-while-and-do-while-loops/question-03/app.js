function calculateTriangleArea(a, b, c) {
    var S = (a + b + c) / 2
    var area = S * (S - a) * (S - b) * (S - c);
    return area;
}

console.log(10, 20, 30, calculateTriangleArea(10, 20, 30));