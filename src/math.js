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

export const getArithmeticSequence = (start, step, length = 10) => {
  const sequence = [];
  let currentValue = start;

  while (sequence.length < length) {
    sequence.push(currentValue);
    currentValue += step;
  }

  return sequence;
};
