"use strict";

const name = "Vadim"; // Ім'я незмінне протягом усього життя
const lastName = "Miroshnikov"; // Прізвище також
const birthYear = 2009; // Хоча ім'я і прізвище в деяких випадках все таки може змінитися, але рік народження точно ні

let age = 16; // Кожен рік число збільшується
let currentCity = "Kyiv"; // Одного дня я можу переїхати
let currentHobby = "Coding"; // Хобі змінюються
let favoriteColor = "Purple"; // Улюблений колір також

console.log("First Name:", name);
console.log("Last Name:", lastName);
console.log("Birth Year:", birthYear);
console.log("Age:", age);
console.log("Current City:", currentCity);
console.log("Current Hobby:", currentHobby);
console.log("Favorite Color:", favoriteColor);

const businessCard = "Hello! My name is " + name + " " + lastName + ", I am " + age + " years old, and I live in " + currentCity + ".";

console.log(businessCard)

age = age + 1

console.log("Age:", age)

// Число збільшилося на 1 ||||3.1||||

// birthYear = birthYear + 1

// console.log("Birth Year:", birthYear);
// variables.js:26 Uncaught TypeError: Assignment to constant variable.
// at variables.js:26:11 ||||3.2||||

// let name = "Vitalik"

// Uncaught SyntaxError: Identifier 'name' has already been declared (at variables.js:32:5) ||||3.3||||