import { madeGame } from '../index.js';
import getRndInteger from '../utils.js';

const taskDescription = 'What number is missing in the progression?';

const getGameData = () => {
  const combinationNum = [];
  const step = getRndInteger(2, 6);

  for (let i = getRndInteger(0, 5); i <= 40; i += step) {
    combinationNum.push(i);
  }

  const hiddenNumber = getRndInteger(0, combinationNum.length);
  const result = combinationNum[hiddenNumber];
  combinationNum[hiddenNumber] = '..';
  const task = combinationNum.join(' ');

  return [task, result.toString()];
};

const startGame = () => madeGame(taskDescription, getGameData);

export default startGame;
