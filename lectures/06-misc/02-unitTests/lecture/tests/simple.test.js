function giveMeACat() {
  return 'cat';
}


// param1: name of the test
// param2: cb
test('Check that giveMeACat returns cat', () => {

  expect(giveMeACat()).not.toBe('dog');
});
