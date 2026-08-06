"use strict";

const hero = {
    name: "Pavlik",
    class: "mage",
    level: 1,
    isAlive: true,
    stats: {
        hp: 100,
        mana: 150,
        strength: 10,
        agility: 12,
        intelligence: 18
    },
    inventory: ['staff', 'mana potion', 'ancient scroll', 'shield', 'gold coin']
};

console.log("Hero Name:", hero.name);
console.log("Hero Class:", hero.class);
console.log("Hero Level:", hero.level);
console.log("Is Hero Alive?:", hero.isAlive);

console.log("Entire Stats Object:", hero.stats);
console.log("Hero Strength:", hero.stats.strength);
console.log("Boosted Intelligence (Spell Power x2):", hero.stats.intelligence * 2);

console.log("Inventory:", hero.inventory);
console.log("First Item:", hero.inventory[0]);
console.log("Last Item:", hero.inventory[hero.inventory.length - 1]);
console.log("Number of items:", hero.inventory.length);

const enemy = {
    name: "Goblin Shaman",
    'critical hit chance': 0.15,
    'attack-speed': 2.5,
    ['damage-' + hero.class]: 50
};

console.log("Critical hit chance:", enemy['critical hit chance']);
console.log("Attack speed:", enemy['attack-speed']);
console.log("Damage vs Hero Class:", enemy['damage-' + hero.class]);

hero.abilities = {
    attack: function() { 
        return `${hero.name} is attacking!`; 
    },
    heal: () => { 
        return `${hero.name} uses a healing spell!`; 
    },
    levelUp: () => { 
        return `${hero.name} is leveling up! New level: ${hero.level + 1}`; 
    }
};

console.log(hero.abilities.attack());
console.log(hero.abilities.heal());
console.log(hero.abilities.levelUp());

hero.location = {
    region: 'Far North',
    city: 'Whitewind',
    coordinates: { x: 45.12, y: -12.85, z: 115.0 }
};

console.log("Region:", hero.location.region);
console.log("Coordinates Z:", hero.location.coordinates.z);

const villain = {
    name: "Sauron",
    class: "necromancer",
    level: 50,
    isAlive: true,
    stats: { hp: 500, mana: 300, strength: 40, agility: 15, intelligence: 35 },
    inventory: ['mace', 'one ring', 'black armor']
};

console.log(`Учасники дуелі: ${hero.name} vs ${villain.name}`);

if (hero.stats.hp > villain.stats.hp) {
    console.log(`У ${hero.name} more health than in ${villain.name} (${hero.stats.hp} vs ${villain.stats.hp})`);
} else if (villain.stats.hp > hero.stats.hp) {
    console.log(`У ${villain.name} more health than in ${hero.name} (${villain.stats.hp} vs ${hero.stats.hp})`);
} else {
    console.log(`The health of the characters is the same (${hero.stats.hp} = ${villain.stats.hp})`);
}

const heroItems = hero.inventory.join(', ');
const villainItems = villain.inventory.join(', ');
console.log(`Учасники дуелі: ${hero.name} (${heroItems}) vs ${villain.name} (${villainItems}).`);