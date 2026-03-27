var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var found = false;

for (var i = 0; i < A.length; i++) {
    if (item == A[i]) {
        found = true;
        document.writeln(`${item} is <b>available</b> at index ${i} in our bakery`);
    }
}

if (!found) {
    document.writeln(`We are sorry. ${item} is <b>not available</b> in our bakery`);
}