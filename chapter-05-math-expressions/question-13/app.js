var favorSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var perDayAmount = 3;

var restLifeEatings = (maxAge - currentAge) * 3

document.writeln(`Favourite Snack: ${favorSnack} <br />`);
document.writeln(`Current age: ${currentAge} <br />`);
document.writeln(`Estimated Maximum Age: ${maxAge} <br />`);
document.writeln(`Amount of snacks per day: ${perDayAmount} <br />`);
document.writeln(`You will need ${restLifeEatings} to last you until the ripe old age of ${maxAge}`);