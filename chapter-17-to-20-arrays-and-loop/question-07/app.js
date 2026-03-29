var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var item = prompt("Welcome to ABC Backery. What do you want to order sir/ma'am?");
var found = false;

for (var i = 0; i < A.length; i++) {
    if (item == A[i]) {
        document.writeln(`${A[i]} is <b>available</b> at index ${i} in our bakery`);
        found = true;
        break;
    }
}

if (!found) {
    document.writeln(`We are sorry. pastry is <b>not available</b> in our bakery`);
}