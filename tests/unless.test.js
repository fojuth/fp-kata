const unless = require('../src/unless')
const always = require('../src/always')
const isNil = require('../src/isNil')

const times4 = value => value * 4

const multiplyBy4 = unless(
  isNil,
  times4
)

describe('unless', () => {
  it('returns the result of passed function unless the condition is met', () => {
    expect(multiplyBy4(3)).toBe(12)
  })

  it('returns unchanged input unless condition is not met', () => {
    expect(multiplyBy4(null)).toBe(null)
  })
})
