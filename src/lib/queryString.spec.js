import { queryString, parse } from './queryString';

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

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Jhonattan&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Jhonattan',
      profession: 'developer',
    });
  });

  it('should convert a query string  of a single ky-value to object', () => {
    const qs = 'name=Jhonattan';

    expect(parse(qs)).toEqual({
      name: 'Jhonattan',
    });
  });

  it('should convert a query string to an object taking care of comma separated values', () => {
    const qs = 'name=Jhonattan&abilities=JS,Angular';

    expect(parse(qs)).toEqual({
      name: 'Jhonattan',
      abilities: ['JS', 'Angular'],
    });
  });
});
