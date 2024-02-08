// Problem - 1
function calculateMoney(ticketSale) {
    let ticketPrice = 120;
    let moneyLeft;
    if (typeof ticketSale !== "number" || ticketSale < 0) {
        return "Invalid Number";
    }
    moneyLeft = ticketPrice * ticketSale - (500 + 8 * 50);
    return moneyLeft;
}

// Problem - 2
function checkName(name) {
    if (typeof name !== "string") {
        return "invalid";
    }
    let goodWord = ["a", "y", "i", "e", "o", "u", "w"];
    name = name.trim().split(" ").join("");
    let lastWord = name[name.length - 1].toLowerCase();

    if (goodWord.includes(lastWord)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}


// Problem - 3
function deleteInvalids(array) {
    let validArray = [];
    if (Array.isArray(array) !== true) {
        return "Invalid Array";
    }
    
    for (let item of array) {
        if (typeof item === "number" && !isNaN(item)) {
            validArray.push(item);
        }
    }
    
    return validArray;
}

// Problem - 4
function password(obj) {
    let password;
    if (typeof obj !== "object") {
        return "invalid";
    } else {
        if (
            typeof obj["name"] === "undefined" ||
            typeof obj["birthYear"] === "undefined" ||
            typeof obj["siteName"] === "undefined" ||
            obj["birthYear"].toString().length < 4
        ) {
            return "invalid";
        } else {
            password = `${obj["siteName"]}#${obj["name"]}@${obj["birthYear"]}`;
            let newPassword = password.split("");
            newPassword[0] = newPassword[0].toUpperCase();
            newPassword = newPassword.join("");
            return newPassword;
        }
    }
}
// Problem - 5
function monthlySavings(arr, livingCost) {
    let totalSavings = 0;
    let tax = 20 / 100;
    if (Array.isArray(arr) !== true || typeof livingCost !== "number") {
        return "invalid input";
    }
    for (let payment of arr) {
        if (payment >= 3000) {
            totalSavings += payment - payment * tax;
        } else {
            totalSavings += payment;
        }
    }
    if (totalSavings - livingCost < 0) {
        return "Earn more";
    } else {
        return `Shahed's savings after living cost including or excluding taxes is ${totalSavings - livingCost
            } bdt`;
    }
}