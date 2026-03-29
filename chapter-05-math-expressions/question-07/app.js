var priceItem1 = 650;
var quantityItem1 = 3;

var priceItem2 = 100;
var quantityItem2 = 7;

var shipCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shipCharges;

document.writeln(`Price of item 1 is ${priceItem1} <br />`);
document.writeln(`Quantity of item 1 is ${quantityItem1} <br />`);
document.writeln(`Price of item 2 is ${priceItem2} <br />`);
document.writeln(`Quantity of item 2 is ${quantityItem2} <br />`);
document.writeln(`Shipping Charges ${shipCharges} <br /> <br />`);

document.writeln(`Total cost of your order is ${totalCost}`);