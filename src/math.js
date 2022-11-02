export const getExpressionResult = (opA, opB, operator) => {
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

export const getGCD = (a, b) => {
  let numerator = (a > b) ? a : b;
  let denominator = (a > b) ? b : a;

  while (denominator !== 0) {
    const nextNumerator = denominator;
    denominator = numerator % denominator;
    numerator = nextNumerator;
  }

  return numerator;
};

export const getArithmeticProgression = (start, step, length = 10) => {
  const progression = [];
  let currentValue = start;

  while (progression.length < length) {
    progression.push(currentValue);
    currentValue += step;
  }

  return progression;
};

export const isPrimeNumber = (number) => {
  if (number === 1) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  for (let i = 3; i < (number - 1); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
