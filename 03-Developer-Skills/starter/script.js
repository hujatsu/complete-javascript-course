// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem
// // - What is temp amplitude: Answer: difference between the highest and lowest temperature
// // - How to compute max and min temperatures?
// // - what's a sensor error and what to do when encountered?

// // 2) Breaking the task into sub-problems:
// // - How to ignore errors?
// // - Find max value in temp array
// // - Find min value in temp array
// // - Subtract min from max and return the value

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// // PROBLEM 2:
// //  Function should now receive 2 arrays of temps

// // 1) Understanding the problem
// // - With 2 arrays should we implement the functionality twice? NO, just merge the arrays

// // 2) sub-problems:
// // - merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew(temperatures, [1, 3, 7, 99]);
// console.log(amplitudeNew);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) FIX:
//     value: Number(prompt('Degrees celsius:')),
//   };
//   //   B) FIND
//   //   console.log(measurement);
//   //   console.table(measurement);
//   //   console.log(measurement.value);12
//   //   console.error(measurement.value);
//   //   console.warn(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) Identify
// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);

//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // A) Identify
// console.log(amplitudeBug);

// Coding challenge

// 1) understand the problem
// - do we need to make this work for an array of arbitrary length?
// - In which order do we print the temperatures
// - Do days always match the index?
// - Does the print statement need both start and end with ...? A: yes
// - Is the output just a single string? A: yes

//  2) divide into sub-problems:
// - transform each array element to a substring of the output
// - loop over the full array to construct the full output
// - log the output to console

// const printForecast = function (arr) {
//   let output = '...';
//   for (let i = 0; i < arr.length; i++) {
//     output += ` ${arr[i]}°C in ${i + 1} days ...`;
//   }
//   console.log(output);
// };

// printForecast([12, 5, -5, 0, 4]);
