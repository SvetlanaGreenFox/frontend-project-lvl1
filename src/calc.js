import readlinSync from 'readline-sync';

export function startGame() {
    let count = 0;

    function askQuestion() {
        let randomNumberOne = getRndInteger(1, 100);
        let randomNumberTwo = getRndInteger(1, 100);
        let sumOfNumbers = randomNumberOne + randomNumberTwo;

        console.log(`Question: ${randomNumberOne} + ${randomNumberTwo}`);

        const answer = readlineSync.question('Your answer: ');

        checkAnswer(sumOfNumbers, answer);
    }

    function checkAnswer(sum, answer) {
        if (sum === answer) {
            console.log('Correct!');
            count += 1;
            if (count === 3) {
                console.log(`Congratulations, ${userName}!`);
            } else {
                askQuestion();
            }

        } else {
            writeError(sum, answer);
        }

    }

    function writeError(sum, answer) {
        if (sum != answer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        }
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    askQuestion();
}
