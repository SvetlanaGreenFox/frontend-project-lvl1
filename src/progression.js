import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from './index.js';

export function startGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);
  console.log('What number is missing in the progression?');

  askQuestion();

  function askQuestion() {

    let arr = [];

    for (let i = getRndInteger(0, 5); i <= 60; i += getRndInteger(2, 6)) {
      arr.push(i);
    }

    let hiddenNumber = getRndInteger(0, arr.length);

    let result = arr[hiddenNumber];
    console.log(result);
    arr[hiddenNumber] = '...';

    let newArr = arr.join(' ');

    console.log(`Question: ${newArr}`);

    const answer = readlineSync.question('Your answer: ');

    checkAnswer(result, answer, userName, askQuestion);
  }

}

export default startGame;