var subject1 = prompt("Enter Your First Subject:");
var subject2 = prompt("Enter Your Second Subject:");
var subject3 = prompt("Enter Your Third Subject:");

var obtainedMarksSub1 = +prompt(`Enter Your Obtained Marks for Subject ${subject1}`);
var obtainedMarksSub2 = +prompt(`Enter Your Obtained Marks for Subject ${subject2}`);
var obtainedMarksSub3 = +prompt(`Enter Your Obtained Marks for Subject ${subject3}`);

var totalMarks = obtainedMarksSub1 + obtainedMarksSub2 + obtainedMarksSub3;

var percentage = (totalMarks / 300) * 100;

document.writeln(`
<table>
    <thead>
        <tr>
            <th>Subject</th>
            <th>Total Marks</th>
            <th>Obtained Marks</th>
            <th>Percentage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${subject1}</td>
            <td>100</td>
            <td>${obtainedMarksSub1}</td>
            <td>${(obtainedMarksSub1 / 100) * 100}%</td>
        </tr>
        <tr>
            <td>${subject2}</td>
            <td>100</td>
            <td>${obtainedMarksSub2}</td>
            <td>${(obtainedMarksSub2 / 100) * 100}%</td>
        </tr>
        <tr>
            <td>${subject3}</td>
            <td>100</td>
            <td>${obtainedMarksSub3}</td>
            <td>${(obtainedMarksSub3 / 100) * 100}%</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td></td>
            <td>
                <center><b>300</b></center>
            </td>
            <td>
                <center><b>${totalMarks}</b></center>
            </td>
            <td>
                <center><b>${percentage}%</b></center>
            </td>
        </tr>
    </tfoot>
</table>
`)