/**
 * Example usage of the calculator module
 */

import calculator, { add, subtract, multiply, divide } from './src/calculator.js';

console.log('Calculator Examples\n' + '='.repeat(50));

// Using individual functions
console.log('\n--- Using Individual Functions ---');
console.log(`add(10, 5) = ${add(10, 5)}`);
console.log(`subtract(10, 5) = ${subtract(10, 5)}`);
console.log(`multiply(10, 5) = ${multiply(10, 5)}`);
console.log(`divide(10, 5) = ${divide(10, 5)}`);

// Using calculator object
console.log('\n--- Using Calculator Object ---');
console.log(`calculator.add(7, 3) = ${calculator.add(7, 3)}`);
console.log(`calculator.subtract(15, 8) = ${calculator.subtract(15, 8)}`);
console.log(`calculator.multiply(6, 7) = ${calculator.multiply(6, 7)}`);
console.log(`calculator.divide(100, 4) = ${calculator.divide(100, 4)}`);

// Working with decimals
console.log('\n--- Working with Decimals ---');
console.log(`divide(7, 2) = ${divide(7, 2)}`);
console.log(`multiply(3.5, 2) = ${multiply(3.5, 2)}`);
console.log(`add(0.1, 0.2) = ${add(0.1, 0.2)}`);

// Working with negative numbers
console.log('\n--- Working with Negative Numbers ---');
console.log(`add(-5, 3) = ${add(-5, 3)}`);
console.log(`subtract(3, 7) = ${subtract(3, 7)}`);
console.log(`multiply(-4, -3) = ${multiply(-4, -3)}`);
console.log(`divide(-10, 2) = ${divide(-10, 2)}`);

// Error handling examples
console.log('\n--- Error Handling ---');

try {
  divide(10, 0);
} catch (error) {
  console.log(`divide(10, 0) throws: "${error.message}"`);
}

try {
  add('5', 3);
} catch (error) {
  console.log(`add('5', 3) throws: "${error.message}"`);
}

try {
  multiply(null, 2);
} catch (error) {
  console.log(`multiply(null, 2) throws: "${error.message}"`);
}

console.log('\n' + '='.repeat(50));
