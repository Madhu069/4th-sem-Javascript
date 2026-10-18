// a. Create empty object
let dog = {};

// b. Print object
console.log(dog);

// c. Add properties
dog.name = "Tommy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;

dog.bark = function() {
    return "woof woof";
};

// d. Get values
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// e. Add new properties
dog.breed = "German Shepherd";

dog.getDogInfo = function() {
    return `${this.name} is a ${this.color} ${this.breed}`;
};

console.log(dog.getDogInfo());
