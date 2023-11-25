'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Steven'; // this firstName is looked up before the one in the global space
//       const str = `Oh, you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT!'; // this overrides the existing value of output (not a const)
//     }
//     // console.log(str); not accessible outside of the block; let/const are block scoped
//     console.log(millenial); // var declarations are accessible outside of the block
//     // add(2, 3); works only without strict mode as functions are block-scoped
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// // printAge() is not accessible in the global score

// console.log(me); // undefined
// // console.log(job);   // not accessible, temporal dead zone TDZ
// // console.log(year);  // not accessible

// var me = 'jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3)); // works
// // console.log(addExpr(2, 3)); // cannot access before init
// // console.log(addArrow(2, 3)); // cannot access before init

// // var addExpr = addDecl() works but returns undefined, const and let don't!
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // uses function's own this keyword that is undefined
// };

// calcAge(1995);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // uses lexical this keyword -> window
// };

// calcAgeArrow(1981);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// // borrow method
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f(); // doesn't work because there's no year attached to f

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // isMillenial();

//     // Solution 2
//     // arrow function doesn't have own this keyword
//     // it inherits the this property of its parent that is jonas
//     const isMillenial = () => {
//       console.log(this);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();
//   },

//   //   greet: () => console.log(`Hey ${this.firstName}`),
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// //   Arrow function prints 'Hey undefined' while function declaration prints
// // correctly 'Hey jonas'
// jonas.greet();

// //
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8); // doesn't work as arguments keyword exists only on regular functions

// Primitives
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); // 31
// console.log(oldAge); // 30 as expected

// const me = {
//   name: 'Niko',
//   age: 28,
// };

// // objects / reference types
// const friend = me;
// friend.age = 25; // changes the value in heap, not in the call stack
// // me and friend point to same memory address which stores the heap address as value

// console.log('Friend', friend); // age 25
// console.log('Me', me); // age 25

// Variables declared with const are immutable only if they are of primitive types!

// primitive type works as one would expect
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';

console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// Reference type doesn't work as one would probably expect
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);
// marriedJessica = {} does not work because we cannot change the reference to a different object in the heap

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // creates a shallow copy of jessica2
// shallow copy -> doesn't work if there are new objects withing the object
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

// Mary and John are added to both objects jessica2 and jessicaCopy because
// jessicaCopy is just a shallow copy of jessica2
// creating real deep clones is out of the scope for now
console.log('Before marriage', jessica2);
console.log('After marriage', jessicaCopy);
