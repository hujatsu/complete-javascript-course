'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 1, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  // ES6 Enhanced object literals
  openingHours,
};

/* ////////////////////////////////////////////////////////////////
// String methods practice

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : '🟢'}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(45);
  console.log(output);
}
 */
/////////////////////////////////////////////////////////////////
// Coding challenge #4

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const convertToCamelCase = function () {
//   const initialText = document.querySelector('textarea').value;
//   const rows = initialText.split('\n');

//   for (const [idx, value] of rows.entries()) {
//     const [first, second] = value.toLowerCase().trim().split('_');
//     const camelCaseName =
//       first + second.replace(second[0], second[0].toUpperCase());
//     console.log(`${camelCaseName.padEnd(20, ' ')}${'✅'.repeat(idx + 1)}`);
//   }
// };

// document
//   .querySelector('button')
//   .addEventListener('click', () => convertToCamelCase());

/* //////////////////////////////////////////////////////////////

// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizedName('jessica ann smith davis');
capitalizedName('jonas schmedtmann');

// string padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(43434578));
console.log(maskCreditCard(4343453465354634634));
console.log(maskCreditCard('34534531325346234234'));

// repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'â'.repeat(n)}`);
};

planesInLine(5);
planesInLine(13); */

/* ////////////////////////////////////////////////////////////
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing
const priceGB = '288,97Â£';
const priceUS = priceGB.replace('Â£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement);
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate')); // this is a very new method

console.log(announcement.replace(/door/g, 'gate')); // regex

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a Laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection'); */

/* 
////////////////////////////////////////////////////////////
// 121. Working with String - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // case-sensitive

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat!');
  else console.log('You got lucky!');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas')); 
*/

/* 
////////////////////////////////////////////////////////////
// Coding Challenge #3
const gameEvents = new Map([
  [17, '? GOAL'],
  [36, '? Substitution'],
  [47, '? GOAL'],
  [61, '? Substitution'],
  [64, '? Yellow card'],
  [69, '? Red card'],
  [70, '? Substitution'],
  [72, '? Substitution'],
  [76, '? GOAL'],
  [80, '? GOAL'],
  [92, '? Yellow card'],
]);

// Task 1)
const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2)
gameEvents.delete(64);
console.log(gameEvents);

// Task 3)
const avg = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avg} minutes`);

// Task 4)
for (const event of gameEvents) {
  console.log(`[${event[0] <= 45 ? 'FIRST' : 'SECOND'} HALF]: ${event[1]}`);
} 
*/

/* 
////////////////////////////////////////////////////////////
// maps: iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct pa'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to mapt
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(question.get(answer === question.get('correct')));

// convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/* 
///////////////////////////////////////////////////////////
// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1', 'Heading'));
console.log(rest);
// rest.clear(); // remove everything from map
console.log(rest.size);

console.log(rest.get(arr));
 */

/* 
//////////////////////////////////////////////////////////////////////
// sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size); // size = item count
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread'); // add
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Risotto'); // delete
console.log(ordersSet);

// ordersSet.clear() // clears all elements
for (const order of ordersSet) console.log(order);

// example: remove duplicates
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size);
 */

/* 
////////////////////////////////////////////////////////////////////////////////
// Coding challenge #2
// Task 1)
for (const [idx, player] of game.scored.entries())
  console.log(`Goal ${idx + 1}: ${player}`);

// Task 2)
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
console.log(sum / Object.values(game.odds).length);

// Task 3)
for (const [team, odd] of Object.entries(game.odds))
  console.log(
    `Odd of ${(game[team] && 'victory ' + game[team]) || 'draw'}: ${odd}`
  );

// Task 4: Bonus
let scorers = {};
for (const x of game.scored.values()) {
  scorers[x] ??= 0;
  scorers[x] += 1;
}
console.log(scorers); 
*/

/* 
///////////////////////////////////////////////////////////////
// Looping objects: object keys, valuex, and entries

const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(properties)) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} 
*/

/* 
//////////////////////////////////////////////////////////////
// Optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
// WITH optional chaining
// doesn't throw error if mon doesn't exist on openingHours but immediately returns undefined
console.log(restaurant.openingHours.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.risotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  // { name: 'Jonas', email: 'hello@jonas.io' },
  // { name: 'niko', email: 'niko@jonas.io' },
];

console.log(users[0]?.name ?? 'User array empty'); */

/////////////////////////////////////////////////////////////////
// Enhanced object literals

/* 
/////////////////////////////////////////////////////////////////
// The for of loop
const menu = [...restaurant.starterMenu, restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} 
*/

/* 
////////////////////////////////////////////////////////////////

// Coding challenge #1
// 1)
const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// 2)
const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// 3)
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// 5)
const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// 6)
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(`Goals in total: ${players.length}`);
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// 7)
console.log((team1 < team2 && 'team1') || (team1 > team2 && 'team2') || 'draw'); */

/* 
/////////////////////////////////////////////////
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOYS>';
rest2.owner &&= '<ANONYMOYS>';
console.log(rest1.owner); // undefined
console.log(rest2.owner); // <ANONYMOUS>
 */
/* 
///////////////////////////////////////////////////////////
// The nullish coalescing operator ??
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); 
*/

/*
///////////////////////////////////////////////////////////////////////// 
console.log('--------- OR --------------');
// Short circuiting (&& and ||)
// Use ANY data type, return ANY data type, short-circuiting
// short-circuiting: returns first truthy value
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null); // null is also falsy, but it's the last element

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' is the first truthy value

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------- AND --------------');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 7 && null && 'Jonas'); // returns null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); 
*/

/* 
// 1) Destructuring
// Rest Pattern and Parameters
// SPREAD, because on RIGHT side of equal sign
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// rest element must be the last element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 2, 3, 5, 6);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms'); 
*/

/* 
/////////////////////////////////////////////////////////////////////////
// The spread operator (...)
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Handy use cases for the spread operator
// 1. Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// 2. Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Niko';
const letters = [...str, ' ', 'H.'];
console.log(letters);
console.log(...str);
// The spread operator works in places where you would usually add multiple parameters separated
// by commas such as array declarations and function calls. Template literals don't work, for example.

// Real-world example
const ingredients = [
  prompt("Let's make pasta! Indredient 1?"),
  prompt('Indredient 2?'),
  prompt('Indredient 3?'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); // superior solution

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, restaurant.name);
*/

/* 
/////////////////////////////////////////////////////////////////////////////
// Destructuring objects
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// using different names while destructuring
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); 
*/

///////////////////////////////////////////////////////////////////////////////////
// Destructuring arrays
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // Destructuring the arr
// const [x, y, z] = arr;
// console.log(x, y, z);

// // we can skip elements by leaving a 'hole'
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // switch the order
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receinve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
