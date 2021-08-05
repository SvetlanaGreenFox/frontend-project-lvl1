import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let count = 0;

  const askQuestion = () => {
    const randomNumber = getRndInteger(0, 100);

    const checkPrime = (a) => {
      if (a > 2) {
        for (let i = 2; i < a; i += 1) {
          if (a % i === 0) {
            return 'no';
          }
        }

        return 'yes';
      }

      return 'no';
    }

    const result = checkPrime(randomNumber);

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    count += 1;

    checkAnswer(result, answer, userName, askQuestion, count);
  }

  askQuestion();
}

export default createGame;
