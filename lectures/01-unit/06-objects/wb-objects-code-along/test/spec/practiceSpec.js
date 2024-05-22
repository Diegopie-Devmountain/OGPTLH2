// Helper function to count the number of properties on an object.
const countObjectProperties = (obj) => Object.keys(obj).length;

describe('Objects Code Along', function () {
  describe('personName - dot notation', function () {
    it('returns the correct property', () => {
      expect(personName()).toBe('Sally');
    });
  });
  describe('personLocation - bracket notation', function () {
    it('Returns the correct property', () => {
      expect(personLocation()).toBe('Orem, UT');
    });
  });
  describe('backpack - add new property', function () {
    it('has the correct property', () => {
      expect(backpack.frontPocket).toBe('compass');
    });
  });
  describe('userFirstName - assign property to variable', function () {
    it('userFirstName variable exists', function () {
      expect(userFirstName).toBeDefined();
    });
    it('userFirstName variable has correct value', function () {
      expect(userFirstName).toBe('sally');
    });
  });
  describe('update user', function () {
    const someUser = {
      name: 'Sally Rally',
      pwHash: 'U+Ldlngx2BYQk',
      username: 'SallyRally801',
    };
    updateUser(someUser);
    it('correctly modifies name property', function () {
      expect(someUser.name).toBe('Ryan');
    });
    it('correctly modifies pwHash property', function () {
      expect(someUser.pwHash).toBe('superSafe');
    });
    it('correctly modifies username property', function () {
      expect(someUser.username).toBe('ryan2020');
    });
  });
  describe('update profile', function () {
    const userProfile = {
      email: 'test@google.com',
      pwHash: 'V-9n5bQyu81z0',
      location: 'Denver, CO',
    };
    updateProfile(userProfile, 'email', 'blah@yahoo.com');
    it('correctly updates email property', function () {
      expect(userProfile.email).toBe('blah@yahoo.com');
    });
  });

  describe('maxedOut', () => {
    const obj = {
      one: false,
      two: true,
      three: 0,
      four: 'happy',
    };
    const returned = maxedOut(obj);
    it('function exists and returns an obj', () => {
      expect(returned).toBeDefined();
      expect(typeof returned).toBe('object');
    });
    maxedOut(obj);
    it(`should change all key-value pairs to be "max"`, () => {
      expect(obj.one).toBe('max');
      expect(obj.two).toBe('max');
      expect(obj.three).toBe('max');
      expect(obj.four).toBe('max');
      expect(countObjectProperties(obj)).toBe(4);
    });
  });

  describe('stateLooper', () => {
    const original = { ...state };
    it('original object should exist', () => {
      expect(original.utah).toBe(2942902);
      expect(original.texas).toBe(26956958);
      expect(original.california).toBe(38802500);
    });
    stateLooper(state);
    it('should change state populations greater than 3,000,000 to 0', () => {
      expect(state.utah).toBe(2942902);
      expect(state.texas).toBe(0);
      expect(state.california).toBe(0);
    });
  });

  describe('cleanUser', () => {
    const obj = {
      one: false,
      two: true,
      three: 0,
      four: 'happy',
    };
    cleanUser(obj);
    it('should remove all falsy key-value pairs', () => {
      expect(countObjectProperties(obj)).toBe(2);
      expect(obj.two).toBe(true);
      expect(obj.four).toBe('happy');
    });
  });

  describe('getValues', () => {
    const obj = {
      one: false,
      two: true,
      three: 0,
      four: 'happy',
    };

    it('should remove all falsy key-value pairs', () => {
      const values = getValues(obj);
      expect(values).toEqual([false, true, 0, 'happy']);
    });
  });

  describe('copyArray', () => {
    const arr = ['aardvark', 'bear', 'cat', 'dog'];
    it('should copy the array and append "copy" to the end', () => {
      const copy = copyArray(arr);
      expect(copy).toEqual(['aardvark', 'bear', 'cat', 'dog', 'copy']);
    });
  });

  describe('copyObject', () => {
    const obj = { one: 1, two: 2, three: 3 };
    it('should copy the array and add new key value pair to the end', () => {
      const copy = copyObject(obj);
      expect(copy).toEqual({ one: 1, two: 2, three: 3, copy: true });
    });
  });

  describe('animalCount', () => {
    it('newly destructured variables should exist and have the correct values', () => {
      expect(cats).toBeDefined();
      expect(cats).toBe(2);
      expect(dogs).toBeDefined();
      expect(dogs).toBe(5);
      expect(mice).toBeDefined();
      expect(mice).toBe(0);
    });
  });

  describe('addition', () => {
    it('addition function should exist', () => {
      expect(addition).toBeDefined();
      expect(typeof addition).toBe('function');
    });
    it('should use destructured variables to return the result of adding num2 to num1', () => {
      const example = [4, 9];
      const exampleTwo = [7, 11, -28];
      expect(addition(example)).toBe(13);
      expect(addition(exampleTwo)).toBe(18);
    });
  });

  describe('zooAnimals', () => {
    it('zooAnimals function should exist', () => {
      expect(zooAnimals).toBeDefined();
      expect(typeof zooAnimals).toBe('function');
    });
    it('should use destructured variables to return the sum of animal counts', () => {
      const example = { lion: 12, tiger: 6, bear: 2 };
      const exampleTwo = { lion: 12, tiger: 1, bear: 15 };
      expect(zooAnimals(example)).toBe(20);
      expect(zooAnimals(exampleTwo)).toBe(28);
    });
  });

  describe('greeting', () => {
    it('greeting function should exist', () => {
      expect(greeting).toBeDefined();
      expect(typeof greeting).toBe('function');
    });
    it('should use destructured variables to return the correct string', () => {
      const example = { title: 'Dr.', name: 'Watson' };
      const exampleTwo = { title: 'Mr.', name: 'Holmes' };
      expect(greeting(example)).toBe('Hello, Dr. Watson!');
      expect(greeting(exampleTwo)).toBe('Hello, Mr. Holmes!');
    });
  });
});
