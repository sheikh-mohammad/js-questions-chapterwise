var itemsArray = [
    {
        name: "juice",
        price: "50",
        quantity: "3"
    },
    {
        name: "cookie",
        price: "30",
        quantity: "9"
    },
    {
        name: "shirt",
        price: "880",
        quantity: "1"
    },
    {
        name: "pen",
        price: "100",
        quantity: "2"
    }
];

var allItemsPrice = 0;

for (var obj of itemsArray) {
    obj.totalPrice = obj.price * obj.quantity;
    allItemsPrice += obj.totalPrice;
}

for (var obj of itemsArray) {
    document.writeln(`Total Price of ${obj.name} is ${obj.totalPrice} (${obj.price} * ${obj.quantity}) (Price = ${obj.price}, Quantity = ${obj.quantity}) <br /> <br />`);
}