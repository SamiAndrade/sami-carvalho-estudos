function reverseArray<X extends string | number>(array: X[]): X[] {
    return [...array].reverse();
}

let numbers: number[] = [20, 19, 18, 17, 16, 15, 14, 13, 12];
let names: string[] = ["Paulo", "Davi", "Lucas", "Pedro", "Thales"]
let reversedNumbers = reverseArray(numbers);
let reversedNames = reverseArray(names);

console.log(`Array de números original: ${numbers}\nArray de números invertidos: ${reversedNumbers}\n`)
console.log(`Array de nomes original: ${names}\nArray de nomes invertidos: ${reversedNames}`);