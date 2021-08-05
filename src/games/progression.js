import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

let count = 0;

const askQuestion = (userName) => {
  const combinationNum = [];

  const step = getRndInteger(2, 6);

  for (let i = getRndInteger(0, 5); i <= 40; i += step) {
    combinationNum.push(i);
  }

  const hiddenNumber = getRndInteger(0, combinationNum.length);

  const result = combinationNum[hiddenNumber].toString();

  combinationNum[hiddenNumber] = '..';

  const convertedComb = combinationNum.join(' ');

  console.log(`Question: ${convertedComb}`);

  const answer = readlineSync.question('Your answer: ');

  count += 1;

  checkAnswer(result, answer, userName, askQuestion, count);
}

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  askQuestion(userName);
}

export default createGame;
