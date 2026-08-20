"use strict";

const member1 = {
  id: Symbol('member1'),
  name: 'Tolik',
  joinDate: '2025-02-13'
};

const member2 = {
  id: Symbol('member2'),
  name: 'Pavlik',
  joinDate: '2023-03-15'
};

const member3 = {
  id: Symbol('member3'),
  name: 'Vitalik',
  joinDate: '2026-01-01'
};

console.log(member1)
console.log(member2)
console.log(member3)

const twin1 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

const twin2 = {
  id: Symbol('twin'),
  name: 'Marpha',
  joinDate: '2024-01-15'
};

console.log(twin1 === twin2);
console.log(twin1.id === twin2.id);
console.log(twin1.name === twin2.name);
console.log(twin1.id.description === twin2.id.description);

// Все однакове - ім'я, дата, навіть опис символу. Але Symbol все одно різні.
// Бо опис це просто підпис, для людей, а не сам Symbol.
// JS кожного разу створює нову річ, навіть якщо назвати її так само

const s1 = Symbol('secret');
const s2 = Symbol(s1.description);
console.log(s1 === s2);

// false - взяв чужий опис, а Symbol все одно вийшов новий, не той самий

const s1b = Symbol('id');
const s2b = Symbol('id');
console.log(s1b == s2b);

// теж false, == тут не рятує

const s = Symbol('id');
// alert(s) - падає з помилкою
// alert(String(s)) - працює, показує Symbol(id)
// alert(s.toString()) - теж працює, те саме
// alert(s.description) - працює, показує просто id

const uniqueKey = Symbol('meta');
const data = {
  publicName: 'Alice',
  [uniqueKey]: 'секретна інформація'
};

console.log(data);
console.log(data[uniqueKey]);
console.log(data.uniqueKey);
console.log(Object.keys(data));

// data.uniqueKey не спрацював, бо це шукає рядок "uniqueKey", а не наш Symbol
// доступ тільки через data[uniqueKey]
// і Object.keys взагалі не показав цей ключ - Symbol туди не потрапляє
// зручно якщо треба щось приховати від звичайного перебору об'єкта

const member4 = {
  id: Symbol('member4'),
  name: 'Pavlik2',
  joinDate: '2024-03-15'
};

const member5 = {
  id: Symbol('member5'),
  name: 'Vitaliк2',
  joinDate: '2027-01-01'
};

const club = [member1, member2, member3, member4, member5];

function findMember(memberSymbol) {
  const found = club.find(member => member.id === memberSymbol);

  if (found === undefined) {
    return 'Member not found';
  } else {
    return found;
  }
}

console.log(findMember(member3.id));
console.log(findMember(Symbol('member')));

// перший раз знайшло member3, бо це той самий Symbol що і в масиві
// другий раз не знайшло нічого, хоч опис такий самий - це новий Symbol
// от і весь сенс - Symbol не підробити, навіть знаючи як він виглядає

const a = Symbol('shared');
const b = Symbol('shared');
console.log(a === b); // false, звичайний Symbol завжди новий

const c = Symbol.for('shared');
const d = Symbol.for('shared');
console.log(c === d); // true, бо Symbol.for бере той самий з реєстру

// думав що буде true, так і вийшло
// Symbol.for не створює новий кожного разу, а шукає по ключу і віддає готовий
// тому і є два варіанти - Symbol коли треба щоб було унікально,
// і Symbol.for коли навпаки треба щоб різні частини коду ділили один Symbol
//
// наприклад: два модулі хочуть ставити позначку на об'єктах через один тег,
// типу Symbol.for('debugFlag') - один ставить, інший перевіряє,
// і вони точно звертаються до одного й того самого Symbol