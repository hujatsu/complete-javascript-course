
/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Niko');

let firstName = 'Matilda';
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'javascriptIsFun');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(year);
console.log(typeof year);


// prints object, although null is not an object!
console.log(typeof null);
*/

// Variables declared with let keyword are mutable, i.e. the value can be reassigned
// We can also leave the value of the variable undefined when using let keyword
// let age = 30;
// age = 31;

// // Variables declared with const keyword are immutable and it's not allowed to leave the value undefined
// // As a rule of thumb, it's recommended to use const keyword whenever possible and only use let keyword
// // when the variable needs to be mutable/reassignable.
// const birthYear = 1995;
// // const birthYear; throws an error!

// // var is an old way of creatign variables and its use should be avoided
// // variables declared by var keyword are mutable
// // but they have different scope when compared to variable declared with let keyword.
// var job = 'programmer';
// job = 'teacher';

// One can multilog variables
// now = 2037;
// const ageMiro = now - 1996;
// const ageNiko = now - 1995;
// console.log(ageNiko, ageMiro);

// // string concatenation
// const firstName = 'Niko';
// const lastName = 'Hujanen';
// console.log(firstName + ' ' + lastName);

// // assignment variables
// let x = 10 + 5; // 15
// x += 10; // 25
// x *= 4; // 100
// x++; // 101
// x--; // 100
// console.log(x);

// // comparison operators
// console.log(ageNiko > ageMiro); // true // other operators <, >, <=, >=

// const isFullAge = ageMiro >= 18;
// console.log(isFullAge);


// now = 2037;
// const ageMiro = now - 1996;
// const ageNiko = now - 1995;

// console.log(now - 1996 > now - 1995); // false

// console.log(25 - 10 - 5); // 10
// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10
// // subtraction has higher precedence than assignment
// // assignment is done right-to-left, hence both variable x and y have value 10
// console.log(x, y);

// // Grouping ( ... ) has the higher precedence of all operators
// const averageAge = (ageNiko + ageMiro) / 2;
// console.log(ageNiko, ageMiro);


// Lecture 17 strings and template literals
// const firstName = 'Niko';
// const job = 'Data Analyst';
// const birthYear = 1995
// const year = 2023;

// const niko = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'
// console.log(niko);

// // template filters
// const nikoNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(nikoNew);

// // strings with backticks
// console.log(`Also this works as a regular string!`);

// // multiline string with backticks:
// console.log(`this
// is
// a multiline
// string`
// );

// // Lecture 17 assignment
// const country = 'Finland'
// const continent = 'Europe';
// const population = 6;
// const language = 'Finnish'

// console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`);

// // Lecture 18  Taking Decisions: if / else Statements
// const age = 15;
// const isOldEnough = age >= 18;

// // else block is optional
// if (isOldEnough) {
//     console.log('Sarah can start driving license');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// };

// // if-else block is an instance of control structure

// const birthYear = 1995;

// // we need to declare century variable outside of the if-else structure because variables declared within code blocks are not accessible outside of the block!
// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// // Lecture 18 assignment
// const country = 'Finland';
// const population = 6;

// if (population > 33) {
//     console.log(`${country}'s population is above average`);
// } else {
//     console.log(`${country}'s population is ${33 - population} below average.`);
// }


// Lecture 20: type conversion and coersion

// type conversion
// console.log('asd')
// const inputYear = '1995'; //string
// console.log(Number(inputYear), inputYear); // convert string to number, original object is still string

// console.log(Number('Niko')); // NaN "not a number"
// console.log(typeof Nan); // number

// console.log(String(23), 23); // convert number to a string

// // type coercion
// console.log('I am ' + 23 + ' years old'); // + operator triggers type coersion and coerces 23 into a string so that we don't need to do it manually with String(23)
// console.log('23' - '10' - 3); // minus sign triggers a coercion into another direction, i.g. from string to number
// console.log('23' + '10' + 3); // 23103, with plus operators all become strings and they are concatenated
// console.log('23' * '2') // 46

// let n = '1' + 1; // '1' + '1' = 11
// n = n - 1; // 10 - 1 = 10
// console.log(n);

// Lecture 21 truthy and falsy values

// falsy value is such that will become false when converted into a boolean
// 5 falsy values 0, '', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Jonas')); // true
// console.log(Boolean({})); // true
// console.log(Boolean('')); // false

// const money = 0; // 0 becomes false, any other value true
// if (money) {
//     console.log("Don't spend it all ;)")
// } else {
//     console.log("You should get a job!")
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is undefined');
// }

// Lecture 22 equality operators: == vs. ===
// const age = '18'; // 18
// if (age === 18) console.log('You just became an adult (strict)');
// // loose equality operator performs type conversion meaning, e.g. string 18 and number 18 can be equal
// // Clean code should avoid loose equality comparison as it can cause bugs that are difficult to find
// if (age == 18) console.log('You just became an adult (loose)');

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) { // doesn't work with === operator without converting the prompt to number or comparing to string!
//     console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) { // else if block, can have as many as needed
//     console.log('7 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7.')
// }

// if (favorite !== 23) console.log('Why not 23?');

// Lecture 22 assignment
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// Lecture 24 Logical Operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive');
// // } else {
// //     console.log('Someone else should drive...')
// // }

// const isTired = false; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive...')
// }

// Coding Challenge #3
// const scoreDolphins = (100 + 112 + 120) / 3;
// const scoreKoalas = (100 + 112 + 120) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log('Koalas win the trophy');
// } else if (scoreKoalas < 100 && scoreDolphins < 100) {
//     console.log('Neither of the teams win.');
// } else {
//     console.log('Both win a trophy!')
// }

// lecture 26 switch statement
// const day = 'monday';

// switch (day) {
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup.');
//         break; // without break statement, also the next cases will be evaluated
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record video');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// // same with an if else statement
// if (day === 'monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup.');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record video');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!');
// }

// // assignment
// const language = 'finnish';

// switch (language) {
//     case 'chinese':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

// Lecture 27: statements and expressions
// expressions are such that produce a value, e.g. 3+4 or 1991, or true && false (leads to a boolean)
// statements do not produce a value but they are evaluated
// The distinction is important to understand because JS expects expressions and statements in different places.
// For example, we can use only expressions in a template strings.

// Lecture 28: conditional operator (ternary)
// const age = 15;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// // compare to the following if statement. More code and not so clean. Also we need to use let declaration
// // variables declared within a block are not accessible outside of the block
// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// // We can use ternany operator within a template literal as it's an expression
// // We cannot use if-else statement in a templated string as it's a statement!
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

// coding challenge #4
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

// console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`)

// lecture: 30. JavaScript Releases: ES5, ES6+ and ESNext