import runGame from '../index.js';
import getRndInteger from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const combinationNum = [];

  for (let i = 0; combinationNum.length <= length; i += step) {
    combinationNum.push(start + i * step);
  }

  return combinationNum;
};

const getGameData = () => {
  const start = getRndInteger(0, 5);
  const step = getRndInteger(1, 5);
  const length = getRndInteger(10, 15);
  const combinationNum = getProgression(start, step, length);
  const hiddenNumber = getRndInteger(0, combinationNum.length - 1);
  const correctAnswer = combinationNum[hiddenNumber].toString();
  combinationNum[hiddenNumber] = '..';
  const question = combinationNum.join(' ');

  return [question, correctAnswer];
};

const startGame = () => runGame(gameDescription, getGameData);

export default startGame;
