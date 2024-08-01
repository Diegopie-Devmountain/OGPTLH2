import { isEven, sum } from "../arithmetic.js";


describe('Testing the isEven function', () => {

  test('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true);
  });

  test('return false for odd numbers', () => {

    expect(isEven(1)).toBe(false);
  });
});

describe('Testing sum function', () => {
  test('adds 1 +2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
  });

  test('negative', () => {
    expect(sum(1,-1)).toBe(0)
  });

  test('object assignment', () => {
    const data = { one: 1 };
    data.two = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});