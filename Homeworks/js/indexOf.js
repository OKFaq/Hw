"use strict";

function removeElementMethods(array, item) {
    const index = array.indexOf(item);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

const array2 = new Array(1, 2, 3, 4, 5, 6, 7);
removeElementMethods(array2, 5);
console.log("Результат з методами:", array2);
