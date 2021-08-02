import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from '../src/index.js';

export function startGame() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hi, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  function askQuestion() {
    const randomNumber = getRndInteger(0, 100);

    function checkPrime(a) {
      if (a > 2) {
        for (let i = 2; i < a; i += 1) {
          if (a % i === 0) {
            return 'no';
          }
        }

        return 'yes';
      }

      return 'no';
    }

    const result = checkPrime(randomNumber);

    console.log(`Question: ${randomNumber}`);

    const answer = readlineSync.question('Your answer: ');

    checkAnswer(result, answer, userName, askQuestion);
  }

  askQuestion();
}

export default startGame;