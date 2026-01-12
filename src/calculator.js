/**
 * A simple calculator module that supports basic arithmetic operations.
 * @module calculator
 */

/**
 * Adds two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 * @throws {TypeError} If either parameter is not a number
 */
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (!isFinite(a) || !isFinite(b)) {
    throw new TypeError('Arguments must be finite numbers');
  }
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - The number to subtract from
 * @param {number} b - The number to subtract
 * @returns {number} The difference of a and b
 * @throws {TypeError} If either parameter is not a number
 */
function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (!isFinite(a) || !isFinite(b)) {
    throw new TypeError('Arguments must be finite numbers');
  }
  return a - b;
}

/**
 * Multiplies two numbers together.
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The product of a and b
 * @throws {TypeError} If either parameter is not a number
 */
function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (!isFinite(a) || !isFinite(b)) {
    throw new TypeError('Arguments must be finite numbers');
  }
  return a * b;
}

/**
 * Divides the first number by the second.
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The quotient of a and b
 * @throws {TypeError} If either parameter is not a number
 * @throws {Error} If attempting to divide by zero
 */
function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (!isFinite(a) || !isFinite(b)) {
    throw new TypeError('Arguments must be finite numbers');
  }
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Main calculator function that performs operations based on the operator.
 * @param {number} a - The first operand
 * @param {string} operator - The operation to perform (+, -, *, /)
 * @param {number} b - The second operand
 * @returns {number} The result of the operation
 * @throws {TypeError} If operands are not numbers or operator is not a string
 * @throws {Error} If operator is not supported or division by zero
 */
function calculate(a, operator, b) {
  if (typeof operator !== 'string') {
    throw new TypeError('Operator must be a string');
  }

  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error(`Unsupported operator: ${operator}. Use +, -, *, or /`);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate
};
