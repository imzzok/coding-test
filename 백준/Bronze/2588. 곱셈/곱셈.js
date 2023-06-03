const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

const thirdDigit = Math.floor(b / 100);
const secondDigit = Math.floor((b % 100) / 10);
const firstDigit = b % 10;

const result1 = a * firstDigit;
const result2 = a * secondDigit;
const result3 = a * thirdDigit;
const result4 = a * b;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);