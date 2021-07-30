import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name?');

export function startGame() {
    let count = 0;

    function checkEven(num) {
        if (num % 2 === 0) {
            return 'yes';
        } else {
            return 'no';
        }
    }

    function askQuestion() {
        let randomNumber = getRndInteger(1, 100);
        let result = checkEven(randomNumber);
        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question('Your answer: ');
        checkAnswer(result, answer);
    }

    function checkAnswer(number, answer) {
        if (number == answer) {
            console.log('Correct!');
            count += 1;
            if (count === 3) {
                console.log(`Congratulations, ${userName}!`);
            } else {
                askQuestion();
            }

        } else {
            writeError(number, answer);
        }

    }

    function writeError(result, answer) {
        if (result != answer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
            // if (number % 2 === 0) {
            //     console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes.\nLet's try again, ${userName}!`);
            // } else {
            //     console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
            // }
        }
        // else if (answer === 'yes') {
        //     console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
        // } else if (answer === 'no') {
        //     console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
        // }
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    askQuestion();
}

export default userName;

