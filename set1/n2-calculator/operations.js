// Full Name: MICA DANIELLE R. SORIANO
// Section: IV-BSIT C
// Course: ELEC 3 - Node.js
// Activity: N2 - Modular Calculator
// Date: November 24, 2026

// Calculate the sum of two numbers.
function add(a, b) {
    return a + b;
}

// Calculate the difference.
function subtract(a, b) {
    return a - b;
}

// Calculate the product.
function multiply(a, b) {
    return a * b;
}

// Calculate the quotient.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }

    return a / b;
}

// Calculate the average.
function average(a, b) {
    return (a + b) / 2;
}

// Export the calculator functions.
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    average
};