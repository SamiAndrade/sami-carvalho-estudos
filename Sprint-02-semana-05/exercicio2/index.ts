function getNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
}

let sumNumbers = getNumbers(1, 2, 6, 10);
console.log("O resultado da soma é: " + sumNumbers);