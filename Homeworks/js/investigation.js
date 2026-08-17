"use strict";

console.log("1:", typeof 42);
console.log("2:", typeof 42n);
console.log("3:", typeof 'hello');
console.log("4:", typeof true);
console.log("5:", typeof undefined);
console.log("6:", typeof null);
console.log("7:", typeof NaN);
console.log("8:", typeof Infinity);
console.log("9:", typeof Symbol('id'));
console.log("10:", typeof {});
console.log("11:", typeof []);
console.log("12:", typeof [1, 2, 3]);
console.log("13:", typeof function() {});
console.log("14:", typeof (() => {}));
console.log("15:", typeof (2 + 2));
console.log("16:", typeof ('2' + 2));
console.log("17:", typeof ('foo' - 'bar'));

let x;
console.log("18:", typeof x);
console.log("19:", typeof nonExistentVariable);
console.log("20:", typeof typeof 42);


function isReallyArray(value) {
    return Array.isArray(value);
}

function whatIsIt(value) {
    if (value === null) {
        return 'null';
    }
    if (Array.isArray(value)) {
        return 'array';
    }
    return typeof value;
}

console.log("\n--- Tests: isReallyArray() ---");
console.log("isReallyArray([1, 2, 3])       ->", isReallyArray([1, 2, 3]));
console.log("isReallyArray('hello')        ->", isReallyArray('hello'));
console.log("isReallyArray({ length: 3 })   ->", isReallyArray({ length: 3 }));
console.log("isReallyArray(null)           ->", isReallyArray(null));
console.log("isReallyArray('123'.split('')) ->", isReallyArray('123'.split('')));

console.log("\n--- Tests: whatIsIt() ---");
console.log("whatIsIt(42)        ->", whatIsIt(42));
console.log("whatIsIt('hi')      ->", whatIsIt('hi'));
console.log("whatIsIt(null)      ->", whatIsIt(null));
console.log("whatIsIt([1, 2])    ->", whatIsIt([1, 2]));
console.log("whatIsIt({})        ->", whatIsIt({}));
console.log("whatIsIt(() => {})  ->", whatIsIt(() => {}));
console.log("whatIsIt(undefined) ->", whatIsIt(undefined));
console.log("whatIsIt(NaN)       ->", whatIsIt(NaN));