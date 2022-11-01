import readlineSync from 'readline-sync';
import welcomePlayer from './welcomePlayer.js';

const gameFlow = (gameGuide, questionCb) => {
  let isAllAnswersCorrect = true;

  const correctAnswersToWin = 3;
  let correctAnswers = 0;

  const playerName = welcomePlayer();

  console.log(gameGuide);

  while (isAllAnswersCorrect && correctAnswers < correctAnswersToWin) {
    const { question, correctAnswer } = questionCb();

    console.log(question);
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

export default gameFlow;
