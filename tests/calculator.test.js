/**
 * Basic tests for calculator module
 * Note: This is a minimal test suite. The test-agent should expand this.
 */

import calculator, { add, subtract, multiply, divide } from '../src/calculator.js';

// Simple test runner
let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
    passed++;
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  ${error.message}`);
    failed++;
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, but got ${actual}`);
  }
}

function assertThrows(fn, expectedError, message) {
  let thrown = false;
  try {
    fn();
  } catch (error) {
    thrown = true;
    if (expectedError && !(error instanceof expectedError)) {
      throw new Error(message || `Expected ${expectedError.name}, but got ${error.constructor.name}`);
    }
  }
  if (!thrown) {
    throw new Error(message || 'Expected function to throw an error');
  }
}

// Run tests
console.log('Running calculator tests...\n');

// Addition tests
test('add(2, 3) should return 5', () => {
  assertEqual(add(2, 3), 5);
});

test('add(-1, 1) should return 0', () => {
  assertEqual(add(-1, 1), 0);
});

test('add(0.1, 0.2) should be close to 0.3', () => {
  const result = add(0.1, 0.2);
  const expected = 0.3;
  const tolerance = 1e-10;
  if (Math.abs(result - expected) >= tolerance) {
    throw new Error(`Expected approximately ${expected}, but got ${result}`);
  }
});

// Subtraction tests
test('subtract(5, 3) should return 2', () => {
  assertEqual(subtract(5, 3), 2);
});

test('subtract(1, 1) should return 0', () => {
  assertEqual(subtract(1, 1), 0);
});

// Multiplication tests
test('multiply(2, 3) should return 6', () => {
  assertEqual(multiply(2, 3), 6);
});

test('multiply(-2, 3) should return -6', () => {
  assertEqual(multiply(-2, 3), -6);
});

test('multiply(0, 100) should return 0', () => {
  assertEqual(multiply(0, 100), 0);
});

// Division tests
test('divide(6, 2) should return 3', () => {
  assertEqual(divide(6, 2), 3);
});

test('divide(5, 2) should return 2.5', () => {
  assertEqual(divide(5, 2), 2.5);
});

test('divide(1, 0) should throw Error', () => {
  assertThrows(() => divide(1, 0), Error);
});

test('divide(1, -0) should throw Error', () => {
  assertThrows(() => divide(1, -0), Error);
});

// Type validation tests
test('add with non-number should throw TypeError', () => {
  assertThrows(() => add('1', 2), TypeError);
});

test('subtract with non-number should throw TypeError', () => {
  assertThrows(() => subtract(1, '2'), TypeError);
});

test('multiply with non-number should throw TypeError', () => {
  assertThrows(() => multiply(null, 2), TypeError);
});

test('divide with non-number should throw TypeError', () => {
  assertThrows(() => divide(1, undefined), TypeError);
});

// Calculator object tests
test('calculator.add(2, 3) should return 5', () => {
  assertEqual(calculator.add(2, 3), 5);
});

test('calculator.divide(10, 2) should return 5', () => {
  assertEqual(calculator.divide(10, 2), 5);
});

// Summary
console.log(`\n${'='.repeat(50)}`);
console.log(`Tests passed: ${passed}`);
console.log(`Tests failed: ${failed}`);
console.log(`${'='.repeat(50)}`);

if (failed > 0) {
  process.exit(1);
}
