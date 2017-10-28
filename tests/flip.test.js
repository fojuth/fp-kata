const flip = require('../src/flip')

const concat = (...args) => args.join(',')

describe('flip', () => {
  it('returns joined values with first two args flipped', () => {
    expect(flip(concat)([1, 2, 3, 4])).toBe('2,1,3,4')
  })
})
