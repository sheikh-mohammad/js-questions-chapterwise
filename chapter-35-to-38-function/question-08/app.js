function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num ** 2
    }

    var hyp = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hyp;
}