# Contributing to Calculator Module

Thank you for your interest in contributing to the calculator module! This guide will help you understand the development process and standards.

---

## Table of Contents

- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Code Standards](#code-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation Standards](#documentation-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Development Setup

### Prerequisites

- Node.js 12.0.0 or higher (ES6 module support required)
- npm (comes with Node.js)
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd calculator
   ```

2. **Install dependencies** (if any are added in the future)
   ```bash
   npm install
   ```

3. **Run tests to verify setup**
   ```bash
   npm test           # Run basic tests
   npm run test:all   # Run all test suites
   ```

4. **Try the examples**
   ```bash
   npm run examples
   ```

---

## Project Structure

```
calculator/
├── src/
│   └── calculator.js           # Main calculator module
├── tests/
│   ├── calculator.test.js              # Original test suite (18 tests)
│   ├── calculator.comprehensive.test.js # Comprehensive tests (72 tests)
│   ├── calculator.edge.test.js         # Edge case tests (19 tests)
│   ├── calculator.performance.test.js  # Performance benchmarks (5 tests)
│   └── run-all-tests.js               # Master test runner
├── docs/
│   ├── API.md                 # API reference documentation
│   ├── EXAMPLES.md            # Usage examples
│   └── CONTRIBUTING.md        # This file
├── examples.js                # Example usage demonstrations
├── package.json              # Project metadata and scripts
├── README.md                 # Main documentation
├── TEST_SUMMARY.md           # Comprehensive test documentation
└── HANDOFF_TO_DOCUMENT_AGENT.md  # Testing phase summary
```

---

## Code Standards

### JavaScript Style

We follow these conventions:

1. **ES6 Modules**: Use `import`/`export` syntax
2. **Named Exports**: Export functions individually
3. **Default Export**: Provide a calculator object as default
4. **Pure Functions**: Functions should not have side effects
5. **Type Validation**: Always validate input types

### Code Example

```javascript
/**
 * Function description
 * @param {number} a - Parameter description
 * @param {number} b - Parameter description
 * @returns {number} Return value description
 * @throws {TypeError} When to throw TypeError
 * @throws {Error} When to throw Error
 */
export function functionName(a, b) {
  // Type validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  
  // Additional validation if needed
  if (/* invalid condition */) {
    throw new Error('Specific error message');
  }
  
  // Implementation
  return a + b;
}
```

### JSDoc Standards

All public functions must include JSDoc comments with:

- Function description
- `@param` for each parameter with type and description
- `@returns` with return type and description
- `@throws` for each possible exception
- `@example` for complex functions (optional but recommended)

---

## Testing Guidelines

### Test Organization

Tests are organized into four categories:

1. **Basic Tests** (`calculator.test.js`)
   - Core functionality
   - Basic error cases
   - Quick smoke tests

2. **Comprehensive Tests** (`calculator.comprehensive.test.js`)
   - All operations with various inputs
   - Complete type validation
   - Special numeric values

3. **Edge Case Tests** (`calculator.edge.test.js`)
   - Mathematical properties
   - Precision edge cases
   - Complex scenarios

4. **Performance Tests** (`calculator.performance.test.js`)
   - Operation speed benchmarks
   - Performance regression detection

### Writing Tests

#### Test Structure

```javascript
// Test file header
console.log('\n' + '='.repeat(60));
console.log('Test Suite Name');
console.log('='.repeat(60));

let passed = 0;
let failed = 0;

// Test helper
function test(description, fn) {
  try {
    fn();
    console.log(`✅ ${description}`);
    passed++;
  } catch (error) {
    console.log(`❌ ${description}`);
    console.log(`   Error: ${error.message}`);
    failed++;
  }
}

// Assertion helper
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

// Test cases
test('should add two positive numbers', () => {
  assert(add(2, 3) === 5, 'Expected 2 + 3 to equal 5');
});

// Summary
console.log('\n' + '-'.repeat(60));
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log('='.repeat(60));
```

#### Test Coverage Checklist

When adding new functionality, ensure tests cover:

- ✅ Happy path (normal inputs)
- ✅ Edge cases (boundary values)
- ✅ Error cases (invalid inputs)
- ✅ Type validation
- ✅ Special values (0, negative numbers, Infinity, NaN)
- ✅ Mathematical properties (if applicable)

### Running Tests

```bash
# Run individual test suites
npm test                    # Basic tests (18 tests)
npm run test:comprehensive  # Comprehensive tests (72 tests)
npm run test:edge          # Edge case tests (19 tests)
npm run test:performance   # Performance benchmarks (5 tests)

# Run all tests
npm run test:all           # All 114 tests with comprehensive report
```

### Test Requirements

All contributions that modify functionality must:

1. Include tests for new features
2. Update existing tests if behavior changes
3. Maintain or improve test coverage
4. Pass all existing tests
5. Document any expected test failures (e.g., NaN limitation)

---

## Documentation Standards

### Code Documentation

- **JSDoc**: All public functions must have JSDoc comments
- **Inline Comments**: Use for complex logic only
- **Self-Documenting Code**: Prefer clear naming over excessive comments

### User Documentation

When adding features, update:

1. **API.md**: Add function documentation with:
   - Signature
   - Parameters table
   - Return value
   - Exceptions
   - Examples
   - Mathematical properties (if applicable)

2. **EXAMPLES.md**: Add practical examples showing:
   - Basic usage
   - Common patterns
   - Error handling
   - Real-world scenarios

3. **README.md**: Update if:
   - Installation process changes
   - New dependencies are added
   - Quick start guide needs updates

### Documentation Style

- Use clear, concise language
- Include code examples for all concepts
- Show both correct usage and common mistakes
- Mark warnings with ⚠️ emoji
- Mark successes with ✅ emoji
- Mark failures with ❌ emoji

---

## Commit Guidelines

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `refactor`: Code refactoring (no functional changes)
- `perf`: Performance improvements
- `chore`: Build process or auxiliary tool changes

### Examples

```
feat: add modulo operation

Implement modulo operation with type validation and
division by zero protection.

Closes #123
```

```
test: add edge cases for division

Add tests for division with very large numbers,
negative zero, and infinity.
```

```
docs: update API reference for multiply function

Add examples of multiplication with negative numbers
and special values.
```

### Commit Best Practices

- Keep commits focused on a single change
- Write meaningful commit messages
- Reference issue numbers when applicable
- Test before committing

---

## Pull Request Process

### Before Submitting

1. **Run all tests**
   ```bash
   npm run test:all
   ```

2. **Verify examples work**
   ```bash
   npm run examples
   ```

3. **Update documentation**
   - Update API.md if function signatures change
   - Add examples to EXAMPLES.md
   - Update README.md if installation or usage changes

4. **Review your changes**
   ```bash
   git diff
   ```

### Pull Request Template

```markdown
## Description
Brief description of the changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] All existing tests pass
- [ ] New tests added for new functionality
- [ ] Examples updated/verified
- [ ] Documentation updated

