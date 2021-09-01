import { madeGame } from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (firstValue, secondValue) => {
  if (!secondValue) {
    return firstValue;
  }

  return gcd(secondValue, firstValue % secondValue);
};

const getGameData = () => {
  const number1 = getRndInteger(1, 100);
  const number2 = getRndInteger(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2).toString();

  return [question, correctAnswer];
};

const startGame = () => madeGame(gameDescription, getGameData);

export default startGame;
