/**
 * Test suite for the calculator module
 */

const { add, subtract, multiply, divide, calculate } = require('../src/calculator');

describe('Calculator Module', () => {
  
  describe('add()', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });

    test('should add decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    test('should add zero correctly', () => {
      expect(add(5, 0)).toBe(5);
      expect(add(0, 5)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });

    test('should throw TypeError for non-number arguments', () => {
      expect(() => add('2', 3)).toThrow(TypeError);
      expect(() => add(2, '3')).toThrow(TypeError);
      expect(() => add(null, 3)).toThrow(TypeError);
      expect(() => add(2, undefined)).toThrow(TypeError);
    });

    test('should throw TypeError for infinite numbers', () => {
      expect(() => add(Infinity, 3)).toThrow(TypeError);
      expect(() => add(2, -Infinity)).toThrow(TypeError);
    });

    test('should throw TypeError for NaN', () => {
      expect(() => add(NaN, 3)).toThrow(TypeError);
      expect(() => add(2, NaN)).toThrow(TypeError);
    });
  });

  describe('subtract()', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(5, -3)).toBe(8);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
    });

    test('should subtract zero correctly', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
      expect(subtract(0, 0)).toBe(0);
    });

    test('should throw TypeError for non-number arguments', () => {
      expect(() => subtract('5', 3)).toThrow(TypeError);
      expect(() => subtract(5, '3')).toThrow(TypeError);
      expect(() => subtract(null, 3)).toThrow(TypeError);
      expect(() => subtract(5, undefined)).toThrow(TypeError);
    });

    test('should throw TypeError for infinite numbers', () => {
      expect(() => subtract(Infinity, 3)).toThrow(TypeError);
      expect(() => subtract(5, -Infinity)).toThrow(TypeError);
    });

    test('should throw TypeError for NaN', () => {
      expect(() => subtract(NaN, 3)).toThrow(TypeError);
      expect(() => subtract(5, NaN)).toThrow(TypeError);
    });
  });

  describe('multiply()', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(2, -3)).toBe(-6);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(0, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(5, 1)).toBe(5);
      expect(multiply(1, 5)).toBe(5);
    });

    test('should throw TypeError for non-number arguments', () => {
      expect(() => multiply('2', 3)).toThrow(TypeError);
      expect(() => multiply(2, '3')).toThrow(TypeError);
      expect(() => multiply(null, 3)).toThrow(TypeError);
      expect(() => multiply(2, undefined)).toThrow(TypeError);
    });

    test('should throw TypeError for infinite numbers', () => {
      expect(() => multiply(Infinity, 3)).toThrow(TypeError);
      expect(() => multiply(2, -Infinity)).toThrow(TypeError);
    });

    test('should throw TypeError for NaN', () => {
      expect(() => multiply(NaN, 3)).toThrow(TypeError);
      expect(() => multiply(2, NaN)).toThrow(TypeError);
    });
  });

  describe('divide()', () => {
    test('should divide two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-6, -3)).toBe(2);
    });

    test('should divide positive by negative', () => {
      expect(divide(6, -3)).toBe(-2);
    });

    test('should divide decimal numbers', () => {
      expect(divide(7.5, 2.5)).toBe(3);
    });

    test('should divide zero by number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw TypeError for non-number arguments', () => {
      expect(() => divide('6', 3)).toThrow(TypeError);
      expect(() => divide(6, '3')).toThrow(TypeError);
      expect(() => divide(null, 3)).toThrow(TypeError);
      expect(() => divide(6, undefined)).toThrow(TypeError);
    });

    test('should throw TypeError for infinite numbers', () => {
      expect(() => divide(Infinity, 3)).toThrow(TypeError);
      expect(() => divide(6, -Infinity)).toThrow(TypeError);
    });

    test('should throw TypeError for NaN', () => {
      expect(() => divide(NaN, 3)).toThrow(TypeError);
      expect(() => divide(6, NaN)).toThrow(TypeError);
    });
  });

  describe('calculate()', () => {
    test('should perform addition using calculate', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should perform subtraction using calculate', () => {
      expect(calculate(5, '-', 3)).toBe(2);
    });

    test('should perform multiplication using calculate', () => {
      expect(calculate(2, '*', 3)).toBe(6);
    });

    test('should perform division using calculate', () => {
      expect(calculate(6, '/', 3)).toBe(2);
    });

    test('should throw error for division by zero', () => {
      expect(() => calculate(5, '/', 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for unsupported operator', () => {
      expect(() => calculate(2, '%', 3)).toThrow('Unsupported operator: %. Use +, -, *, or /');
      expect(() => calculate(2, '^', 3)).toThrow('Unsupported operator');
    });

    test('should throw TypeError for non-string operator', () => {
      expect(() => calculate(2, 1, 3)).toThrow(TypeError);
      expect(() => calculate(2, null, 3)).toThrow(TypeError);
    });

    test('should throw TypeError for non-number operands', () => {
      expect(() => calculate('2', '+', 3)).toThrow(TypeError);
      expect(() => calculate(2, '+', '3')).toThrow(TypeError);
    });

    test('should handle complex calculations', () => {
      expect(calculate(10.5, '+', 5.5)).toBe(16);
      expect(calculate(-10, '-', -5)).toBe(-5);
      expect(calculate(2.5, '*', 4)).toBe(10);
      expect(calculate(15, '/', 3)).toBe(5);
    });
  });
});
