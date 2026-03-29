// Question 6 - Chapter 09-11 User Input and Conditional Statement

var obtainedMarks = +prompt("Enter Your Obtained Marks in Three Subjects:");
var totalMarks = +prompt("Enter Your Total Marks for Obtained Marks:");

var percentage = (obtainedMarks / totalMarks) * 100;
var grade;
var remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.writeln(`Total marks : ${totalMarks} <br />`);
document.writeln(`Marks Obtained : ${obtainedMarks} <br />`);
document.writeln(`Percentage : ${percentage}% <br />`);
document.writeln(`Grade : ${grade} <br />`);
document.writeln(`Remarks : ${remarks} <br />`);