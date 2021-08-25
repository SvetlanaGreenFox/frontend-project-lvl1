import { madeGame, getRndInteger } from '../index.js';

const taskDescription = 'What is the result of the expression?';

const getCorrectAnswer = (firstValue, secondValue, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
  }

  return result;
};

const makeTask = () => {
  const number1 = getRndInteger(1, 20);
  const number2 = getRndInteger(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRndInteger(0, 2)];
  const task = `${number1} ${operator} ${number2}`;
  const result = getCorrectAnswer(number1, number2, operator).toString();

  return [task, result];
};

const startGame = () => madeGame(taskDescription, makeTask);

export default startGame;
