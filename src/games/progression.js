import { madeGame, getRndInteger } from '../index.js';

const taskDescription = 'What number is missing in the progression?';

const makeTask = () => {
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

const startGame = () => madeGame(taskDescription, makeTask);

export default startGame;
