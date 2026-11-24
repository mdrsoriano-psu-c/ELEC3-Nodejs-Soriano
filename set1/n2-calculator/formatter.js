// Full Name: MICA DANIELLE R. SORIANO
// Section: IV-BSIT C
// Course: ELEC 3 - Node.js
// Activity: N2 - Modular Calculator
// Date: November 24, 2026

// Format the calculation result.
function formatResult(operation, a, b, result) {
    const symbols = {
        add: "+",
        subtract: "-",
        multiply: "*",
        divide: "/"
    };

    if (operation === "average") {
        return `Average of ${a} and ${b} = ${result}`;
    }

    return `${a} ${symbols[operation]} ${b} = ${result}`;
}

// Export the formatter function.
module.exports = { formatResult };