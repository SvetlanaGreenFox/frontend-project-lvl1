import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from './index.js';

export function startGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);
  console.log('What number is missing in the progression?');

  function askQuestion() {
    const arr = [];

    const step = getRndInteger(2, 6);

    for (let i = getRndInteger(0, 5); i <= 40; i += step) {
      arr.push(i);
    }

    const hiddenNumber = getRndInteger(0, arr.length);

    const result = arr[hiddenNumber];

    arr[hiddenNumber] = '...';

    const newArr = arr.join(' ');

    console.log(`Question: ${newArr}`);

    const answer = readlineSync.question('Your answer: ');

    checkAnswer(result, answer, userName, askQuestion);
  }

  askQuestion();
}

export default startGame;
