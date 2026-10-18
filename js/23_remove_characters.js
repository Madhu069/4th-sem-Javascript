function removeCharacters(str, n) {
    return str.slice(0, n);
}

console.log(removeCharacters("JavaScript", 4)); // Java

// To remove the first n characters instead:
// function removeFirstCharacters(str, n) {
//     return str.slice(n);
// }
