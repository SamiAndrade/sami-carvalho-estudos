var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function reverseArray(array) {
    return __spreadArray([], array, true).reverse();
}
var numbers = [20, 19, 18, 17, 16, 15, 14, 13, 12];
var names = ["Paulo", "Davi", "Lucas", "Pedro", "Thales"];
var reversedNumbers = reverseArray(numbers);
var reversedNames = reverseArray(names);
console.log("Array de n\u00FAmeros original: ".concat(numbers, "\nArray de n\u00FAmeros invertidos: ").concat(reversedNumbers, "\n"));
console.log("Array de nomes original: ".concat(names, "\nArray de nomes invertidos: ").concat(reversedNames));
