"use strict";

function padString(str, length, symbol, isLeft = false) {

    if (typeof str !== 'string') {
        return 'some error: First argument must be a string';
    }
    if (typeof length !== 'number' || Number.isNaN(length) || length < 0) {
        return 'some error: Second argument must be a positive number';
    }
    if (str.length < length) {
        if (typeof symbol !== 'string' || symbol.length !== 1) {
            return 'some error: Third argument must be a single character';
        }
    }
    if (typeof isLeft !== 'boolean') {
        return 'some error: Fourth argument must be a boolean';
    }

    if (length < str.length) {
        return str.substring(0, length);
    }

    const paddingLength = length - str.length;
    let paddingStr = "";

    for (let i = 0; i < paddingLength; i++) {
        paddingStr += symbol; 
    }

    if (isLeft === false) {
        return paddingStr + str; 
    } else {
        return str + paddingStr; 
    }
}

console.log(padString('hello', 8, '*'));         // Виведе: hello*** (бо аргумент забули, спрацює "інакше")
console.log(padString('hello', 6, '*', false));   // Виведе: *hello (передали false — додало ліворуч!)
console.log(padString('hello', 2));              // Виведе: he