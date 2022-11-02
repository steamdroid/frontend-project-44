const getExpressionResult = (opA, opB, operator) => {
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

export default getExpressionResult;
