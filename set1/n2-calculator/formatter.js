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


module.exports = { formatResult };