"use strict";

function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            for (let j = i; j < array.length - 1; j++) {
                array[j] = array[j + 1];
            }
            array.length = array.length - 1;
            return;
        }
    }
}

const array1 = new Array(1, 2, 3, 4, 5, 6, 7);
removeElement(array1, 5);
console.log("Результат з циклом:", array1);
