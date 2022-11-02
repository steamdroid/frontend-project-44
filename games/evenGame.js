import gameFlow from '../src/index.js';
import { getRandomNumber } from '../src/random.js';

const getNewQuestion = () => {
  const randomNumber = getRandomNumber(1, 30);
  const isRandomNumberEven = (randomNumber % 2) === 0;
  const correctAnswer = isRandomNumberEven ? 'yes' : 'no';

  const question = `Question: ${randomNumber}`;

  return {
    question,
    correctAnswer,
  };
};

const evenGame = () => {
  const gameGuide = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameFlow(gameGuide, getNewQuestion);
};

export default evenGame;
