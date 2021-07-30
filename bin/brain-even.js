#!/usr/bin/env node

import userName, { startGame } from '../src/even.js';

console.log('Welcome to Brain Games!');

console.log(`Hi, ${userName}!`);

console.log('Answer "yes" if number is even, otherwise answer "no".');

startGame();

