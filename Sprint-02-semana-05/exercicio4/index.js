function overlapOfNumbers(x) {
    if (typeof x === "number") {
        return x * x;
    }
    else if (Array.isArray(x)) {
        return x.map(function (y) { return y * y; });
    }
    throw new Error("Dado de entrada não suportado. Tente novamente.");
}
var xNumber = 5;
var arrayResult = overlapOfNumbers(xNumber);
var arrayNumbers = [4, 6, 8, 10, 12, 14];
var arrayResults = overlapOfNumbers(arrayNumbers);
console.log("O n\u00FAmero X ao quadrado \u00E9: ".concat(arrayResult, "\n\nOs n\u00FAmeros do array X ao quadrado s\u00E3o: ").concat(arrayResults));
