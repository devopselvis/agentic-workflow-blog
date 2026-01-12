# Calculator Usage Examples

Comprehensive examples demonstrating how to use the calculator module in various scenarios.

---

## Table of Contents

- [Basic Operations](#basic-operations)
- [Import Patterns](#import-patterns)
- [Working with Different Number Types](#working-with-different-number-types)
- [Error Handling](#error-handling)
- [Advanced Patterns](#advanced-patterns)
- [Real-World Use Cases](#real-world-use-cases)
- [Common Pitfalls](#common-pitfalls)

---

## Basic Operations

### Addition

```javascript
import { add } from './src/calculator.js';

// Simple addition
add(5, 3);           // → 8

// Negative numbers
add(-10, 5);         // → -5
add(-7, -3);         // → -10

// Decimals
add(2.5, 3.7);       // → 6.2

// Large numbers
add(1000000, 500000); // → 1500000
```

### Subtraction

```javascript
import { subtract } from './src/calculator.js';

// Simple subtraction
subtract(10, 3);     // → 7

// Negative result
subtract(5, 8);      // → -3

// Subtracting negative (double negative)
subtract(10, -5);    // → 15

// From zero
subtract(0, 5);      // → -5
```

### Multiplication

```javascript
import { multiply } from './src/calculator.js';

// Simple multiplication
multiply(4, 5);      // → 20

// Negative numbers
multiply(-3, 4);     // → -12
multiply(-3, -4);    // → 12

// Decimals
multiply(2.5, 4);    // → 10

// By zero
multiply(100, 0);    // → 0
```

### Division

```javascript
import { divide } from './src/calculator.js';

// Simple division
divide(10, 2);       // → 5

// Decimal result
divide(7, 2);        // → 3.5

// Negative numbers
divide(-15, 3);      // → -5
divide(15, -3);      // → -5
divide(-15, -3);     // → 5

// Very small result
divide(1, 1000);     // → 0.001
```

---

## Import Patterns

### Named Imports (Recommended)

```javascript
// Import only what you need (better for tree-shaking)
import { add, subtract } from './src/calculator.js';

const sum = add(10, 5);       // 15
const diff = subtract(10, 5);  // 5
```

### Default Import

```javascript
// Import the calculator object
import calculator from './src/calculator.js';

const sum = calculator.add(10, 5);        // 15
const diff = calculator.subtract(10, 5);   // 5
const product = calculator.multiply(4, 3); // 12
const quotient = calculator.divide(20, 4); // 5
```

### Mixed Import

```javascript
// Import both named functions and the calculator object
import calculator, { add, multiply } from './src/calculator.js';

// Use named imports
const sum = add(5, 3);                    // 8

// Use calculator object for other operations
const diff = calculator.subtract(10, 5);   // 5
```

### Renaming Imports

```javascript
// Rename to avoid naming conflicts
import { add as sum, subtract as diff } from './src/calculator.js';

const result1 = sum(5, 3);     // 8
const result2 = diff(10, 5);   // 5
```

---

## Working with Different Number Types

### Integers

```javascript
import { add, multiply } from './src/calculator.js';

add(10, 20);           // → 30
multiply(7, 8);        // → 56
```

### Floating Point Numbers

```javascript
import { add, divide } from './src/calculator.js';

add(3.14, 2.86);       // → 6
divide(22, 7);         // → 3.142857142857143

// ⚠️ Note: Floating point precision limitations
add(0.1, 0.2);         // → 0.30000000000000004 (not exactly 0.3)
```

### Scientific Notation

```javascript
import { multiply, add } from './src/calculator.js';

multiply(1e10, 2);     // → 20000000000
add(1e-5, 2e-5);       // → 0.00003
```

### Very Large Numbers

```javascript
import { add, multiply } from './src/calculator.js';

// Within safe integer range
add(9007199254740990, 1);  // → 9007199254740991 (MAX_SAFE_INTEGER)

// Beyond safe integer range (may lose precision)
add(9007199254740992, 1);  // → 9007199254740992 (precision lost)

// Infinity
multiply(1e308, 10);       // → Infinity
```

### Negative Numbers

```javascript
import { add, subtract, multiply, divide } from './src/calculator.js';

add(-5, -3);           // → -8
subtract(-10, -5);     // → -5
multiply(-4, 5);       // → -20
divide(-20, -4);       // → 5
```

### Special Values

```javascript
import { add, multiply } from './src/calculator.js';

// Infinity
add(Infinity, 100);    // → Infinity
multiply(Infinity, 2); // → Infinity
add(Infinity, -Infinity); // → NaN

// Negative zero
multiply(-1, 0);       // → -0
add(0, -0);            // → 0
```

---

## Error Handling

### Handling Division by Zero

```javascript
import { divide } from './src/calculator.js';

// Basic try-catch
try {
  const result = divide(10, 0);
} catch (error) {
  console.error('Error:', error.message);
  // → "Division by zero is not allowed"
}

// With fallback value
function safeDivide(a, b, fallback = null) {
  try {
    return divide(a, b);
  } catch (error) {
    if (error.message.includes('Division by zero')) {
      return fallback;
    }
    throw error; // Re-throw if it's a different error
  }
}

safeDivide(10, 0, 0);    // → 0 (fallback value)
safeDivide(10, 2, 0);    // → 5 (normal result)
```

### Handling Type Errors

```javascript
import { add } from './src/calculator.js';

// Detecting type errors
try {
  const result = add('5', 3);
} catch (error) {
  if (error instanceof TypeError) {
    console.error('Invalid types provided');
  }
  // → "Invalid types provided"
}

// Pre-validation approach
function validateAndCalculate(operation, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('Both arguments must be numbers');
    return null;
  }
  return operation(a, b);
}

validateAndCalculate(add, 5, 3);       // → 8
validateAndCalculate(add, '5', 3);     // → null (with error message)
```

### Input Sanitization

```javascript
import { add, multiply } from './src/calculator.js';

// Convert strings to numbers safely
function parseAndCalculate(operation, a, b) {
  const numA = Number(a);
  const numB = Number(b);
  
  // Check if conversion was successful
  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    throw new Error('Cannot convert inputs to valid numbers');
  }
  
  return operation(numA, numB);
}

parseAndCalculate(add, '5', '3');      // → 8
parseAndCalculate(multiply, '4', '2'); // → 8
parseAndCalculate(add, 'hello', '3');  // → Error: Cannot convert inputs...
```

### Handling NaN Inputs

```javascript
import { add, multiply } from './src/calculator.js';

// NaN passes type checking but produces NaN results
function strictAdd(a, b) {
  // Check for NaN before operating
  if (Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('NaN is not allowed');
  }
  return add(a, b);
}

add(NaN, 5);           // → NaN (no error thrown by calculator)
strictAdd(NaN, 5);     // → Error: NaN is not allowed

// Validating results
function validateResult(result) {
  if (Number.isNaN(result)) {
    throw new Error('Operation resulted in NaN');
  }
  return result;
}

validateResult(add(5, 3));     // → 8
validateResult(add(NaN, 5));   // → Error: Operation resulted in NaN
```

---

## Advanced Patterns

### Chaining Operations

```javascript
import { add, multiply, divide, subtract } from './src/calculator.js';

// Manual chaining
const result = divide(
  multiply(
    add(5, 3),
    2
  ),
  4
);  // → 4
// Calculation: ((5 + 3) * 2) / 4 = 16 / 4 = 4

// Using intermediate variables for clarity
const sum = add(10, 5);           // 15
const product = multiply(sum, 2); // 30
const final = divide(product, 3); // 10
```

### Creating a Calculator Wrapper

```javascript
import { add, subtract, multiply, divide } from './src/calculator.js';

class CalculatorChain {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }
  
  add(n) {
    this.value = add(this.value, n);
    return this;
  }
  
  subtract(n) {
    this.value = subtract(this.value, n);
    return this;
  }
  
  multiply(n) {
    this.value = multiply(this.value, n);
    return this;
  }
  
  divide(n) {
    this.value = divide(this.value, n);
    return this;
  }
  
  result() {
    return this.value;
  }
}

// Usage with method chaining
const result = new CalculatorChain(10)
  .add(5)         // 15
  .multiply(2)    // 30
  .subtract(10)   // 20
  .divide(4)      // 5
  .result();      // → 5
```

### Batch Operations

```javascript
import { add, multiply } from './src/calculator.js';

// Sum an array of numbers
function sum(numbers) {
  return numbers.reduce((total, num) => add(total, num), 0);
}

sum([1, 2, 3, 4, 5]);  // → 15

// Product of an array
function product(numbers) {
  return numbers.reduce((total, num) => multiply(total, num), 1);
}

product([2, 3, 4]);    // → 24

// Average calculation
function average(numbers) {
  if (numbers.length === 0) return 0;
  return divide(sum(numbers), numbers.length);
}

average([10, 20, 30, 40]);  // → 25
```

### Partial Application

```javascript
import { add, multiply } from './src/calculator.js';

// Create specialized functions
const addFive = (n) => add(n, 5);
const double = (n) => multiply(n, 2);

addFive(10);     // → 15
double(7);       // → 14

// Compose operations
const addFiveAndDouble = (n) => double(addFive(n));
addFiveAndDouble(10);  // → 30  ((10 + 5) * 2)
```

---

## Real-World Use Cases

### E-Commerce: Price Calculations

```javascript
import { multiply, add, subtract, divide } from './src/calculator.js';

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(price, quantity) {
    this.items.push({ price, quantity });
  }
  
  getSubtotal() {
    return this.items.reduce(
      (total, item) => add(total, multiply(item.price, item.quantity)),
      0
    );
  }
  
  getTax(taxRate) {
    return multiply(this.getSubtotal(), taxRate);
  }
  
  getTotal(taxRate) {
    return add(this.getSubtotal(), this.getTax(taxRate));
  }
  
  applyDiscount(discountPercent) {
    const discount = multiply(this.getSubtotal(), divide(discountPercent, 100));
    return subtract(this.getSubtotal(), discount);
  }
}

const cart = new ShoppingCart();
cart.addItem(29.99, 2);   // 2 items at $29.99
cart.addItem(15.50, 1);   // 1 item at $15.50

cart.getSubtotal();       // → 75.48
cart.getTax(0.08);        // → 6.0384 (8% tax)
cart.getTotal(0.08);      // → 81.5184
cart.applyDiscount(10);   // → 67.932 (10% discount)
```

### Finance: Compound Interest

```javascript
import { multiply, add, divide } from './src/calculator.js';

function compoundInterest(principal, rate, time, frequency = 1) {
  // A = P(1 + r/n)^(nt)
  // Note: This is simplified - exponentiation uses Math.pow
  const ratePerPeriod = divide(rate, frequency);
  const periods = multiply(frequency, time);
  
  let amount = principal;
  for (let i = 0; i < periods; i++) {
    amount = multiply(amount, add(1, ratePerPeriod));
  }
  
  return amount;
}

// $1000 at 5% annual interest, compounded quarterly for 2 years
const result = compoundInterest(1000, 0.05, 2, 4);
// Returns approximately $1104.49
```

### Statistics: Mean, Variance

```javascript
import { add, subtract, multiply, divide } from './src/calculator.js';

function mean(values) {
  const sum = values.reduce((total, val) => add(total, val), 0);
  return divide(sum, values.length);
}

function variance(values) {
  const avg = mean(values);
  const squaredDiffs = values.map(val => {
    const diff = subtract(val, avg);
    return multiply(diff, diff);
  });
  return mean(squaredDiffs);
}

const data = [10, 20, 30, 40, 50];
mean(data);       // → 30
variance(data);   // → 200
```

### Unit Conversion

```javascript
import { multiply, divide } from './src/calculator.js';

// Temperature (Celsius to Fahrenheit)
function celsiusToFahrenheit(celsius) {
  return add(multiply(celsius, divide(9, 5)), 32);
}

celsiusToFahrenheit(0);    // → 32
celsiusToFahrenheit(100);  // → 212

// Distance (miles to kilometers)
function milesToKilometers(miles) {
  return multiply(miles, 1.60934);
}

milesToKilometers(10);     // → 16.0934

// Currency conversion
function convertCurrency(amount, exchangeRate) {
  return multiply(amount, exchangeRate);
}

convertCurrency(100, 1.18);  // → 118 (USD to EUR example)
```

---

## Common Pitfalls

### Floating Point Precision

```javascript
import { add, subtract } from './src/calculator.js';

// ❌ Problem: Unexpected precision
add(0.1, 0.2);              // → 0.30000000000000004 (not 0.3)
subtract(1.0, 0.9);         // → 0.09999999999999998 (not 0.1)

// ✅ Solution: Round to desired precision
function roundTo(value, decimals) {
  const multiplier = Math.pow(10, decimals);
  return Math.round(multiply(value, multiplier)) / multiplier;
}

roundTo(add(0.1, 0.2), 2);  // → 0.3
```

### NaN Propagation

```javascript
import { add, multiply } from './src/calculator.js';

// ❌ Problem: NaN spreads through calculations
const userInput = parseInt('abc');  // → NaN
const result = add(userInput, 10);  // → NaN
const final = multiply(result, 2);  // → NaN

// ✅ Solution: Validate early
function validateNumber(value, name = 'Value') {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error(`${name} must be a valid number`);
  }
  return value;
}

try {
  const validated = validateNumber(userInput, 'User input');
  const result = add(validated, 10);
} catch (error) {
  console.error(error.message);
  // → "User input must be a valid number"
}
```

### Type Coercion

```javascript
import { add } from './src/calculator.js';

// ❌ Problem: Assuming automatic type conversion
try {
  add('5', 3);  // Throws TypeError
} catch (error) {
  console.error(error.message);
  // → "Both arguments must be numbers"
}

// ✅ Solution: Explicit conversion
const stringValue = '5';
const result = add(Number(stringValue), 3);  // → 8

// ✅ Better: Validate conversion
function safeParseNumber(value) {
  const num = Number(value);
  if (Number.isNaN(num)) {
    throw new Error(`Cannot convert "${value}" to number`);
  }
  return num;
}

const result = add(safeParseNumber('5'), 3);  // → 8
```

### Division by Zero

```javascript
import { divide } from './src/calculator.js';

// ❌ Problem: Not handling division by zero
function calculateAverage(total, count) {
  return divide(total, count);  // Throws if count is 0
}

// ✅ Solution: Check before dividing
function safeAverage(total, count) {
  if (count === 0) {
    return 0;  // or null, or throw a custom error
  }
  return divide(total, count);
}

safeAverage(100, 5);   // → 20
safeAverage(100, 0);   // → 0 (handled gracefully)
```

### Large Number Precision

```javascript
import { add } from './src/calculator.js';

// ❌ Problem: Precision loss with very large integers
const large1 = 9007199254740992;  // Beyond MAX_SAFE_INTEGER
const large2 = 1;
add(large1, large2);  // → 9007199254740992 (should be 9007199254740993)

// ✅ Solution: Use BigInt for large integers (external to calculator)
const bigSum = BigInt(large1) + BigInt(large2);
console.log(bigSum.toString());  // → "9007199254740993"

// Note: For currency, use integers (cents) instead of decimals
const dollars = 29.99;
const cents = multiply(dollars, 100);  // → 2999 (work in cents)
```

---

## Running Examples

The repository includes an `examples.js` file demonstrating basic usage:

```bash
npm run examples
```

**Output:**
```
Calculator Examples
==================================================

--- Using Individual Functions ---
add(10, 5) = 15
subtract(10, 5) = 5
multiply(10, 5) = 50
divide(10, 5) = 2

--- Using Calculator Object ---
calculator.add(7, 3) = 10
calculator.subtract(15, 8) = 7
calculator.multiply(6, 7) = 42
calculator.divide(100, 4) = 25

--- Working with Decimals ---
divide(7, 2) = 3.5
multiply(3.5, 2) = 7
add(0.1, 0.2) = 0.30000000000000004

--- Working with Negative Numbers ---
add(-5, 3) = -2
subtract(3, 7) = -4
multiply(-4, -3) = 12
divide(-10, 2) = -5

--- Error Handling ---
divide(10, 0) throws: "Division by zero is not allowed"
add('5', 3) throws: "Both arguments must be numbers"
multiply(null, 2) throws: "Both arguments must be numbers"
```

---

## Related Documentation

- [API Reference](API.md) - Complete API documentation
- [Main README](../README.md) - Quick start guide
- [Contributing Guide](CONTRIBUTING.md) - Development guidelines

---

*Last Updated: Documentation Phase*  
*Version: 1.0.0*
