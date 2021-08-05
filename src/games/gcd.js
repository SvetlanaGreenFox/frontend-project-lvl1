import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

let count = 0;

const gcd = (firstValue, secondValue) => {
  if (!secondValue) {
    return firstValue;
  }

  return gcd(secondValue, firstValue % secondValue);
};

const askQuestion = (userName) => {
  const randomNumberOne = getRndInteger(1, 100);
  const randomNumberTwo = getRndInteger(1, 100);

  const result = gcd(randomNumberOne, randomNumberTwo).toString();

  console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);

  const answer = readlineSync.question('Your answer: ');

  count += 1;
  checkAnswer(result, answer, userName, askQuestion, count);
}

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  askQuestion(userName);
}

export default createGame;
