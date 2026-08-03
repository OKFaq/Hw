"use strict";

const bigIntWithSuffix = 9007199254740991n;
console.log(bigIntWithSuffix);
console.log(typeof bigIntWithSuffix);


const bigIntWithFunction = BigInt(9007199254740991);
console.log(bigIntWithFunction);
console.log(typeof bigIntWithFunction);


const maxSafeBigInt = BigInt(Number.MAX_SAFE_INTEGER);

console.log("Base BigInt value:", maxSafeBigInt); // 9007199254740991n

console.log("maxSafeBigInt + 1n:", maxSafeBigInt + 1n); // 9007199254740992n
console.log("maxSafeBigInt + 2n:", maxSafeBigInt + 2n); // 9007199254740993n
console.log("maxSafeBigInt + 3n:", maxSafeBigInt + 3n); // 9007199254740994n
console.log("maxSafeBigInt + 4n:", maxSafeBigInt + 4n); // 9007199254740995n
console.log("maxSafeBigInt + 5n:", maxSafeBigInt + 5n); // 9007199254740996n

const a = 10n; // тип bigint
const b = 10;  // тип number

console.log("(a === b):", a === b);
console.log("(a == b):", a == b);
console.log("Type of a:", typeof a);
console.log("Type of b:", typeof b);


//  3.3:
//  Оператор суворої рівності '===' порівнює як значення, так і типи даних без їхнього взаємного перетворення. 

//  Оператор несуворої рівності '==' перед порівнянням автоматично приводить обидва операнди до спільного типу 


// const mixedResult = 10n + 5;
// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// at bigint.js:31:25