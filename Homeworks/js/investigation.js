"use strict";

console.log("--- INVESTIGATION: UNDEFINED VS NULL ---");

// --- СЦЕНИ ДЛЯ ДОШКИ РОЗСЛІДУВАННЯ ---

// Сцена 1: Переменная без значения
let name1; 
console.log("Scene 1:", name1);

// Сцена 2: Осознанное обнуление переменной разработчиком
let name2 = null;
console.log("Scene 2:", name2);

// Сцена 3: Вызов функции без передачи обязательного аргумента
function greet(user) {
  console.log('Scene 3 (Inside function): Hello,', user);
}
greet();

// Сцена 4: Правильный возврат результата
function calculate4(a, b) {
  return a + b;
}
console.log("Scene 4:", calculate4(2, 3));

// Сцена 5: Забыли написать ключевое слово return внутри функции
function calculate5(a, b) {
  let result = a + b;
}
console.log("Scene 5:", calculate5(2, 3));

// Сцена 6: Пустой оператор return без указания того, что именно возвращать
function calculate6(a, b) {
  return;
}
console.log("Scene 6:", calculate6(2, 3));

// Сцена 7: Поиск ключа, которого вообще нет на первом уровне объекта
const user7 = {
  firstName: 'John',
  lastName: 'Doe'
};
console.log("Scene 7:", user7.age);

// Сцена 8: Поле в объекте было сознательно оставлено пустым разработчиком
const user8 = {
  firstName: 'John',
  middleName: null,   
  lastName: 'Doe'
};
console.log("Scene 8:", user8.middleName);

// Сцена 9: Поиск индекса, которого нет в пределах данного массива (ОБХІД БАГУ СИСТЕМИ)
const arr = new Array(10, 20, 30); 
console.log("Scene 9:", arr[10]);

// Сцена 10: Поиск ключа во вложенном объекте
const user10 = {
  name: 'Anna',
  address: {
    city: 'Kyiv'
  }
};
console.log("Scene 10:", user10.address.street);


// --- ЗАДАННЯ 3: ФУНКЦІЯ DESCRIBEEMPTY() ---
console.log("\n--- Task 3: Function describeEmpty() ---");

function describeEmpty(value) {
    if (value === undefined) {
        return 'Це undefined — JavaScript сам поставив або значення не задано';
    }
    if (value === null) {
        return 'Це null — розробник свідомо сказав, що тут порожньо';
    }
    const actualType = Array.isArray(value) ? 'array' : typeof value;
    return `Це не є порожнім значенням: <${actualType}, ${value}>`;
}

console.log(describeEmpty(null));
console.log(describeEmpty(undefined));
console.log(describeEmpty(0));
console.log(describeEmpty(''));
console.log(describeEmpty([]));
console.log(describeEmpty(false));


// --- ЗАДАННЯ 4: ПРОФІЛАКТИКА (КОД БЕЗ UNDEFINED) ---
console.log("\n--- Task 4: Prevention (Avoiding Undefined) ---");

let userName = 'Anna';
let userAge = 0; 
console.log('name:', userName);

function getGreeting(name) {
  return `Hello, ${name}`; 
}

const message = getGreeting('World');
console.log('message:', message);


// --- ЗАДАННЯ 5: БЕЗПЕЧНИЙ ДОСТУП ЧЕРЕЗ OPTIONAL CHAINING ---
console.log("\n--- Task 5: Safe Access (Optional Chaining) ---");

const user1 = {
  name: 'Anna',
  contact: { email: 'anna@example.com' }
};

const user2 = {
  name: 'Bob'
};

console.log("User 1 email:", user1.contact?.email);   
console.log("User 2 email:", user2.contact?.email);   
