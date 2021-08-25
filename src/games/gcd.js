import { madeGame, getRndInteger } from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (firstValue, secondValue) => {
  if (!secondValue) {
    return firstValue;
  }

  return gcd(secondValue, firstValue % secondValue);
};

const makeTask = () => {
  const number1 = getRndInteger(1, 100);
  const number2 = getRndInteger(1, 100);
  const task = `${number1} ${number2}`;
  const result = gcd(number1, number2).toString();

  return [task, result];
}

const startGame = () => madeGame(task, makeTask);

export default startGame;
