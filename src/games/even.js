import { madeGame, getRndInteger } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (task) => {
  const expectedAnswer = checkEven(task);

  if (expectedAnswer) {
    return 'yes';
  } else {
    return 'no';
  }
}

const makeTask = () => {
  const randomNumber = getRndInteger(1, 100);
  const result = getCorrectAnswer(randomNumber);
  return [randomNumber, result];
}

const checkEven = number => number % 2 === 0;




const startGame = () => madeGame(task, makeTask);

export default startGame;
