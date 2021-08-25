import { madeGame, getRndInteger } from '../index.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEven = (number) => number % 2 === 0;

const getCorrectAnswer = (task) => {
  const expectedAnswer = checkEven(task);

  if (expectedAnswer) {
    return 'yes';
  }

  return 'no';
};

const makeTask = () => {
  const randomNumber = getRndInteger(1, 100);
  const result = getCorrectAnswer(randomNumber);
  return [randomNumber, result];
};

const startGame = () => madeGame(taskDescription, makeTask);

export default startGame;
