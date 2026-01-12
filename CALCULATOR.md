# Calculator Module

A simple, robust calculator implementation in JavaScript that supports basic arithmetic operations with comprehensive error handling.

## Features

- ✅ **Addition**: Add two numbers
- ✅ **Subtraction**: Subtract one number from another
- ✅ **Multiplication**: Multiply two numbers
- ✅ **Division**: Divide one number by another (with zero-division protection)
- ✅ **Unified Interface**: Single `calculate()` function for all operations
- ✅ **Error Handling**: Comprehensive input validation and error messages
- ✅ **100% Test Coverage**: All functions are fully tested

## Installation

```bash
npm install
```

## Usage

### Individual Operations

```javascript
const { add, subtract, multiply, divide } = require('./src/calculator');

// Addition
add(5, 3);        // Returns: 8
add(-2, 7);       // Returns: 5
add(1.5, 2.5);    // Returns: 4

// Subtraction
subtract(10, 3);  // Returns: 7
subtract(5, -2);  // Returns: 7

// Multiplication
multiply(4, 5);   // Returns: 20
multiply(-2, 3);  // Returns: -6

// Division
divide(15, 3);    // Returns: 5
divide(7, 2);     // Returns: 3.5
divide(10, 0);    // Throws: Error - Division by zero is not allowed
```

### Using the Unified Calculator Function

```javascript
const { calculate } = require('./src/calculator');

calculate(5, '+', 3);   // Returns: 8
calculate(10, '-', 3);  // Returns: 7
calculate(4, '*', 5);   // Returns: 20
calculate(15, '/', 3);  // Returns: 5
```

## API Reference

### `add(a, b)`
Adds two numbers together.

**Parameters:**
- `a` (number): The first number
- `b` (number): The second number

**Returns:** (number) The sum of a and b

**Throws:**
- `TypeError`: If either parameter is not a finite number

---

### `subtract(a, b)`
Subtracts the second number from the first.

**Parameters:**
- `a` (number): The number to subtract from
- `b` (number): The number to subtract

**Returns:** (number) The difference of a and b

**Throws:**
- `TypeError`: If either parameter is not a finite number

---

### `multiply(a, b)`
Multiplies two numbers together.

**Parameters:**
- `a` (number): The first number
- `b` (number): The second number

**Returns:** (number) The product of a and b

**Throws:**
- `TypeError`: If either parameter is not a finite number

---

### `divide(a, b)`
Divides the first number by the second.

**Parameters:**
- `a` (number): The dividend
- `b` (number): The divisor

**Returns:** (number) The quotient of a and b

**Throws:**
- `TypeError`: If either parameter is not a finite number
- `Error`: If attempting to divide by zero

---

### `calculate(a, operator, b)`
Main calculator function that performs operations based on the operator.

**Parameters:**
- `a` (number): The first operand
- `operator` (string): The operation to perform (`+`, `-`, `*`, `/`)
- `b` (number): The second operand

**Returns:** (number) The result of the operation

**Throws:**
- `TypeError`: If operands are not numbers or operator is not a string
- `Error`: If operator is not supported or division by zero

## Error Handling

The calculator includes comprehensive error handling:

### Type Validation
All functions validate that inputs are numbers:
```javascript
add('5', 3);      // Throws: TypeError - Both arguments must be numbers
add(null, 3);     // Throws: TypeError - Both arguments must be numbers
```

### Infinity and NaN Protection
Functions reject infinite values and NaN:
```javascript
add(Infinity, 3); // Throws: TypeError - Arguments must be finite numbers
add(NaN, 3);      // Throws: TypeError - Arguments must be finite numbers
```

### Division by Zero
Division operations are protected against zero divisors:
```javascript
divide(5, 0);     // Throws: Error - Division by zero is not allowed
```

### Unsupported Operators
The `calculate()` function validates operators:
```javascript
calculate(5, '%', 3);  // Throws: Error - Unsupported operator: %. Use +, -, *, or /
```

## Testing

Run the test suite:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage

The calculator has **100% code coverage** with 43 comprehensive tests covering:
- ✅ Normal operations with positive, negative, and decimal numbers
- ✅ Edge cases (zero, negative numbers, decimals)
- ✅ Error conditions (invalid types, infinity, NaN, division by zero)
- ✅ All operators and the unified calculator interface

```
File           | % Stmts | % Branch | % Funcs | % Lines
---------------|---------|----------|---------|--------
All files      |     100 |      100 |     100 |     100
 calculator.js |     100 |      100 |     100 |     100
```

## File Structure

```
.
├── src/
│   └── calculator.js       # Main calculator implementation
├── tests/
│   └── calculator.test.js  # Comprehensive test suite
├── package.json            # Project configuration
└── CALCULATOR.md          # This file
```

## Design Decisions

1. **Separate Functions**: Each operation has its own function for flexibility and clarity
2. **Unified Interface**: The `calculate()` function provides a single entry point for all operations
3. **Strict Validation**: All inputs are validated to ensure type safety and prevent unexpected behavior
4. **Comprehensive Error Messages**: Clear, descriptive error messages help with debugging
5. **JSDoc Comments**: Full documentation in code for better IDE support

## Examples

### Complex Calculations

```javascript
const { calculate } = require('./src/calculator');

// Chain calculations
let result = calculate(10, '+', 5);     // 15
result = calculate(result, '*', 2);     // 30
result = calculate(result, '/', 6);     // 5
result = calculate(result, '-', 3);     // 2

console.log(result); // Output: 2
```

### Error Handling in Practice

```javascript
const { divide } = require('./src/calculator');

function safeDivide(a, b) {
  try {
    return divide(a, b);
  } catch (error) {
    if (error.message.includes('Division by zero')) {
      console.error('Cannot divide by zero!');
      return null;
    }
    throw error;
  }
}

safeDivide(10, 2);  // Returns: 5
safeDivide(10, 0);  // Logs error, returns: null
```

## License

MIT
