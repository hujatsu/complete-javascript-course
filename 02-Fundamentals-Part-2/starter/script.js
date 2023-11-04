'use strict';

// lecture 32 strict mode
// let hasDriversLicense = false;
// const passTest = true;

// // strict mode throws error on the typoed variable name
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive')

// // strict mode throws error on these reserved keywords
// const interface = 'Audio';
// const private = 534;

// Lecture 33: functions
// function logger() {
//     console.log('My name is Niko');
// }

// // calling / running / invoking the function
// logger();
// logger();
// logger();

// // here apples and oranges are function paramaters
// function fruitProcessor(apples, oranges) {
//     //console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// // when we are calling the function we are passing arguments (not parameters) to the function
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// assignment
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}.`
// }

// const finland = describeCountry('Finland', 6, 'Helsinki');
// const sweden = describeCountry('Sweden', 10, 'Stockholm');
// const germany = describeCountry('Germany', 82, 'Berlin');

// console.log(finland, sweden, germany)

// 34. Function Declarations vs. Expressions

// function declaration with the function keyword
// const age1 = calcAge1(1995);
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// // const age1 = calcAge1(1995);

// // function expression, expressions produce values
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1995);
// console.log(age1, age2);

// // We can call functions created with a DECLARATION before their initialization but it does not work with function expressions!
// // this is because of something called 'hoisting' but more on that later.

// // Lecture 34 assignment
// // Function declaration
// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

// const finnishPopPercentage = percentageOfWorld1(6);
// const swedishPopPercentage = percentageOfWorld1(10);
// const germanPopPercentage = percentageOfWorld1(82);

// console.log(finnishPopPercentage, swedishPopPercentage, germanPopPercentage);

// const percentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// }

// const finnishPopPercentage2 = percentageOfWorld2(6);
// const swedishPopPercentage2 = percentageOfWorld2(10);
// const germanPopPercentage2 = percentageOfWorld2(82);

// console.log(finnishPopPercentage2, swedishPopPercentage2, germanPopPercentage2);


// Lecture 35. Arrow Functions
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// // we need curly braces if there are multiple lines in the function
// // if there are multiple parameters, the parameters need to be wrapped with parantheses
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1995, 'Niko'));

// // Lecture 35 assignment
// const percentageOfWorld3 = population => population / 7900 * 100;

// const finnishPopPercentage3 = percentageOfWorld3(6);
// const swedishPopPercentage3 = percentageOfWorld3(10);
// const germanPopPercentage3 = percentageOfWorld3(82);

// console.log(finnishPopPercentage3, swedishPopPercentage3, germanPopPercentage3);

// Lecture 36. Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);


//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges.`;
//     return juice;
// };

// console.log(fruitProcessor(2, 3));

// Lecture 36 assignment
// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }
// const describePopulation = (country, population) => {
//     return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`
// };

// console.log(describePopulation('China', 1441));
// console.log(describePopulation('Finland', 6));
// console.log(describePopulation('Germany', 83));

// Lecture 37 reviewing functions

// 1. function declaration with "function calcAge() {}"
// can be used befored declaration

// 2. Function expression const calcAge = function() {} is essentially a function value stored in a variable

