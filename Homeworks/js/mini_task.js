"use strict";

console.log("--- Task 5: Extension (Price Converter) ---");


function printFormattedPrice(totalKopecks) {
    const hryvnias = Math.floor(totalKopecks / 100);
    const kopecks = totalKopecks % 100;
    console.log(`Ціна товару: ${hryvnias} грн ${kopecks} коп.`);
}

printFormattedPrice(19999);
printFormattedPrice(50);
printFormattedPrice(100000);
printFormattedPrice(7);