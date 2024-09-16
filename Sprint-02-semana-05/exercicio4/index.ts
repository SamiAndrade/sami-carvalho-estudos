function overlapOfNumbers(x: number): number;

function overlapOfNumbers(x: number[]): number[];

function overlapOfNumbers(x: number | number[]): number | number[] {
    if(typeof x === "number") {
        return x * x;
    } else if (Array.isArray(x)) {
        return x.map(y => y * y);
    }
    throw new Error("Dado de entrada não suportado. Tente novamente.")
}

let xNumber = 5;
let arrayResult = overlapOfNumbers(xNumber);
let arrayNumbers = [4, 6, 8, 10, 12, 14];
let arrayResults = overlapOfNumbers(arrayNumbers);
console.log(`O número X ao quadrado é: ${arrayResult}\n\nOs números do array X ao quadrado são: ${arrayResults}`);


