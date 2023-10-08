/* 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

const numbers = '1 9 3 4 -5';

function highAndLow(numbers) {
  const numbersArray = numbers.split(' ');

  return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`;
}

// function highAndLow(numbers) {
//   const result = [];
//   const numbersArray = numbers.split(' ').map((number) => {
//     return parseInt(number);
//   });

//   // for (let i = 0; i < numbersArray.length; i++) {
//   //   numbersArray[i] = parseInt(numbersArray[i]);
//   // }

//   result.push(Math.max(...numbersArray), Math.min(...numbersArray));
//   return result.join(' ');
// }

console.log(highAndLow(numbers));
