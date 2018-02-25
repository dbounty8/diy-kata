import { humanCatDogYears } from '../src'

// Look Ma, no handlebars!!!
describe('humanCatDogYears', () => {
  it('returns the human year, dog and cat years', () => {
    const expected = ["45", "239", "196"];
    expect(humanCatDogYears('45')).toEqual(expected);
  })
})