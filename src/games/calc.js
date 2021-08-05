import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let count = 0;

  const askQuestion = () => {
    const randomNumberOne = getRndInteger(1, 20);
    const randomNumberTwo = getRndInteger(1, 20);
    const arrOperators = ['+', '-', '*'];
    const operator = arrOperators[getRndInteger(0, 2)];

    const calculate = (a, b, c) => {
      if (c === '+') {
        return (a + b);
      }
      if (c === '-') {
        return (a - b);
      }
      return (a * b);
    }

    const result = calculate(randomNumberOne, randomNumberTwo, operator).toString();

    console.log(`Question: ${randomNumberOne} ${operator} ${randomNumberTwo}`);

    const answer = readlineSync.question('Your answer: ');

    count += 1;

    checkAnswer(result, answer, userName, askQuestion, count);
  }

  askQuestion();
}

export default createGame;