// 3. Arrow functions const calcAge = () => {}, has no this keyword

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         // Return exits/returns the function, this line will not be executed unless its before the return statement
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstName} is already retired!`)
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1995, 'Niko'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// Coding exercise 5: CHALLENGE #1
// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// };

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

// // console.log(scoreDolphins, scoreKoalas);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
//     } else {
//         console.log('No team wins...')
//     }
// }

// checkWinner(avgDolphins, avgKoalas);

// Lecture 39: Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // Two ways of creating Arrays
// const friends = ['Michael', 'Steven', 'Peter']; // Array literal
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); // length is a property of an array
// console.log(friends[friends.length - 1]); // returns the last element of the array. You can put any expression inside the brackets

// // Mutating the array
// // Arrays are primitive values, so we can mutate it even though the array is defined with the const keyword
// friends[2] = 'Jay' // element in position 2 is changed to 'Jay'
// console.log(friends);
// // friends = ['Bob', 'Alice]; // this doesn't work as we cannot reassign to a constant variable.
// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// // console.log(calcAge(years)); // this does not work as calcAge takes a number argument, returns NaN

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// // we can put functions (or any other expression) into an array
// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// Lecture 39: coding assignment
// const populations = [6, 10, 83, 1441];
// console.log(populations.length === 4);

// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
// console.log(percentages)

// Lecture 40: Basic Array Operations (Methods)

// Add elements to the end of the array
// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// // Add an element to the beginning of the list
// friends.unshift('John');
// console.log(friends);

// // Remove the last element
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // Remove the first element of an array
// friends.shift();
// console.log(friends);

// // Finding elements in an array
// console.log(friends.indexOf('Steven')); // returns the index of 'Steven' if it exists
// console.log(friends.indexOf('Bob')); // returns -1 if the element is not in the array

// console.log(friends.includes('Steven')); // returns true, includes method uses strict equality check
// console.log(friends.includes('Bob')); //  returns false

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

// // Lecture 40 assignment
// const neighbours = ['Sweden', 'Norway', 'Russia', 'Estonia'];

// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log('Probably not a central European country :D');
// }

// neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';
// console.log(neighbours);

// Coding Exercise 6: CHALLENGE #2

// const calcTip = (bill) => bill >= 50 & bill <= 300 ? 0.15 * bill : 0.2 * bill;

// // console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// Lecture 42: Introduction to objects
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
// };

// // Lecture 42: assignment
// const myCountry = {
//     country: 'Finland',
//     capital: 'Helsinki',
//     language: 'Finnish',
//     population: 6,
//     neighbours: 3,
// };

// // 43. Dot vs. Bracket Notation
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
// };

// console.log(jonas);

// // Dot notation
// console.log(jonas.lastName);

// // Bracket notation
// console.log(jonas['lastName']);

// // with bracket notation we can put any expression inside the brackets
// // The following doesn't work with dot notation!
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

//const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// Challenge:
// "Jonas has 3 friends, and his best friend is called Michael."
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

// // assignment lecture 43: dot vs. bracket notation
// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours} neighbouring countries and a capital called ${myCountry.capital}.`);
// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry['population']);

// Lecture 44. Object Methods
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     // we can also use functions as properties
//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calcAge: function () {
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     // getSummary method
//     getSummary: function () { return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.` },
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// // Jonas is a 46-year old teacher, and he has a/no driver's license.
// console.log(jonas.getSummary());

//  Coding challenge #3
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi
//     },
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi
//     },
// };

// mark.calcBMI();
// console.log(mark.bmi);

// if (john.calcBMI > mark.calcBMI) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
// }

// Lecture 46: for loop
// for loop keeps running whole condition is TRUE
// 1. counter
// 2. condition
// 3. increment
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// Lecture 46 assingment
// for (let voter = 1; voter <= 50; voter++) {
//     console.log(`Voter number ${voter} is currently voting`)
// }

// Lecture 47: Looping Arrays, Breaking and Continuing
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];
// const types = [];

// // Start looping from index 0 and stop before the index reaches the array length
// for (let i = 0; i < jonas.length; i++) {
//     // reading from jonas array
//     console.log(jonas[i]);
//     // filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

// Lecture 47 assignment
// const populations = [6, 10, 83, 1441];

// function percentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

// const percentages2 = []
// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages2);

// Lecture 48: Looping Backwards and Loops in Loops
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`----- Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     }
// }

// Lecture 48 assingment
// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
//     'Russia']];

// for (let outerIdx = 0; outerIdx < listOfNeighbours.length; outerIdx++) {
//     for (let innerIdx = 0; innerIdx < listOfNeighbours[outerIdx].length; innerIdx++) {
//         console.log(listOfNeighbours[outerIdx][innerIdx]);
//     }
// }

//  Lecture 49: while loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// // While loop is more versatile. It doesn't need to rely on any counter and we can define our own logic
// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log('Loop is about to end...');
// }

// Coding exercise 8: challenge #4
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i] + tips[i]);
// }

// console.log(tips, totals);

// // BONUS:
// const calcAverage = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage(totals));