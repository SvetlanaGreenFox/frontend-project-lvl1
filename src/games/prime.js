import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

let count = 0;

const checkPrime = (value) => {
  if (value > 2) {
    for (let i = 2; i < value; i += 1) {
      if (value % i === 0) {
        return 'no';
      }
    }

    return 'yes';
  }

  return 'no';
}

const askQuestion = (userName) => {
  const randomNumber = getRndInteger(0, 100);
  const result = checkPrime(randomNumber);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  count += 1;

  checkAnswer(result, answer, userName, askQuestion, count);
}

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  askQuestion(userName);
}

export default createGame;
