import gameFlow from '../src/index.js';
import { getRandomNumber } from '../src/random.js';
import { isPrimeNumber } from '../src/math.js';

const getNewQuestion = () => {
  const randomNumber = getRandomNumber(1, 100);
  const isRandomNumberPrime = isPrimeNumber(randomNumber);
  const correctAnswer = isRandomNumberPrime ? 'yes' : 'no';

  const question = `Question: ${randomNumber}`;

  return {
    question,
    correctAnswer,
  };
};

const primeGame = () => {
  const gameGuide = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameFlow(gameGuide, getNewQuestion);
};

export default primeGame;
