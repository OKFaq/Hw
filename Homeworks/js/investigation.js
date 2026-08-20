"use strict";

let name1; 
console.log("Scene 1:", name1);

let name2 = null;
console.log("Scene 2:", name2);

function greet(user) {
  console.log('Scene 3 (Inside function): Hello,', user);
}
greet();

function calculate4(a, b) {
  return a + b;
}
console.log("Scene 4:", calculate4(2, 3));

function calculate5(a, b) {
  let result = a + b;
}
console.log("Scene 5:", calculate5(2, 3));

function calculate6(a, b) {
  return;
}
console.log("Scene 6:", calculate6(2, 3));

const user7 = {
  firstName: 'John',
  lastName: 'Doe'
};
console.log("Scene 7:", user7.age);

const user8 = {
  firstName: 'John',
  middleName: null,   
  lastName: 'Doe'
};
console.log("Scene 8:", user8.middleName);

const arr = new Array(10, 20, 30); 
console.log("Scene 9:", arr[10]);

const user10 = {
  name: 'Anna',
  address: {
    city: 'Kyiv'
  }
};
console.log("Scene 10:", user10.address.street);


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


let userName = 'Anna';
let userAge = 0; 
console.log('name:', userName);

function getGreeting(name) {
  return `Hello, ${name}`; 
}

const message = getGreeting('World');
console.log('message:', message);


const user1 = {
  name: 'Anna',
  contact: { email: 'anna@example.com' }
};

const user2 = {
  name: 'Bob'
};

console.log("User 1 email:", user1.contact?.email);   
console.log("User 2 email:", user2.contact?.email);