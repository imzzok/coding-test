const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const N = parseInt(line);

  for (let i = 1; i <= 9; i++) {
    const result = N * i;
    console.log(`${N} * ${i} = ${result}`);
  }

  rl.close();
});