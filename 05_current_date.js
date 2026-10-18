let today = new Date();

let mm = String(today.getMonth() + 1).padStart(2, '0');
let dd = String(today.getDate()).padStart(2, '0');
let yyyy = today.getFullYear();

console.log(mm + "-" + dd + "-" + yyyy);
console.log(mm + "/" + dd + "/" + yyyy);
console.log(dd + "-" + mm + "-" + yyyy);
console.log(dd + "/" + mm + "/" + yyyy);

console.log(
    yyyy + " " +
    today.toLocaleString('default', { month: 'long' }) +
    " " + dd + " " +
    today.toLocaleString('default', { weekday: 'long' })
);
