/**
 * Performance tests for calculator module
 */

import { add, subtract, multiply, divide } from '../src/calculator.js';

console.log('Running Performance Tests...\n');

function measurePerformance(name, fn, iterations = 100000) {
  const start = process.hrtime.bigint();
  
  for (let i = 0; i < iterations; i++) {
    fn();
  }
  
  const end = process.hrtime.bigint();
  const duration = Number(end - start) / 1000000; // Convert to milliseconds
  const opsPerSecond = (iterations / duration) * 1000;
  
  console.log(`✓ ${name}`);
  console.log(`  Iterations: ${iterations.toLocaleString()}`);
  console.log(`  Time: ${duration.toFixed(2)}ms`);
  console.log(`  Ops/sec: ${opsPerSecond.toLocaleString('en-US', { maximumFractionDigits: 0 })}`);
  console.log();
}

// ========================================
// PERFORMANCE TESTS
// ========================================
console.log('=== Performance Benchmarks ===\n');

measurePerformance('Addition performance', () => {
  add(123.456, 789.012);
});

measurePerformance('Subtraction performance', () => {
  subtract(1000, 1);
});

measurePerformance('Multiplication performance', () => {
  multiply(42, 24);
});

measurePerformance('Division performance', () => {
  divide(100, 3);
});

measurePerformance('Mixed operations performance', () => {
  const a = add(10, 5);
  const b = subtract(20, 3);
  const c = multiply(a, b);
  divide(c, 2);
});

console.log('='.repeat(50));
console.log('✅ All performance tests completed successfully!');
console.log('='.repeat(50));
