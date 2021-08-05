import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const askQuestion = () => {
    const arr = [];

    const step = getRndInteger(2, 6);

    for (let i = getRndInteger(0, 5); i <= 40; i += step) {
      arr.push(i);
    }

    const hiddenNumber = getRndInteger(0, arr.length);

    const result = arr[hiddenNumber].toString();

    arr[hiddenNumber] = '..';

    const newArr = arr.join(' ');

    console.log(`Question: ${newArr}`);

    const answer = readlineSync.question('Your answer: ');

    checkAnswer(result, answer, userName, askQuestion);
  }

  askQuestion();
}

export default createGame;