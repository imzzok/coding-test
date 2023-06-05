const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const year = parseInt(input);

  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(1); // 윤년
  } else {
    console.log(0); // 윤년 아님
  }

  rl.close();
});