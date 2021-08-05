import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../src/index.js';

export function createGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  function askQuestion() {
    const randomNumber = getRndInteger(1, 100);

    function checkEven(num) {
      if (num % 2 === 0) {
        return 'yes';
      }
      return 'no';
    }

    const result = checkEven(randomNumber);
    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    checkAnswer(result, answer, userName, askQuestion);
  }

  askQuestion();
}

export default createGame;
