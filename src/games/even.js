import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;

  const askQuestion = () => {
    const randomNumber = getRndInteger(1, 100);

    const checkEven = (num) => {
      if (num % 2 === 0) {
        return 'yes';
      }
      return 'no';
    }

    const result = checkEven(randomNumber);
    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    count += 1;
    checkAnswer(result, answer, userName, askQuestion, count);
  }

  askQuestion();
}

export default createGame;
