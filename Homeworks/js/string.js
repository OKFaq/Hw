"use strict";

const singleQuotesStr = 'Pavlik';
const doubleQuotesStr = "Pavlik";
const backticksStr = `Pavlik`;

console.log("Single quotes:", singleQuotesStr);
console.log("Double quotes:", doubleQuotesStr);
console.log("Backticks:", backticksStr);

const escapedQuotes = "Він сказав: \"Це — 'звичайна' помилка\".";
console.log("Method 1", escapedQuotes);
const backticksQuotes = `Він сказав: "Це — 'звичайна' помилка".`;
console.log("Method 2:", backticksQuotes);

// Другий спосіб краще

const name = "Vadim";
const age = 16;
const city = "Kyiv";

const profileInfo = `Привіт! Мене звати ${name}, мені ${age} років (або ${age * 12} місяців), живу у місті ${city}.`;

console.log(profileInfo);

console.log("String length:", profileInfo.length);

console.log("First character:", profileInfo[0]);

console.log("Fifth character:", profileInfo[4]);

console.log("Last character:", profileInfo[profileInfo.length - 1]);

const greeting = "Hello";
greeting[0] = "J";
console.log("String after modification attempt:", greeting); // Очікувано: "Hello"




// Uncaught TypeError: Cannot assign to read only property '0' of string 'Hello'
// at string.js:37:13