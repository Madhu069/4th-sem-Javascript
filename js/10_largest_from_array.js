let n = parseInt(prompt("How many numbers?"));
let numbers = [];

for (let i = 0; i < n; i++) {
    numbers.push(parseInt(prompt("Enter number " + (i + 1))));
}

console.log("Largest number:", Math.max(...numbers));
