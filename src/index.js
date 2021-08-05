export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const checkAnswer = (result, answer, name, func, count) => {
  if (result === answer) {
    console.log('Correct!');
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
    } else {
      func();
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
  }
}
