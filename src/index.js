import readlineSync from 'readline-sync';

export const madeGame = (taskDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskDescription);

  const countRounds = 3;

  for (let i = 0; i < countRounds; i += 1) {
    const gameData = getGameData();
    const output = gameData[0];
    const correctAnswer = gameData[1];
    console.log(`Question: ${output}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
  }
};
