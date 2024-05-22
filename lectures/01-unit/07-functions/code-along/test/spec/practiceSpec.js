describe('isGreaterThanTwenty', () => {
  it('isGreaterThanTwenty function should exist', () => {
    expect(isGreaterThanTwenty).toBeDefined();
    expect(typeof isGreaterThanTwenty).toBe('function');
  });
  it('should return the correct boolean value', () => {
    expect(isGreaterThanTwenty(21)).toBe(true);
    expect(isGreaterThanTwenty(20)).toBe(false);
  });
});

describe('seven', () => {
  it('function should exist', () => {
    expect(seven).toBeDefined();
    expect(typeof seven).toBe('function');
  });
  it('should return the number 7', () => {
    expect(seven()).toBe(7);
    expect(typeof seven()).toBe('number');
  });
});

describe('rewrite functions', () => {
  it('addNums function should exist and return the correct value', () => {
    expect(addNums).toBeDefined();
    expect(typeof addNums).toBe('function');
    expect(addNums(1, 2)).toBe(3);
  });
  it('subtractNums function should exist and return the correct value', () => {
    expect(subtractNums).toBeDefined();
    expect(typeof subtractNums).toBe('function');
    expect(subtractNums(2, 1)).toBe(1);
  });
  it('double function should exist and return the correct value', () => {
    expect(double).toBeDefined();
    expect(typeof double).toBe('function');
    expect(double(2)).toBe(4);
  });
});

describe('gemInfo', () => {
  it('function should exist', () => {
    expect(gemInfo).toBeDefined();
    expect(typeof gemInfo).toBe('function');
  });
  it('should return an object with gemType, gemSize and gemWeight properties', () => {
    const result = gemInfo('diamond', 12, 14);
    expect(result.gemType).toBe('diamond');
    expect(result.gemSize).toBe(12);
    expect(result.gemWeight).toBe(14);
  });
});

describe('outerFn', function () {
  it('outerFn should exist', function () {
    expect(outerFn).toBeDefined();
    expect(typeof outerFn).toBe('function');
  });

  it('Correctly invokes inner function', () => {
    expect(outerFn(innerFn)).toBe('The innerFn is a callback!');
  });
});

describe('fullName', function () {
  it('fullName should exist', function () {
    expect(fullName).toBeDefined();
    expect(typeof fullName).toBe('function');
  });

  it('Correctly executes callback', () => {
    expect(fullName('First', 'Last', welcomeMessage)).toBe('Welcome to DevMountain, First Last!');
  });
});

describe('canDrink', function () {
  it(`canDrink should exist`, function () {
    expect(canDrink).toBeDefined();
    expect(typeof canDrink).toBe('function');
  });
  it('returns correct value', () => {
    expect(canDrink(12, drinkSoda, drinkAlcohol)).toBe(
      'Come back when you are legally allowed a drink!',
    );
  });
  it('returns correct value', () => {
    expect(canDrink(22, drinkSoda, drinkAlcohol)).toBe('Drink responsibly!');
  });
});

describe('calculator', function () {
  it(`add should exist`, function () {
    expect(add).toBeDefined();
    expect(typeof add).toBe('function');
  });
  it(`multiply should exist`, function () {
    expect(multiply).toBeDefined();
    expect(typeof multiply).toBe('function');
  });
  it(`math should exist`, function () {
    expect(math).toBeDefined();
    expect(typeof math).toBe('function');
  });
  it('returns correct value', () => {
    expect(math(2, 5, add)).toBe(7);
  });
  it('returns correct value', () => {
    expect(math(2, 5, multiply)).toBe(10);
  });
});

describe('evenNumbers', () => {
  it('should exist', () => {
    expect(evenNumbers).toBeDefined();
  });
  it('should be an array', () => {
    expect(evenNumbers.length).toBeDefined();
  });
  it('should have 8 elements', () => {
    expect(evenNumbers.length).toBe(8);
  });
  it('should have the correct elements', () => {
    expect(evenNumbers.sort().toString()).toBe([6, 2, 6, 8, 4, 2, 8, 4].sort().toString());
  });
});

describe('postTaxPrices', () => {
  it('should exist', () => {
    expect(postTaxPrices).toBeDefined();
  });
  it('should be an array', () => {
    expect(postTaxPrices.length).toBeDefined();
  });
  it('should have 9 elements', () => {
    expect(postTaxPrices.length).toBe(9);
  });
  it('should have the correct prices', () => {
    let incorrect = [
      16.05, 24.610000000000003, 83.46000000000001, 36.38, 12.84, 92.02000000000001, 12.84, 84.53,
      34.24,
    ].reduce((p, e, i) => p || Math.abs(e - postTaxPrices[i]) > 0.02, false);
    expect(incorrect).toBe(false);
  });
});

describe('totalPopulation', () => {
  it('should exist', () => {
    expect(totalPopulation).toBeDefined();
  });
  it('should have the correct total', () => {
    expect(totalPopulation).toBe(16763615);
  });
});

describe('myStrongest', () => {
  it('should exist', () => {
    expect(myStrongest).toBeDefined();
  });
  it('should be an array', () => {
    expect(myStrongest.length).toBeDefined();
  });
  it('should have 9 elements', () => {
    expect(myStrongest.length).toBe(9);
  });
  it('should have the correct monsters', () => {
    expect(
      myStrongest
        .map((e) => e.monster)
        .sort()
        .toString(),
    ).toEqual(
      monstersInYourPocket
        .filter((e) => e.CP > 200)
        .map((e) => e.monster)
        .sort()
        .toString(),
    );
    expect(
      myStrongest
        .map((e) => e.CP)
        .sort()
        .toString(),
    ).toEqual(
      monstersInYourPocket
        .filter((e) => e.CP > 200)
        .map((e) => e.CP)
        .sort()
        .toString(),
    );
  });
});

describe('getAges', () => {
  const people = [
    { name: 'Joe', age: 35 },
    { name: 'Heather', age: 42 },
    { name: 'Barry', age: 60 },
  ];
  it('should return an array of ages', () => {
    const result = getAges(people);
    expect(result).toEqual([35, 42, 60]);
  });
});
