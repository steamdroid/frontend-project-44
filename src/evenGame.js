import readlineSync from 'readline-sync';
import welcomePlayer from './welcomePlayer.js';
import getRandomNumber from './randomNumber.js';

const evenGame = () => {
  let isAllAnswersCorrect = true;

  const correctAnswersToWin = 3;
  let correctAnswers = 0;

  const playerName = welcomePlayer();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (isAllAnswersCorrect && correctAnswers < correctAnswersToWin) {
    const randomNumber = getRandomNumber(1, 30);
    const isRandomNumberEven = (randomNumber % 2) === 0;
    const correctAnswer = isRandomNumberEven ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      isAllAnswersCorrect = false;
    }
  }

  if (isAllAnswersCorrect) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default evenGame;
