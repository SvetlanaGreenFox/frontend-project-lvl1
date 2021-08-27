import readlineSync from 'readline-sync';

export const getRndInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const checkAnswer = (answer, expectedAnswer) => answer === expectedAnswer;

export const madeGame = (taskDescription, makeTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskDescription);

  const countRounds = 3;

  for (let i = 0; i < countRounds; i += 1) {
    const expression = makeTask();
    console.log(expression);
    const output = expression[0];
    const correctAnswer = expression[1];
    console.log(`Question: ${output}`);
    const answer = readlineSync.question('Your answer: ');
    const check = checkAnswer(correctAnswer, answer);

    if (check) {
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
