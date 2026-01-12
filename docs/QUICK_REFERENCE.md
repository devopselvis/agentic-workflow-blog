# Calculator Quick Reference

Fast reference guide for the calculator module.

---

## Import Styles

```javascript
// Named imports (recommended)
import { add, subtract, multiply, divide } from './src/calculator.js';

// Default import (calculator object)
import calculator from './src/calculator.js';

// Mixed
import calculator, { add } from './src/calculator.js';
```

---

## Functions

### add(a, b)
```javascript
add(5, 3)        // → 8
add(-2, 7)       // → 5
add(0.1, 0.2)    // → 0.30000000000000004
```
**Throws**: `TypeError` if arguments not numbers

### subtract(a, b)
```javascript
subtract(10, 3)  // → 7
subtract(5, 8)   // → -3
subtract(-3, -7) // → 4
```
**Throws**: `TypeError` if arguments not numbers

### multiply(a, b)
```javascript
multiply(4, 5)   // → 20
multiply(-3, 6)  // → -18
multiply(0, 100) // → 0
```
**Throws**: `TypeError` if arguments not numbers

### divide(a, b)
```javascript
divide(10, 2)    // → 5
divide(7, 2)     // → 3.5
divide(-15, 3)   // → -5
```
**Throws**: 
- `TypeError` if arguments not numbers
- `Error` if divisor is zero

---

## Error Handling

### Division by Zero
```javascript
try {
  divide(10, 0);
} catch (error) {
  console.error(error.message);
  // → "Division by zero is not allowed"
}
```

### Type Validation
```javascript
try {
  add('5', 3);
} catch (error) {
  console.error(error.message);
  // → "Both arguments must be numbers"
}
```

### Safe Wrapper
```javascript
function safeDivide(a, b, fallback = null) {
  try {
    return divide(a, b);
  } catch (error) {
    return fallback;
  }
}
```

---

## Common Patterns

### Array Sum
```javascript
const sum = numbers.reduce((total, n) => add(total, n), 0);
```

### Average
```javascript
function average(numbers) {
  const sum = numbers.reduce((total, n) => add(total, n), 0);
  return divide(sum, numbers.length);
}
```

### Chaining
```javascript
const result = divide(multiply(add(5, 3), 2), 4);
// ((5 + 3) * 2) / 4 = 4
```

---

## Special Values

### Infinity
```javascript
multiply(1e308, 10)  // → Infinity
add(Infinity, 5)     // → Infinity
```

### NaN (⚠️ Accepted as input)
```javascript
add(NaN, 5)          // → NaN (no error)

// Validate if needed:
if (Number.isNaN(result)) {
  console.log('Invalid result');
}
```

### Floating Point Precision
```javascript
add(0.1, 0.2)        // → 0.30000000000000004

// Round if needed:
Math.round(result * 100) / 100
```

---

## NPM Scripts

```bash
npm test                    # Basic tests (18)
npm run test:all            # All tests (114)
npm run test:comprehensive  # Comprehensive (72)
npm run test:edge          # Edge cases (19)
npm run test:performance   # Benchmarks (5)
npm run examples           # Run examples
```

---

## Performance

| Operation | Speed |
|-----------|-------|
| add() | ~46M ops/sec |
| subtract() | ~47M ops/sec |
| multiply() | ~55M ops/sec |
| divide() | ~83M ops/sec |

---

## Invalid Types (All throw TypeError)

❌ Strings: `'5'`, `'hello'`  
❌ Booleans: `true`, `false`  
❌ Null: `null`  
❌ Undefined: `undefined`  
❌ Objects: `{}`, `{value: 5}`  
❌ Arrays: `[]`, `[1, 2, 3]`

---

## Documentation Links

- [CALCULATOR.md](../CALCULATOR.md) - Main documentation
- [API.md](API.md) - Complete API reference
- [EXAMPLES.md](EXAMPLES.md) - Usage examples
- [CONTRIBUTING.md](CONTRIBUTING.md) - Development guide
- [TEST_SUMMARY.md](../TEST_SUMMARY.md) - Test details

---

*Quick Reference v1.0.0*
