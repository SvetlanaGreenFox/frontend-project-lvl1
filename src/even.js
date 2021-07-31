import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from './index.js';

export function startGame() {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hi, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    askQuestion();

    function askQuestion() {
        let randomNumber = getRndInteger(1, 100);
        let result = checkEven(randomNumber);

        console.log(`Question: ${randomNumber}`);

        const answer = readlineSync.question('Your answer: ');

        checkAnswer(result, answer, userName, askQuestion);
    }

    function checkEven(num) {
        if (num % 2 === 0) {
            return 'yes';
        } else {
            return 'no';
        }
    }
}

export default startGame;

