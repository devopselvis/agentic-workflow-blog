/**
 * Comprehensive test suite for calculator module
 * Tests edge cases, boundary values, and complete error scenarios
 */

import calculator, { add, subtract, multiply, divide } from '../src/calculator.js';

// Test utilities
let passed = 0;
let failed = 0;
const failedTests = [];

function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
    passed++;
  } catch (error) {
    console.error(`✗ ${description}`);
    console.error(`  ${error.message}`);
    failedTests.push({ description, error: error.message });
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

function assertApproximatelyEqual(actual, expected, tolerance, message) {
  if (Math.abs(actual - expected) >= tolerance) {
    throw new Error(message || `Expected approximately ${expected}, but got ${actual}`);
  }
}

// Run comprehensive tests
console.log('Running comprehensive calculator tests...\n');

// ========================================
// ADDITION TESTS
// ========================================
console.log('=== Addition Tests ===');

test('add: positive integers', () => {
  assertEqual(add(2, 3), 5);
});

test('add: negative integers', () => {
  assertEqual(add(-5, -3), -8);
});

test('add: mixed signs', () => {
  assertEqual(add(-1, 1), 0);
  assertEqual(add(10, -5), 5);
});

test('add: zero values', () => {
  assertEqual(add(0, 0), 0);
  assertEqual(add(0, 5), 5);
  assertEqual(add(5, 0), 5);
});

test('add: negative zero', () => {
  const result = add(-0, 0);
  assertEqual(result, 0);
});

test('add: floating point numbers', () => {
  assertApproximatelyEqual(add(0.1, 0.2), 0.3, 1e-10);
  assertEqual(add(3.5, 2.5), 6.0);
});

test('add: very large numbers', () => {
  const large = Number.MAX_SAFE_INTEGER;
  assertEqual(add(large, 0), large);
});

test('add: very small numbers', () => {
  const small = Number.MIN_SAFE_INTEGER;
  assertEqual(add(small, 0), small);
});

test('add: results in Infinity', () => {
  const result = add(Number.MAX_VALUE, Number.MAX_VALUE);
  assertEqual(result, Infinity);
});

test('add: with Infinity', () => {
  assertEqual(add(Infinity, 5), Infinity);
  assertEqual(add(-Infinity, 5), -Infinity);
});

test('add: NaN input should throw TypeError', () => {
  assertThrows(() => add(NaN, 5), TypeError);
  assertThrows(() => add(5, NaN), TypeError);
});

test('add: string number should throw TypeError', () => {
  assertThrows(() => add('1', 2), TypeError);
  assertThrows(() => add(1, '2'), TypeError);
});

test('add: boolean should throw TypeError', () => {
  assertThrows(() => add(true, 5), TypeError);
  assertThrows(() => add(5, false), TypeError);
});

test('add: null should throw TypeError', () => {
  assertThrows(() => add(null, 5), TypeError);
  assertThrows(() => add(5, null), TypeError);
});

test('add: undefined should throw TypeError', () => {
  assertThrows(() => add(undefined, 5), TypeError);
  assertThrows(() => add(5, undefined), TypeError);
});

test('add: object should throw TypeError', () => {
  assertThrows(() => add({}, 5), TypeError);
  assertThrows(() => add(5, {}), TypeError);
});

test('add: array should throw TypeError', () => {
  assertThrows(() => add([1], 5), TypeError);
  assertThrows(() => add(5, [1]), TypeError);
});

// ========================================
// SUBTRACTION TESTS
// ========================================
console.log('\n=== Subtraction Tests ===');

test('subtract: positive integers', () => {
  assertEqual(subtract(5, 3), 2);
});

test('subtract: negative integers', () => {
  assertEqual(subtract(-5, -3), -2);
});

test('subtract: mixed signs', () => {
  assertEqual(subtract(1, 1), 0);
  assertEqual(subtract(3, 7), -4);
});

test('subtract: zero values', () => {
  assertEqual(subtract(0, 0), 0);
  assertEqual(subtract(5, 0), 5);
  assertEqual(subtract(0, 5), -5);
});

test('subtract: negative zero', () => {
  const result = subtract(-0, 0);
  assertEqual(result, 0);
});

test('subtract: floating point numbers', () => {
  assertEqual(subtract(5.5, 2.3), 3.2);
  assertApproximatelyEqual(subtract(0.3, 0.1), 0.2, 1e-10);
});

test('subtract: very large numbers', () => {
  const large = Number.MAX_SAFE_INTEGER;
  assertEqual(subtract(large, 0), large);
});

test('subtract: very small numbers', () => {
  const small = Number.MIN_SAFE_INTEGER;
  assertEqual(subtract(small, 0), small);
});

test('subtract: with Infinity', () => {
  assertEqual(subtract(Infinity, 5), Infinity);
  assertEqual(subtract(-Infinity, 5), -Infinity);
  assertEqual(subtract(5, Infinity), -Infinity);
});

test('subtract: NaN input should throw TypeError', () => {
  assertThrows(() => subtract(NaN, 5), TypeError);
  assertThrows(() => subtract(5, NaN), TypeError);
});

test('subtract: string should throw TypeError', () => {
  assertThrows(() => subtract('5', 2), TypeError);
  assertThrows(() => subtract(1, '2'), TypeError);
});

test('subtract: boolean should throw TypeError', () => {
  assertThrows(() => subtract(true, 5), TypeError);
  assertThrows(() => subtract(5, false), TypeError);
});

test('subtract: null should throw TypeError', () => {
  assertThrows(() => subtract(null, 5), TypeError);
  assertThrows(() => subtract(5, null), TypeError);
});

test('subtract: undefined should throw TypeError', () => {
  assertThrows(() => subtract(undefined, 5), TypeError);
  assertThrows(() => subtract(5, undefined), TypeError);
});

// ========================================
// MULTIPLICATION TESTS
// ========================================
console.log('\n=== Multiplication Tests ===');

test('multiply: positive integers', () => {
  assertEqual(multiply(2, 3), 6);
});

test('multiply: negative integers', () => {
  assertEqual(multiply(-2, -3), 6);
  assertEqual(multiply(-2, 3), -6);
  assertEqual(multiply(2, -3), -6);
});

test('multiply: by zero', () => {
  assertEqual(multiply(0, 100), 0);
  assertEqual(multiply(100, 0), 0);
  assertEqual(multiply(0, 0), 0);
});

test('multiply: by one', () => {
  assertEqual(multiply(1, 5), 5);
  assertEqual(multiply(5, 1), 5);
});

test('multiply: by negative one', () => {
  assertEqual(multiply(-1, 5), -5);
  assertEqual(multiply(5, -1), -5);
});

test('multiply: floating point numbers', () => {
  assertEqual(multiply(2.5, 4), 10);
  assertEqual(multiply(0.5, 0.5), 0.25);
});

test('multiply: very large numbers result in Infinity', () => {
  const result = multiply(Number.MAX_VALUE, 2);
  assertEqual(result, Infinity);
});

test('multiply: with Infinity', () => {
  assertEqual(multiply(Infinity, 5), Infinity);
  assertEqual(multiply(-Infinity, 5), -Infinity);
  assertEqual(multiply(Infinity, -5), -Infinity);
});

test('multiply: negative zero', () => {
  const result = multiply(-0, 5);
  assertEqual(result, -0);
});

test('multiply: NaN input should throw TypeError', () => {
  assertThrows(() => multiply(NaN, 5), TypeError);
  assertThrows(() => multiply(5, NaN), TypeError);
});

test('multiply: string should throw TypeError', () => {
  assertThrows(() => multiply('2', 3), TypeError);
  assertThrows(() => multiply(2, '3'), TypeError);
});

test('multiply: boolean should throw TypeError', () => {
  assertThrows(() => multiply(true, 5), TypeError);
  assertThrows(() => multiply(5, false), TypeError);
});

test('multiply: null should throw TypeError', () => {
  assertThrows(() => multiply(null, 2), TypeError);
  assertThrows(() => multiply(2, null), TypeError);
});

test('multiply: undefined should throw TypeError', () => {
  assertThrows(() => multiply(undefined, 5), TypeError);
  assertThrows(() => multiply(5, undefined), TypeError);
});

// ========================================
// DIVISION TESTS
// ========================================
console.log('\n=== Division Tests ===');

test('divide: positive integers', () => {
  assertEqual(divide(6, 2), 3);
  assertEqual(divide(5, 2), 2.5);
});

test('divide: negative integers', () => {
  assertEqual(divide(-6, 2), -3);
  assertEqual(divide(6, -2), -3);
  assertEqual(divide(-6, -2), 3);
});

test('divide: by one', () => {
  assertEqual(divide(5, 1), 5);
  assertEqual(divide(-5, 1), -5);
});

test('divide: by negative one', () => {
  assertEqual(divide(5, -1), -5);
  assertEqual(divide(-5, -1), 5);
});

test('divide: zero divided by number', () => {
  assertEqual(divide(0, 5), 0);
  assertEqual(divide(0, -5), -0);
});

test('divide: floating point numbers', () => {
  assertEqual(divide(7, 2), 3.5);
  assertEqual(divide(0.5, 0.25), 2);
});

test('divide: by zero should throw Error', () => {
  assertThrows(() => divide(1, 0), Error);
  assertThrows(() => divide(10, 0), Error);
  assertThrows(() => divide(-5, 0), Error);
});

test('divide: by negative zero should throw Error', () => {
  assertThrows(() => divide(1, -0), Error);
});

test('divide: zero by zero should throw Error', () => {
  assertThrows(() => divide(0, 0), Error);
});

test('divide: with Infinity', () => {
  assertEqual(divide(Infinity, 5), Infinity);
  assertEqual(divide(-Infinity, 5), -Infinity);
  assertEqual(divide(5, Infinity), 0);
});

test('divide: Infinity by Infinity results in NaN', () => {
  const result = divide(Infinity, Infinity);
  assertEqual(Number.isNaN(result), true);
});

test('divide: NaN input should throw TypeError', () => {
  assertThrows(() => divide(NaN, 5), TypeError);
  assertThrows(() => divide(5, NaN), TypeError);
});

test('divide: string should throw TypeError', () => {
  assertThrows(() => divide('6', 2), TypeError);
  assertThrows(() => divide(6, '2'), TypeError);
});

test('divide: boolean should throw TypeError', () => {
  assertThrows(() => divide(true, 5), TypeError);
  assertThrows(() => divide(5, false), TypeError);
});

test('divide: null should throw TypeError', () => {
  assertThrows(() => divide(null, 5), TypeError);
  assertThrows(() => divide(5, null), TypeError);
});

test('divide: undefined should throw TypeError', () => {
  assertThrows(() => divide(1, undefined), TypeError);
  assertThrows(() => divide(undefined, 1), TypeError);
});

// ========================================
// CALCULATOR OBJECT TESTS
// ========================================
console.log('\n=== Calculator Object Tests ===');

test('calculator object has all methods', () => {
  assertEqual(typeof calculator.add, 'function');
  assertEqual(typeof calculator.subtract, 'function');
  assertEqual(typeof calculator.multiply, 'function');
  assertEqual(typeof calculator.divide, 'function');
});

test('calculator.add works correctly', () => {
  assertEqual(calculator.add(2, 3), 5);
  assertEqual(calculator.add(-1, 1), 0);
});

test('calculator.subtract works correctly', () => {
  assertEqual(calculator.subtract(5, 3), 2);
  assertEqual(calculator.subtract(3, 5), -2);
});

test('calculator.multiply works correctly', () => {
  assertEqual(calculator.multiply(4, 5), 20);
  assertEqual(calculator.multiply(-2, 3), -6);
});

test('calculator.divide works correctly', () => {
  assertEqual(calculator.divide(10, 2), 5);
  assertEqual(calculator.divide(7, 2), 3.5);
});

test('calculator.divide throws on division by zero', () => {
  assertThrows(() => calculator.divide(5, 0), Error);
});

test('calculator methods throw TypeError on invalid input', () => {
  assertThrows(() => calculator.add('1', 2), TypeError);
  assertThrows(() => calculator.subtract(1, null), TypeError);
  assertThrows(() => calculator.multiply(undefined, 2), TypeError);
  assertThrows(() => calculator.divide(1, false), TypeError);
});

// ========================================
// SPECIAL NUMERIC VALUES TESTS
// ========================================
console.log('\n=== Special Numeric Values Tests ===');

test('operations with positive Infinity', () => {
  assertEqual(add(Infinity, Infinity), Infinity);
  assertEqual(subtract(Infinity, 100), Infinity);
  assertEqual(multiply(Infinity, 2), Infinity);
  assertEqual(divide(Infinity, 2), Infinity);
});

test('operations with negative Infinity', () => {
  assertEqual(add(-Infinity, -Infinity), -Infinity);
  assertEqual(subtract(-Infinity, 100), -Infinity);
  assertEqual(multiply(-Infinity, 2), -Infinity);
  assertEqual(divide(-Infinity, 2), -Infinity);
});

test('MAX_SAFE_INTEGER operations', () => {
  const max = Number.MAX_SAFE_INTEGER;
  assertEqual(add(max, 0), max);
  assertEqual(subtract(max, 0), max);
  assertEqual(multiply(max, 1), max);
  assertEqual(divide(max, 1), max);
});

test('MIN_SAFE_INTEGER operations', () => {
  const min = Number.MIN_SAFE_INTEGER;
  assertEqual(add(min, 0), min);
  assertEqual(subtract(min, 0), min);
  assertEqual(multiply(min, 1), min);
  assertEqual(divide(min, 1), min);
});

// ========================================
// SUMMARY
// ========================================
console.log('\n' + '='.repeat(70));
console.log(`COMPREHENSIVE TEST RESULTS`);
console.log('='.repeat(70));
console.log(`Tests passed: ${passed}`);
console.log(`Tests failed: ${failed}`);
console.log(`Total tests: ${passed + failed}`);
console.log(`Success rate: ${((passed / (passed + failed)) * 100).toFixed(2)}%`);
console.log('='.repeat(70));

if (failed > 0) {
  console.log('\nFailed tests:');
  failedTests.forEach(({ description, error }) => {
    console.log(`  - ${description}`);
    console.log(`    Error: ${error}`);
  });
  process.exit(1);
}

console.log('\n✅ All comprehensive tests passed!');