## Checklist
- [ ] Code follows project style guidelines
- [ ] JSDoc comments added/updated
- [ ] Commit messages follow guidelines
- [ ] No console.log statements in production code
- [ ] Breaking changes documented
```

### Review Process

1. Submit pull request with clear description
2. Ensure CI/CD tests pass (if configured)
3. Address reviewer feedback
4. Squash commits if requested
5. Wait for approval and merge

---

## Adding New Operations

If you want to add a new operation (e.g., `modulo`, `power`), follow this checklist:

### 1. Implement the Function

```javascript
/**
 * Calculates the remainder of division
 * @param {number} a - The dividend
 * @param {number} b - The divisor
 * @returns {number} The remainder of a divided by b
 * @throws {TypeError} If arguments are not numbers
 * @throws {Error} If divisor is zero
 */
export function modulo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a % b;
}
```

### 2. Add to Calculator Object

```javascript
const calculator = {
  add,
  subtract,
  multiply,
  divide,
  modulo  // Add new operation
};
```

### 3. Write Comprehensive Tests

```javascript
// In calculator.comprehensive.test.js
test('modulo should calculate remainder correctly', () => {
  assert(modulo(10, 3) === 1);
  assert(modulo(15, 4) === 3);
});

test('modulo should handle negative numbers', () => {
  assert(modulo(-10, 3) === -1);
  assert(modulo(10, -3) === 1);
});

test('modulo should throw on division by zero', () => {
  assert.throws(() => modulo(10, 0));
});
```

### 4. Update Documentation

- Add function to **docs/API.md**
- Add examples to **docs/EXAMPLES.md**
- Update README.md if needed

### 5. Update package.json

Update version number if this is a new feature:

```json
{
  "version": "1.1.0"  // Increment minor version for new feature
}
```

---

## Performance Considerations

### Benchmarking

When optimizing, always benchmark:

```javascript
// In calculator.performance.test.js
test('Benchmark: new operation', () => {
  const iterations = 100000;
  const start = Date.now();
  
  for (let i = 0; i < iterations; i++) {
    modulo(100, 7);
  }
  
  const end = Date.now();
  const duration = end - start;
  const opsPerSec = (iterations / duration) * 1000;
  
  console.log(`   Performance: ${opsPerSec.toFixed(2)} ops/sec`);
});
```

### Performance Standards

Operations should maintain:
- At least 10 million operations per second
- No performance degradation from previous versions
- Consistent performance across different input ranges

---

## Questions or Issues?

- **Questions**: Open a GitHub issue with the `question` label
- **Bugs**: Open a GitHub issue with the `bug` label and include:
  - Steps to reproduce
  - Expected behavior
  - Actual behavior
  - Test case demonstrating the issue
- **Features**: Open a GitHub issue with the `enhancement` label

---

## Code of Conduct

- Be respectful and professional
- Provide constructive feedback
- Focus on the code, not the person
- Help maintain a welcoming community

---

Thank you for contributing to the calculator module! 🎉

---

*Last Updated: Documentation Phase*  
*Version: 1.0.0*
