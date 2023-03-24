import { describe, expect, it, test } from 'vitest';

import { check13DigitsBeginning, has10or13Digits, removeDashesAndSpaces, ISBN } from './model/ISBN';

describe('ISBN', () => {
  // it.each([{ ISBN: new ISBN('0123456789'), expected: true }])('Should have 10 or 13 dig', function ({ ISBN, expected }) {
  //   const res = ISBN.has10or13Digits('01234567"89');
  //   expect(res).toBe(expected);
  // });
  //
  // it('Should not have 6 digits', () => {
  //   expect(has 10or13Digits('123456')).toBe(false);
  // });
  //
  // it('Should start with 978 or 979 if 13 digits', () => {
  //   expect(check13DigitsBeginning('9784567890123')).toBe(true);
  //   expect(check13DigitsBeginning('9794567890123')).toBe(true);
  //   expect(check13DigitsBeginning('9774567890123')).toBe(false);
  //   expect(check13DigitsBeginning('979')).toBe(false);
  // });
  //
  // it('Should remove spaces or dashes', () => {
  //   expect(removeDashesAndSpaces('978-123-456 4569')).toBe('9781234564569');
  // });

  it.each([{ chainString: '7897' }, { chainString: '9770123456789' }, { chainString: 'ABC123456789' }])(
    'Should throw an error if invalid entry',
    function ({ chainString }) {
      expect(() => {
        const codeBarre = new ISBN(chainString);
      }).toThrow('Wrong entry');
    }
  );

  it('Should create a instance of ISBN', () => {
    expect(new ISBN('9781234567890')).toBeInstanceOf(ISBN);
  });
});
