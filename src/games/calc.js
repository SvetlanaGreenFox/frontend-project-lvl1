import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

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

    checkAnswer(result, answer, userName, askQuestion);
  }

  askQuestion();
}

export default createGame;
