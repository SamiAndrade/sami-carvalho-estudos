function getNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; }, 0);
}
var sumNumbers = getNumbers(1, 2, 6, 10);
console.log("O resultado da soma é: " + sumNumbers);
