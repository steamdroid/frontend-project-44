import gameFlow from '../src/index.js';
import { getRandomNumber, getRandomArrayIndex } from '../src/random.js';
import { getArithmeticProgression } from '../src/math.js';

const getNewQuestion = () => {
  const start = getRandomNumber(1, 15);
  const step = getRandomNumber(2, 10);

  const progression = getArithmeticProgression(start, step);
  const hideIndex = getRandomArrayIndex(progression);

  const correctAnswer = `${progression[hideIndex]}`;
  progression[hideIndex] = '..';

  const question = `Question: ${progression.join(' ')}`;

  return {
    question,
    correctAnswer,
  };
};

const progressionGame = () => {
  const gameGuide = 'What number is missing in the progression?';

  gameFlow(gameGuide, getNewQuestion);
};

export default progressionGame;
