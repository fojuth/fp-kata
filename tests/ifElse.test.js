const ifElse = require('../src/ifElse')
const always = require('../src/always')

const equals3 = ifElse(
  value => value === 3,
  always(5),
  always(10)
)

describe('ifElse', () => {
  it('returns the result of second function passed when condition is met', () => {
    expect(equals3(3)).toBe(5)
  })

  it('returns the result of third function passed when condition is not met', () => {
    expect(equals3(5)).toBe(10)
  })
})
