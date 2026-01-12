/**
 * Edge case tests specifically for boundary conditions and special scenarios
 */

import { add, subtract, multiply, divide } from '../src/calculator.js';

console.log('Running Edge Case Tests...\n');

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

function assertEqual(actual, expected) {
  if (actual !== expected && !(Number.isNaN(actual) && Number.isNaN(expected))) {
    throw new Error(`Expected ${expected}, but got ${actual}`);
  }
}

// ========================================
// NaN HANDLING TESTS (Current Limitation)
// ========================================
console.log('=== NaN Handling (Current Behavior) ===');

test('add with NaN produces NaN (LIMITATION)', () => {
  const result = add(NaN, 5);
  assertEqual(Number.isNaN(result), true);
});

test('subtract with NaN produces NaN (LIMITATION)', () => {
  const result = subtract(5, NaN);
  assertEqual(Number.isNaN(result), true);
});

test('multiply with NaN produces NaN (LIMITATION)', () => {
  const result = multiply(NaN, 2);
  assertEqual(Number.isNaN(result), true);
});

test('divide with NaN produces NaN (LIMITATION)', () => {
  const result = divide(NaN, 2);
  assertEqual(Number.isNaN(result), true);
});

// ========================================
// PRECISION TESTS
// ========================================
console.log('\n=== Floating Point Precision ===');

test('floating point addition precision', () => {
  const result = add(0.1, 0.2);
  // JavaScript quirk: 0.1 + 0.2 = 0.30000000000000004
  assertEqual(result, 0.30000000000000004);
});

test('large decimal multiplication', () => {
  const result = multiply(1.0000000000001, 1.0000000000001);
  assertEqual(result > 1.0, true);
});

// ========================================
// COMMUTATIVE PROPERTY TESTS
// ========================================
console.log('\n=== Mathematical Properties ===');

test('addition is commutative', () => {
  assertEqual(add(3, 5), add(5, 3));
  assertEqual(add(-2, 7), add(7, -2));
});

test('multiplication is commutative', () => {
  assertEqual(multiply(4, 6), multiply(6, 4));
  assertEqual(multiply(-3, 8), multiply(8, -3));
});

test('subtraction is not commutative', () => {
  const a = subtract(10, 3);
  const b = subtract(3, 10);
  assertEqual(a !== b, true);
  assertEqual(a, 7);
  assertEqual(b, -7);
});

test('division is not commutative', () => {
  const a = divide(10, 2);
  const b = divide(2, 10);
  assertEqual(a !== b, true);
  assertEqual(a, 5);
  assertEqual(b, 0.2);
});

// ========================================
// IDENTITY TESTS
// ========================================
console.log('\n=== Identity Properties ===');

test('addition identity (0)', () => {
  assertEqual(add(42, 0), 42);
  assertEqual(add(0, 42), 42);
  assertEqual(add(-17, 0), -17);
});

test('multiplication identity (1)', () => {
  assertEqual(multiply(42, 1), 42);
  assertEqual(multiply(1, 42), 42);
  assertEqual(multiply(-17, 1), -17);
});

test('division identity (1)', () => {
  assertEqual(divide(42, 1), 42);
  assertEqual(divide(-17, 1), -17);
});

// ========================================
// INVERSE OPERATIONS
// ========================================
console.log('\n=== Inverse Operations ===');

test('addition and subtraction are inverses', () => {
  const original = 42;
  const added = add(original, 15);
  const result = subtract(added, 15);
  assertEqual(result, original);
});

test('multiplication and division are inverses', () => {
  const original = 42;
  const multiplied = multiply(original, 7);
  const result = divide(multiplied, 7);
  assertEqual(result, original);
});

// ========================================
// CHAINING OPERATIONS
// ========================================
console.log('\n=== Chaining Operations ===');

test('complex calculation: (5 + 3) * 2 - 4', () => {
  const step1 = add(5, 3);      // 8
  const step2 = multiply(step1, 2);  // 16
  const result = subtract(step2, 4); // 12
  assertEqual(result, 12);
});

test('complex calculation: (10 / 2) + (3 * 4)', () => {
  const step1 = divide(10, 2);    // 5
  const step2 = multiply(3, 4);   // 12
  const result = add(step1, step2);  // 17
  assertEqual(result, 17);
});

// ========================================
// VERY SMALL NUMBERS
// ========================================
console.log('\n=== Very Small Numbers ===');

test('operations with Number.EPSILON', () => {
  const epsilon = Number.EPSILON;
  assertEqual(add(1, epsilon) > 1, true);
  assertEqual(multiply(epsilon, 2), epsilon * 2);
});

test('operations near zero', () => {
  const tiny = 1e-15;
  assertEqual(add(tiny, tiny), 2e-15);
  assertEqual(multiply(tiny, 1e15), 1);
});

// ========================================
// SUMMARY
// ========================================
console.log('\n' + '='.repeat(50));
console.log(`Edge Case Tests: ${passed} passed, ${failed} failed`);
console.log('='.repeat(50));

if (failed > 0) {
  process.exit(1);
}
