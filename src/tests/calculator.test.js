'use strict';

const {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

// --- addition tests ---
test('addition: adds two positive numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('addition: adds negative numbers', () => {
  expect(add(-1, -4)).toBe(-5);
});

test('addition: adds zero', () => {
  expect(add(5, 0)).toBe(5);
});

// --- subtraction tests ---
test('subtraction: subtracts two numbers', () => {
  expect(subtract(10, 3)).toBe(7);
});

test('subtraction: result can be negative', () => {
  expect(subtract(3, 10)).toBe(-7);
});

// --- multiplication tests ---
test('multiplication: multiplies two numbers', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('multiplication: multiplies by zero', () => {
  expect(multiply(4, 0)).toBe(0);
});

test('multiplication: multiplies negative numbers', () => {
  expect(multiply(-3, 4)).toBe(-12);
});

// --- division tests ---
test('division: divides two numbers', () => {
  expect(divide(10, 2)).toBe(5);
});

test('division: returns decimal result', () => {
  expect(divide(7, 2)).toBeCloseTo(3.5);
});

test('division: throws on division by zero', () => {
  expect(() => divide(5, 0)).toThrow('Division by zero');
});

// --- modulo tests ---
test('modulo: returns remainder of two numbers', () => {
  expect(modulo(10, 3)).toBe(1);
});

test('modulo: returns zero when evenly divisible', () => {
  expect(modulo(9, 3)).toBe(0);
});

test('modulo: throws on modulo by zero', () => {
  expect(() => modulo(5, 0)).toThrow('Modulo by zero');
});

// --- power (exponentiation) tests ---
test('power: raises base to exponent', () => {
  expect(power(2, 10)).toBe(1024);
});

test('power: any number to the power of zero is 1', () => {
  expect(power(7, 0)).toBe(1);
});

test('power: handles negative exponent', () => {
  expect(power(2, -1)).toBeCloseTo(0.5);
});

// --- squareRoot tests ---
test('square root: returns correct square root', () => {
  expect(squareRoot(9)).toBe(3);
});

test('square root: returns correct square root for non-perfect square', () => {
  expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
});

test('square root of zero is zero', () => {
  expect(squareRoot(0)).toBe(0);
});

test('square root: throws on negative number', () => {
  expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
});
