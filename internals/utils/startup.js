/* eslint-disable */
const shell = require('shelljs');
const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const { addCheckMark, animateProgress, theBad } = require('./specialEfects');
const readline = require('readline');
process.stdin.resume();
process.stdin.setEncoding('utf8');
let interval = animateProgress('Apropieandote del repo');
process.stdout.write('Apropieandote del repo');
function cleanRepo(callback) {
  shell.rm('-rf', '.git/');
  setTimeout(() => addCheckMark(callback), 3000);
}
function initGit(callback) {
  exec('git init && git add . && git commit -m "Initial commit"', addCheckMark.bind(null, callback));
}
function installDepsCallback(error) {
  clearInterval(interval);
  process.stdout.write('\n\n');
  if (error) {
    theBad(error);
    process.stdout.write('\n');
    process.exit(1);
  }
  function deleteFileInCurrentDir(file, callback) {
    fs.unlink(path.join(__dirname, file), callback);
  }
  deleteFileInCurrentDir('startup.js', () => {
    interval = animateProgress('Creando "tu" nuevo repo');
    process.stdout.write('Creando "tu" nuevo repo');
    initGit(() => {
      setTimeout(() => clearInterval(interval), 1000);
      process.stdout.write('\n♦♦♦The End♦♦♦\n');
      process.exit(0);
    });
  });
}
function installDeps() {
  exec('npm install', addCheckMark.bind(null, installDepsCallback));
}
cleanRepo(() => {
  clearInterval(interval);
  process.stdout.write('\ndependencies...');
  setTimeout(() => {
    readline.cursorTo(process.stdout, 0);
    interval = animateProgress('dependencies...');
  }, 500);
  installDeps();
});