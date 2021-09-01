import { madeGame } from '../index.js';
import getRndInteger from '../utils.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const getGameData = () => {
  const randomNumber = getRndInteger(1, 100);
  const result = getCorrectAnswer(randomNumber).toString();
  return [randomNumber, result];
};

const startGame = () => madeGame(taskDescription, getGameData);

export default startGame;
