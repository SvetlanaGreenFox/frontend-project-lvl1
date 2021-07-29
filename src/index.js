import readlineSync from 'readline-sync';

const welcome = () => {
    const userName = readlineSync.question('May I have your name?');
    console.log('Welcome to the Brain Games!');
    console.log(`Hi, ${userName}!`);
}

