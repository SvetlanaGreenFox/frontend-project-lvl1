import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name?');

export function startGame() {
    let count = 0;

    function askQuestion() {

        const randomNumberOne = getRndInteger(1, 20);
        const randomNumberTwo = getRndInteger(1, 20);
        const arrOperators = ['+', '-', '*'];
        const operator = arrOperators[getRndInteger(0, 2)];
        const result = calculate(randomNumberOne, randomNumberTwo, operator);

        console.log(`Question: ${randomNumberOne} ${operator} ${randomNumberTwo}`);

        const answer = readlineSync.question('Your answer: ');

        checkAnswer(result, answer);
    }

    function checkAnswer(result, answer) {
        if (result == answer) {
            console.log('Correct!');
            count += 1;
            if (count === 3) {
                console.log(`Congratulations, ${userName}!`);
            } else {
                askQuestion();
            }

        } else {
            writeError(result, answer);
        }

    }

    function writeError(result, answer) {
        if (result != answer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
        }
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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

    function checkCounter() {
        let count = 0;

    }

    askQuestion();
}

export default userName;
