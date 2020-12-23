const { sum } = require('./calculator');

it('should sum 2 and 2 and result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error if what is provider to the method cannot to be summed', () => {
  expect(() => {
    return sum('', 2);
  }).toThrowError();

  expect(() => {
    return sum([2, 2]);
  }).toThrowError();

  expect(() => {
    return sum({});
  }).toThrowError();

  expect(() => {
    return sum({});
  }).toThrowError();
});
