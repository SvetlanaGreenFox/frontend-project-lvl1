import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const gcd = (a, b) => {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  };

  const askQuestion = () => {
    const randomNumberOne = getRndInteger(1, 100);
    const randomNumberTwo = getRndInteger(1, 100);

    const result = gcd(randomNumberOne, randomNumberTwo).toString();

    console.log(`Question: ${randomNumberOne} ${randomNumberTwo}`);

    const answer = readlineSync.question('Your answer: ');

    checkAnswer(result, answer, userName, askQuestion);
  }

  askQuestion();
}

export default createGame;
