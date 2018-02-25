import { numberToReversedDigits } from '../src'

describe('numberToReversedDigits', () => {
  it('returns a reversed array of the number\'s digits', () => {
    const expected = ["5", "4", "3", "2", "1"];
    expect(numberToReversedDigits('12345')).toEqual(expected);
  })
})
