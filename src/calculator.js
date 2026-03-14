/**
 * Node.js CLI Calculator App
 *
 * Supports the following arithmetic operations:
 *   - addition
 *   - subtraction
 *   - multiplication
 *   - division
 *   - modulo
 *   - power (exponentiation)
 *   - squareRoot
 */

/**
 * addition: Returns the sum of a and b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * subtraction: Returns the difference of a and b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}

/**
 * multiplication: Returns the product of a and b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * division: Returns the quotient of a divided by b.
 * Throws an error if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

/**
 * modulo: Returns the remainder of a divided by b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

/**
 * power: Returns base raised to the exponent.
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * squareRoot: Returns the square root of n.
 * Throws an error if n is negative.
 * @param {number} n
 * @returns {number}
 */
function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);
  const op = args[1];

  // sqrt only requires one operand: <number> sqrt
  const isSqrt = op === 'sqrt';

  if (isSqrt ? args.length < 2 : args.length !== 3) {
    console.error('Usage: node calculator.js <number> <operator> <number>');
    console.error('       node calculator.js <number> sqrt');
    console.error('Operators: +, -, *, /, %, ^, sqrt');
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  if (isNaN(a)) {
    console.error('Error: first argument must be a number');
    process.exit(1);
  }

  let result;
  if (isSqrt) {
    result = squareRoot(a);
  } else {
    const b = parseFloat(args[2]);
    if (isNaN(b)) {
      console.error('Error: third argument must be a number');
      process.exit(1);
    }
    switch (op) {
      case '+': result = add(a, b); break;
      case '-': result = subtract(a, b); break;
      case '*': result = multiply(a, b); break;
      case '/': result = divide(a, b); break;
      case '%': result = modulo(a, b); break;
      case '^': result = power(a, b); break;
      default:
        console.error(`Unknown operator: ${op}`);
        process.exit(1);
    }
  }

  console.log(result);
}
