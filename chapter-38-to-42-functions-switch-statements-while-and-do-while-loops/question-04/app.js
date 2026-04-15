function mainFunction(sub1, sub2, sub3) {
    var avg = calcAverage(sub1, sub2, sub3);
    var percent = calcPercentage(sub1, sub2, sub3);

    console.log(`Average of ${sub1}, ${sub2} and ${sub3} is ${avg}`);
    console.log(`Percentage of ${sub1}, ${sub2} and ${sub3} is ${percent}`);
}

function calcPercentage(sub1, sub2, sub3) {
    var totalMarks = sub1 + sub2 + sub3;
    var percentage = (totalMarks / 3) * 100;
    return percentage;
}

function calcAverage(sub1, sub2, sub3) {
    var totalMarks = sub1 + sub2 + sub3;
    var average = totalMarks / 3;
    return average;
}