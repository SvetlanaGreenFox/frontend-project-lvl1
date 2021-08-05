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
  const number1 = getRndInteger(1, 100);
  const number2 = getRndInteger(1, 100);

  const result = gcd(number1, number2).toString();

  console.log(`Question: ${number1} ${number2}`);

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
