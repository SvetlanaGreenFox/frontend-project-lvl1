import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from './index.js';

export function startGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  askQuestion();

  function askQuestion() {
    const randomNumber = getRndInteger(0, 100);

    const result = checkPrime(randomNumber);

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    checkAnswer(result, answer, userName, askQuestion);
  }

  function checkPrime(a) {
    if (a > 2) {
      for (let i = 2; i < a; i++) {
        if (a % i === 0) {
          return 'no';
        }
      }

      return 'yes';
    }

    return 'no';
  }

}

export default startGame;
