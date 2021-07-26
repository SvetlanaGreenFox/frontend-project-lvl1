import readlineSync from 'readline-sync';

//Приветствие
export const userName = readlineSync.question('May I have your name?');


//Поиграем
export function startGame() {
    let count = 0;

    function askQuestion() {
        let randomNumber = getRndInteger(1, 100);
        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question('Your answer: ');
        checkAnswer(randomNumber, answer);
    }

    function checkAnswer(number, answer) {
        if (number % 2 === 0 && answer === 'yes' || number % 2 != 0 && answer === 'no') {
            console.log('Correct!');
            count += 1;
            if (count === 3) {
                console.log(`Congratulations, ${userName}!`);
            } else {
                askQuestion();
            }

        } else {
            switch (answer) {
                case 'yes':
                    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);

                case 'no':
                    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);

                default:
                    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes or no'.\nLet's try again, ${userName}!`);
            }
        }

    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    askQuestion();
}

