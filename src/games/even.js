import { madeGame } from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (question) => {
  const expectedAnswer = isEven(question);

  if (expectedAnswer) {
    return 'yes';
  }

  return 'no';
};

const getGameData = () => {
  const randomNumber = getRndInteger(1, 100);
  const correctAnswer = getCorrectAnswer(randomNumber);
  return [randomNumber, correctAnswer];
};

const startGame = () => madeGame(gameDescription, getGameData);

export default startGame;
