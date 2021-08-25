import readlineSync from 'readline-sync';

export const getRndInteger = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const checkAnswer = (answer, expectedAnswer) => answer === expectedAnswer;

const askQuestion = (func, userName, count) => {
  count += 1;
  const expression = func();
  console.log(expression);
  const output = expression[0];
  const correctAnswer = expression[1];
  const answer = readlineSync.question(`Question: ${output}\nYour answer: `);
  const check = checkAnswer(correctAnswer, answer);

  if (check) {
    console.log('Correct!');
    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      askQuestion(func, userName, count);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  }
};

export const madeGame = (taskDescription, makeTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(taskDescription);
  const count = 0;

  askQuestion(makeTask, userName, count);
};

for (let count = 0; count < 3; count += 1) {
  askQuestion
}
