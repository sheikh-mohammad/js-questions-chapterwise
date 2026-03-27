function greetUser(firstName, lastName) {
    var fullName = `${firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase() + lastName.slice(1).toLowerCase()}`

    alert(`Hey ${fullName}! Welcome to Our Website!`)
}

greetUser("sHeikh", "mohAmmAD");