var person = {
    name: "Sheikh Mohammad",
    email: "sheikhmohammadahmed07@gmail.com",
    password: 12345678,
    age: 14,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
};

if ("age" && "country" in person) {
    console.log("Age and country properties exist in person object")
} else {
    console.log("Age and country properties not exist in person object");
}

if ("firstName" && "lastName" in person) {
    console.log("firstName and lastName properties exist in person object")
} else {
    console.log("firstName and lastName properties not exist in person object");
}