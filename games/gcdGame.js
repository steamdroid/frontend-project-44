import gameFlow from '../src/index.js';
import { getRandomNumber } from '../src/random.js';
import { getGCD } from '../src/math.js';

const getNewQuestion = () => {
  const randomA = getRandomNumber(1, 100);
  const randomB = getRandomNumber(1, 100);

  const correctAnswer = `${getGCD(randomA, randomB)}`;

  const question = `Question: ${randomA} ${randomB}`;

  return {
    question,
    correctAnswer,
  };
};

const gcdGame = () => {
  const gameGuide = 'Find the greatest common divisor of given numbers.';

  gameFlow(gameGuide, getNewQuestion);
};

export default gcdGame;
