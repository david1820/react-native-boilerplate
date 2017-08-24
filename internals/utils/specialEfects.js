/* eslint-disable */
const chalk = require('chalk');
const readline = require('readline');
function addCheckMark(callback) {
  process.stdout.write(chalk.green('✓✓✓'));
  callback();
}
function theBad(message, callback) {
  process.stdout.write(chalk.red(` Not Very Effective -> ${message}`));
  callback();
}
function animateProgress(message, amountOfDots) {
  if (typeof amountOfDots !== 'number') {
    amountOfDots = 26;
  }
  let i = 0;
  return setInterval(() => {
    readline.cursorTo(process.stdout, 0);
    i = (i + 1) % (amountOfDots + 1);
    const dots = new Array(i + 1).join('▄ █ ▄ █');
    process.stdout.write(`${chalk.bgBlue(message)} ${chalk.blue(dots)}`);
  }, 500);
}
module.exports = { addCheckMark, animateProgress, theBad };