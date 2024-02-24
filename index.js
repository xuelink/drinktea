#!/usr/bin/env node

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter tea name: ", (answer) => {
  console.log(`You are drinking ${answer} tea. Enjoy! ☕️`);
  rl.close();
});
