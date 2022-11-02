import gameFlow from '../src/index.js';
import { getRandomNumber, getRandomArrayItem } from '../src/random.js';

const getExpressionResult = (opA, opB, operator) => { // todo move to a dedicated module with math
  switch (operator) {
    case '+':
      return opA + opB;
    case '-':
      return opA - opB;
    case '*':
      return opA * opB;
    default:
      return null;
  }
};

const getNewQuestion = () => {
  const allowedOperators = ['+', '-', '*'];

  const randomA = getRandomNumber(1, 99);
  const randomB = getRandomNumber(1, 99);
  const randomOperator = getRandomArrayItem(allowedOperators);

  const correctAnswer = `${getExpressionResult(randomA, randomB, randomOperator)}`;

  const question = `Question: ${randomA} ${randomOperator} ${randomB}`;

  return {
    question,
    correctAnswer,
  };
};

const calcGame = () => {
  const gameGuide = 'What is the result of the expression?';

  gameFlow(gameGuide, getNewQuestion);
};

export default calcGame;
