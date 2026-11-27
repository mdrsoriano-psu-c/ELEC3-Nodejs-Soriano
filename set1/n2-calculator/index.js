const operations = require("./operations");
const { formatResult } = require("./formatter");
const path = require("node:path");

const [operation, first, second] = process.argv.slice(2);

console.log("==========================================");
console.log("            MODULAR CALCULATOR");
console.log("==========================================");
console.log("Name: MICA DANIELLE R. SORIANO");
console.log("Section: IV-BSIT C");
console.log("Activity: N2");
console.log("Program: " + path.basename(__filename));
console.log("------------------------------------------");


const a = Number(first);
const b = Number(second);


if (!Object.hasOwn(operations, operation)) {
    console.log("Error: Unknown operation.");
} else if (
    first === undefined ||
    second === undefined ||
    first.trim() === "" ||
    second.trim() === "" ||
    !Number.isFinite(a) ||
    !Number.isFinite(b)
) {
    console.log("Error: Please enter two valid numbers.");
} else {
    try {
        const result = operations[operation](a, b);

        console.log("Operation: " + operation);
        console.log("Result: " + formatResult(operation, a, b, result));
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

console.log("==========================================");