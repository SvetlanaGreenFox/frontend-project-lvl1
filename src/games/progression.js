import { madeGame } from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const combinationNum = [];
  const limit = start + length * step;

  for (let i = start; i < limit; i += step) {
    combinationNum.push(i);
  }

  return combinationNum;
};

const getGameData = () => {
  const combinationNum = getProgression(3, getRndInteger(0, 5), getRndInteger(10, 15));

  const hiddenNumber = getRndInteger(0, combinationNum.length);
  const correctAnswer = combinationNum[hiddenNumber].toString();
  combinationNum[hiddenNumber] = '..';
  const question = combinationNum.join(' ');

  return [question, correctAnswer];
};

const startGame = () => madeGame(gameDescription, getGameData);

export default startGame;
