function add(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

function subtract(numbers) {
    return numbers.slice(1).reduce((a, b) => a - b, numbers[0]);
}

function multiply(numbers) {
    return numbers.reduce((a, b) => a * b, 1);
}

function divide(numbers) {
    return numbers.slice(1).reduce((a, b) => {
        if (b === 0) {
            console.log("Error: Division by zero.");
            return NaN;
        }
        return a / b;
    }, numbers[0]);
}

const numbers = [10, 5, 2];
console.log("Addition: " + add(numbers));
console.log("Subtraction: " + subtract(numbers));
console.log("Multiplication: " + multiply(numbers));
console.log("Division: " + divide(numbers));
