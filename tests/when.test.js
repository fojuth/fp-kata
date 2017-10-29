const when = require('../src/when')
const always = require('../src/always')

const isLowerThan10 = value => value < 10
const times4 = value => value * 4

const multiplySmallNumbers = when(
  isLowerThan10,
  times4
)

describe('when', () => {
  it('returns the result of onTrue function when condition is met', () => {
    expect(multiplySmallNumbers(3)).toBe(12)
  })

  it('returns unchanged input when condition is not met', () => {
    expect(multiplySmallNumbers(11)).toBe(11)
  })
})
