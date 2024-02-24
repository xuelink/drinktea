#!/usr/bin/env node

const readline = require("readline");
const { version } = require("./package.json");

// Check if the user passed the --version flag
if (process.argv.includes("--version")) {
  console.log(`DrinkTea CLI version ${version}`);
  process.exit(0);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter tea name: ", (answer) => {
  console.log(`You are drinking ${answer} tea. Enjoy! ☕️`);
  rl.close();
});
