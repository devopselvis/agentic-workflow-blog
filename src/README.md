# Calculator Module

A simple JavaScript calculator module that provides four basic arithmetic operations: addition, subtraction, multiplication, and division.

## Features

- ✓ Addition
- ✓ Subtraction
- ✓ Multiplication
- ✓ Division
- ✓ Type validation
- ✓ Division by zero protection
- ✓ JSDoc documentation

## Installation

No installation required - this is a standalone ES6 module.

## Usage

### As ES6 Module

```javascript
import calculator, { add, subtract, multiply, divide } from './src/calculator.js';

// Using individual functions
const sum = add(5, 3);           // 8
const difference = subtract(10, 4); // 6
const product = multiply(3, 7);   // 21
const quotient = divide(15, 3);   // 5

// Using calculator object
const result1 = calculator.add(2, 2);      // 4
const result2 = calculator.multiply(4, 5); // 20
```

### Examples

```javascript
// Basic operations
add(10, 5);        // Returns 15
subtract(10, 5);   // Returns 5
multiply(10, 5);   // Returns 50
divide(10, 5);     // Returns 2

// Negative numbers
add(-5, 3);        // Returns -2
multiply(-2, -3);  // Returns 6

// Decimals
divide(7, 2);      // Returns 3.5
add(0.1, 0.2);     // Returns 0.30000000000000004 (JavaScript floating point)
```

## Error Handling

The calculator includes robust error handling:

### Division by Zero

```javascript
divide(10, 0); // Throws Error: "Division by zero is not allowed"
```

### Type Validation

All functions validate that inputs are numbers:

```javascript
add('5', 3);      // Throws TypeError: "Both arguments must be numbers"
multiply(null, 2); // Throws TypeError: "Both arguments must be numbers"
```

## API Reference

### `add(a, b)`
Adds two numbers together.

- **Parameters:**
  - `a` (number): The first number
  - `b` (number): The second number
- **Returns:** (number) The sum of a and b
- **Throws:** TypeError if arguments are not numbers

### `subtract(a, b)`
Subtracts the second number from the first.

- **Parameters:**
  - `a` (number): The number to subtract from
  - `b` (number): The number to subtract
- **Returns:** (number) The difference of a and b
- **Throws:** TypeError if arguments are not numbers

### `multiply(a, b)`
Multiplies two numbers together.

- **Parameters:**
  - `a` (number): The first number
  - `b` (number): The second number
- **Returns:** (number) The product of a and b
- **Throws:** TypeError if arguments are not numbers

### `divide(a, b)`
Divides the first number by the second.

- **Parameters:**
  - `a` (number): The dividend
  - `b` (number): The divisor
- **Returns:** (number) The quotient of a and b
- **Throws:** 
  - TypeError if arguments are not numbers
  - Error if divisor is zero

## Testing

Run the basic test suite:

```bash
npm test
```

This will execute the test file located at `tests/calculator.test.js`.

## Implementation Details

- Uses ES6 module syntax (`export`/`import`)
- Written in pure JavaScript (no dependencies)
- Follows JSDoc documentation standards
- Includes comprehensive input validation
- Handles edge cases (division by zero, type checking)

## Development Notes

This calculator was created as part of the agentic workflow demonstration. The implementation:
- Prioritizes clarity and maintainability
- Includes proper error handling
- Uses consistent naming conventions
- Provides both named exports and default export

## Future Enhancements

Potential improvements that could be made:
- Additional operations (power, modulo, square root, etc.)
- Precision handling for floating-point arithmetic
- Support for operation chaining
- History/memory functionality
- Expression parsing (e.g., "2 + 3 * 4")
