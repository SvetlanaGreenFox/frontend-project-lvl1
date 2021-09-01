import { madeGame } from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'What is the result of the expression?';

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

const getGameData = () => {
  const number1 = getRndInteger(1, 20);
  const number2 = getRndInteger(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRndInteger(0, 2)];
  const task = `${number1} ${operator} ${number2}`;
  const result = getCorrectAnswer(number1, number2, operator).toString();

  return [task, result];
};

const startGame = () => madeGame(gameDescription, getGameData);

export default startGame;
