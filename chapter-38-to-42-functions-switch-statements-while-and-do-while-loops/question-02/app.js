function isLeapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return `${year} is a Leap Year`;
    } else {
        return `${year} is not a Leap Year`;
    }
}

console.log("2020", isLeapYear(2020));
console.log("1900", isLeapYear(1900));
console.log("2000", isLeapYear(2000));
console.log("2026", isLeapYear(2026));