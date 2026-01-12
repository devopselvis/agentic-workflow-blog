/**
 * Calculator module providing basic arithmetic operations
 * @module calculator
 */

// ============================================================================
// ISOLATED VALIDATION FUNCTIONS
// ============================================================================

/**
 * Validates that a value is a number
 * @private
 * @param {*} value - The value to validate
 * @param {string} paramName - The parameter name for error messages
 * @throws {TypeError} If value is not a number
 */
function validateNumber(value, paramName) {
  if (typeof value !== 'number') {
    throw new TypeError(`${paramName} must be a number`);
  }
}

/**
 * Validates that two values are numbers
 * @private
 * @param {*} a - The first value to validate
 * @param {*} b - The second value to validate
 * @throws {TypeError} If either argument is not a number
 */
function validateTwoNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
}

/**
 * Validates that a divisor is not zero
 * @private
 * @param {number} divisor - The divisor to validate
 * @throws {Error} If divisor is zero (including -0)
 */
function validateNonZeroDivisor(divisor) {
  if (divisor === 0) {
    throw new Error('Division by zero is not allowed');
  }
}

// ============================================================================
// ISOLATED ARITHMETIC FUNCTIONS
// ============================================================================

/**
 * Pure addition operation (no validation)
 * @private
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 */
function addOperation(a, b) {
  return a + b;
}

/**
 * Pure subtraction operation (no validation)
 * @private
 * @param {number} a - The number to subtract from
 * @param {number} b - The number to subtract
 * @returns {number} The difference of a and b
 */
function subtractOperation(a, b) {
  return a - b;
}

/**
 * Pure multiplication operation (no validation)
 * @private
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The product of a and b
 */
function multiplyOperation(a, b) {
  return a * b;
}

/**
 * Pure division operation (no validation)
 * @private
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The quotient of a and b
 */
function divideOperation(a, b) {
  return a / b;
}

// ============================================================================
// PUBLIC API FUNCTIONS (Composition of validation + operations)
// ============================================================================

/**
 * Adds two numbers together
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 * @throws {TypeError} If arguments are not numbers
 */
export function add(a, b) {
  validateTwoNumbers(a, b);
  return addOperation(a, b);
}

/**
 * Subtracts the second number from the first
 * @param {number} a - The number to subtract from
 * @param {number} b - The number to subtract
 * @returns {number} The difference of a and b
 * @throws {TypeError} If arguments are not numbers
 */
export function subtract(a, b) {
  validateTwoNumbers(a, b);
  return subtractOperation(a, b);
}

/**
 * Multiplies two numbers together
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The product of a and b
 * @throws {TypeError} If arguments are not numbers
 */
export function multiply(a, b) {
  validateTwoNumbers(a, b);
  return multiplyOperation(a, b);
}

/**
 * Divides the first number by the second
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The quotient of a and b
 * @throws {TypeError} If arguments are not numbers
 * @throws {Error} If divisor is zero
 */
export function divide(a, b) {
  validateTwoNumbers(a, b);
  validateNonZeroDivisor(b);
  return divideOperation(a, b);
}

/**
 * Calculator object with all basic operations
 */
const calculator = {
  add,
  subtract,
  multiply,
  divide
};

export default calculator;
