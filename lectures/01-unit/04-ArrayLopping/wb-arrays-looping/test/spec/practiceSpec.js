describe('Arrays/Looping Code Along', function () {
  describe('first item in array', function () {
    const arr = [1, 2, 3];
    it('Returns the first item of the array', () => {
      expect(first(arr)).toBe(1);
    });
  });
  describe('length of array', function () {
    const arr = [1, 2, 3];
    it('Returns the length of the array', () => {
      expect(getLength(arr)).toBe(3);
    });
  });
  describe('last item in array', function () {
    const arr = [1, 2, 3];
    it('Returns the last item in the array', () => {
      expect(last(arr)).toBe(3);
    });
  });
  describe('add item to array', function () {
    const arr = [1, 2, 3];
    it('Adds given item to given array', () => {
      expect(addItem(arr, 4)).toEqual([1, 2, 3, 4]);
    });
  });
  describe('remove last item from array', function () {
    it('Removes the last item from the given array', () => {
      const arr = [1, 2, 3];
      expect(removeLast(arr)).toEqual([1, 2]);
    });
  });
  describe('remove first item from array', function () {
    const arr = [1, 2, 3];
    it('removes correct item', () => {
      expect(removeFirst(arr)).toEqual([2, 3]);
    });
  });
  describe('replace first and last item with 42', function () {
    const arr = [0, 1, 2];
    it('Correctly replaces items', () => {
      expect(replaceFirstAndLast(arr)).toEqual([42, 1, 42]);
    });
  });
  describe('add 10', function () {
    const arr = [10, 20, 30];
    it('should add 10 to each item', function () {
      expect(addTen(arr)).toEqual([20, 30, 40]);
    });
  });
  describe('0 to 31 in array', function () {
    const arr = [...Array(32).keys()];
    it('Correctly populates array', function () {
      expect(count31()).toEqual(arr);
    });
  });
  describe('0 to 20 evens', function () {
    const arr = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    it('Correctly populates array', function () {
      expect(countEvens()).toEqual(arr);
    });
  });
  describe('countdown', function () {
    const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    it('Correctly populates array', function () {
      expect(countdown()).toEqual(arr);
    });
  });
  describe('reverse array', function () {
    const arr1 = [0, 1, 2, 3];
    const arr2 = [true, false];
    const arr3 = ['first', 'last'];

    it('Correctly reverses first array', () => {
      expect(backwards(arr1)).toEqual(arr1.reverse());
    });
    it('Correctly reverses second array', () => {
      expect(backwards(arr2)).toEqual(arr2.reverse());
    });
    it('Correctly reverses third array', () => {
      expect(backwards(arr3)).toEqual(arr3.reverse());
    });
  });

  describe('findInArray', function () {
    const arr = [1, 2, 3, 4];

    it('Correctly finds item', () => {
      expect(findInArray(arr, 4)).toBe(true);
    });
    it('Correctly says item could not be found', () => {
      expect(findInArray(arr, 5)).toBe(false);
    });
  });

  describe('stopAtNegative', function () {
    it('adds all numbers to array until encountering a negative', () => {
      expect(stopAtNegative([5, 2, 9, -4, 8, -3, 1])).toEqual([5, 2, 9]);
    });
    it('returns empty array if first number is negative', () => {
      expect(stopAtNegative([-3, 4, 5, 6, -7, 8])).toEqual([]);
    });
    it('returns entire array if no numbers are negative', () => {
      expect(stopAtNegative([3, 1, 4, 2])).toEqual([3, 1, 4, 2]);
    });
  });
});
