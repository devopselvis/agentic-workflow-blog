/**
 * Example usage of the calculator module
 * Run with: node examples/demo.js
 */

const { add, subtract, multiply, divide, calculate } = require('../src/calculator');

console.log('=== Calculator Demo ===\n');

// Individual function examples
console.log('--- Using Individual Functions ---');
console.log('add(5, 3) =', add(5, 3));
console.log('subtract(10, 4) =', subtract(10, 4));
console.log('multiply(6, 7) =', multiply(6, 7));
console.log('divide(20, 4) =', divide(20, 4));

// Decimal number examples
console.log('\n--- Working with Decimals ---');
console.log('add(1.5, 2.5) =', add(1.5, 2.5));
console.log('multiply(2.5, 4) =', multiply(2.5, 4));
console.log('divide(7.5, 2.5) =', divide(7.5, 2.5));

// Negative number examples
console.log('\n--- Working with Negative Numbers ---');
console.log('add(-5, -3) =', add(-5, -3));
console.log('subtract(-10, -5) =', subtract(-10, -5));
console.log('multiply(-2, 3) =', multiply(-2, 3));
console.log('divide(-15, 3) =', divide(-15, 3));

// Using the unified calculate function
console.log('\n--- Using calculate() Function ---');
console.log('calculate(10, "+", 5) =', calculate(10, '+', 5));
console.log('calculate(10, "-", 5) =', calculate(10, '-', 5));
console.log('calculate(10, "*", 5) =', calculate(10, '*', 5));
console.log('calculate(10, "/", 5) =', calculate(10, '/', 5));

// Chaining calculations
console.log('\n--- Chaining Calculations ---');
let result = calculate(100, '+', 50);
console.log('Start with 100, add 50:', result);

result = calculate(result, '-', 30);
console.log('Subtract 30:', result);

result = calculate(result, '*', 2);
console.log('Multiply by 2:', result);

result = calculate(result, '/', 4);
console.log('Divide by 4:', result);
console.log('Final result:', result);

// Error handling examples
console.log('\n--- Error Handling Examples ---');

// Division by zero
try {
  divide(10, 0);
} catch (error) {
  console.log('Error caught:', error.message);
}

// Invalid type
try {
  add('5', 3);
} catch (error) {
  console.log('Error caught:', error.message);
}

// Unsupported operator
try {
  calculate(5, '%', 3);
} catch (error) {
  console.log('Error caught:', error.message);
}

// NaN protection
try {
  multiply(NaN, 5);
} catch (error) {
  console.log('Error caught:', error.message);
}

console.log('\n=== Demo Complete ===');
