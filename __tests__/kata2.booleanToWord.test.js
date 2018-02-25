import { booleanToWord } from '../src'

describe('booleanToWord', () => {
  // how do we create specs again???
  it('returns yes when passed true and no when passed false', () => {
    expect(booleanToWord(true)).toBe('yes');
    expect(booleanToWord(false)).toBe('no');
  });
})
