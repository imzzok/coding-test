const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const H = parseInt(input[0]);
const M = parseInt(input[1]);

let alarmH = H;
let alarmM = M - 45;

if (alarmM < 0) {
  alarmH = H - 1;
  alarmM += 60;
}

if (alarmH < 0) {
  alarmH += 24;
}

console.log(alarmH + ' ' + alarmM);