"use strict";

const positiveInteger = 25;
console.log("Positive integer:", positiveInteger);

const negativeInteger = -10;
console.log("Negative integer:", negativeInteger);

const floatNumber = 4.25;
console.log("Float Number:", floatNumber);

const largeExponent = 7e6;
console.log("Large Exponent:", largeExponent);

const smallExponent = 5e-4;
console.log("Small Exponent:", smallExponent);

const numericSeparator = 1_500_000;
console.log("Numeric Separator:", numericSeparator);

const positiveInfinity = 1 / 0
console.log("Positive Infinity:", positiveInfinity);

const negativeInfinity = -50 / 0;
console.log("Negative Infinity:", negativeInfinity);

const notANumber = "baba" * 5;
console.log("NaN:", notANumber);

const trapResult = 0.1 + 0.2;
console.log("Trap result:", trapResult);


const maxSafe = Number.MAX_SAFE_INTEGER;
console.log("Number.MAX_SAFE_INTEGER:", maxSafe);

console.log("MAX_SAFE_INTEGER + 1:", maxSafe + 1); // 9007199254740992
console.log("MAX_SAFE_INTEGER + 2:", maxSafe + 2); // 9007199254740994
console.log("MAX_SAFE_INTEGER + 3:", maxSafe + 3); // 9007199254740994
console.log("MAX_SAFE_INTEGER + 4:", maxSafe + 4); // 9007199254740996
console.log("MAX_SAFE_INTEGER + 5:", maxSafe + 5); // 9007199254740996


const virusNaN = "baba" / 5;


const nanPlus = virusNaN + 10;
const nanMinus = virusNaN - 5;
const nanMultiplication = virusNaN * 2;
const nanDivision = virusNaN / 4;


console.log("NaN + 10 =", nanPlus);
console.log("NaN - 5  =", nanMinus);
console.log("NaN * 2  =", nanMultiplication);
console.log("NaN / 4  =", nanDivision);
// Всюди відповідь NaN
