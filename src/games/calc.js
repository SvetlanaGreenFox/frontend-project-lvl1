import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../index.js';

let count = 0;

const calculate = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '+':
      return (firstValue + secondValue);
    case '-':
      return (firstValue - secondValue);
    case '*':
      return (firstValue * secondValue);
  }
}

const askQuestion = (userName) => {
  const randomNumberOne = getRndInteger(1, 20);
  const randomNumberTwo = getRndInteger(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRndInteger(0, 2)];

  const result = calculate(randomNumberOne, randomNumberTwo, operator).toString();

  console.log(`Question: ${randomNumberOne} ${operator} ${randomNumberTwo}`);

  const answer = readlineSync.question('Your answer: ');

  count += 1;

  checkAnswer(result, answer, userName, askQuestion, count);
}

export const createGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  askQuestion(userName);
}

export default createGame;
