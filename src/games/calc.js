import { madeGame } from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const calculateAnswer = (firstValue, secondValue, operator) => {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
  }
};

const getGameData = () => {
  const number1 = getRndInteger(1, 20);
  const number2 = getRndInteger(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRndInteger(0, operators.length - 1)];
  const task = `${number1} ${operator} ${number2}`;
  const result = calculateAnswer(number1, number2, operator).toString();

  return [task, result];
};

const startGame = () => madeGame(gameDescription, getGameData);

export default startGame;
