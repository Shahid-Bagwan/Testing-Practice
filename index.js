function stringLength(string) {
  return string.length;
}

test('stringLength returns the correct character count', () => {
  expect(stringLength('hello')).toBe(5);
  expect(stringLength('')).toBe(0);
  expect(stringLength('abcdefghij')).toBe(10);
});

function stringLength(string) {
  const length = string.length;
  if (length === 0) {
    throw new Error('String must not be empty');
  }
  if (length > 10) {
    throw new Error('String must not be longer than 10 characters');
  }
  return length;
}

test('stringLength throws an error for invalid string length', () => {
  expect(() => stringLength('')).toThrow('String must not be empty');
  expect(() => stringLength('abcdefghijklmnopqrstuvwxyz')).toThrow('String must not be longer than 10 characters');
});

// Task 2 - reverseString function
function reverseString(string) {
  return string.split('').reverse().join('');
}

test('reverseString returns the string reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('')).toBe('');
  expect(reverseString('abcdef')).toBe('fedcba');
});

// Task 3 - Simple Calculator class
class SimpleCalculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

// Test for Simple Calculator methods
describe('Simple Calculator', () => {
  const calculator = new SimpleCalculator();

  describe('add', () => {
    test('should return the correct sum', () => {
      expect(calculator.add(3, 5)).toBe(8);
      expect(calculator.add(10, -2)).toBe(8);
    });
  });

  describe('subtract', () => {
    test('should return the correct difference', () => {
      expect(calculator.subtract(10, 3)).toBe(7);
      expect(calculator.subtract(5, 5)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should return the correct quotient', () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(8, 4)).toBe(2);
    });

    test('should throw an error for division by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('multiply', () => {
    test('should return the correct product', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
      expect(calculator.multiply(-2, 5)).toBe(-10);
    });
  });
});

// Task 4 - capitalize function
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Test for capitalize function
test('capitalize capitalizes the first character of the string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('test')).toBe('Test');
});
