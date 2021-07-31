export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let count = 0;

export function checkAnswer(result, answer, name, func) {
    if (result == answer) {
        console.log('Correct!');
        count += 1;
        if (count === 3) {
            console.log(`Congratulations, ${name}!`);
        } else {
            func();
        }

    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
    }
}