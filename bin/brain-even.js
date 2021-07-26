#!/usr/bin/env node

import { userName, startGame } from '../src/even.js';

console.log('Welcome to the Brain Games!');

console.log(`Hi, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

//функция запуска игры

startGame();