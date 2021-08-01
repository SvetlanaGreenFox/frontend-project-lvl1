import readlineSync from 'readline-sync';
import { getRndInteger, checkAnswer } from './index.js';

export function startGame() {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hi, ${userName}!`);
    console.log('What is the result of the expression?');

    askQuestion();

    function askQuestion() {
        const randomNumberOne = getRndInteger(1, 20);
        const randomNumberTwo = getRndInteger(1, 20);
        const arrOperators = ['+', '-', '*'];
        const operator = arrOperators[getRndInteger(0, 2)];
        const result = calculate(randomNumberOne, randomNumberTwo, operator);

        console.log(`Question: ${randomNumberOne} ${operator} ${randomNumberTwo}`);

        const answer = readlineSync.question('Your answer: ');

        checkAnswer(result, answer, userName, askQuestion);
    }

    function calculate(a, b, c) {
        if (c === '+') {
            return (a + b);
        } else if (c === '-') {
            return (a - b);
        } else if (c === '*') {
            return (a * b);
        }
    }

}

export default startGame;
