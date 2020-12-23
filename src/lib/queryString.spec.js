const { queryString } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Jhonattan',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Jhonattan&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Jhonattan',
      abilities: ['JS', 'Angular'],
    };
    expect(queryString(obj)).toBe('name=Jhonattan&abilities=JS,Angular');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Jhonattan',
      abilities: {
        first: 'JS',
        second: 'Angular',
      },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});
