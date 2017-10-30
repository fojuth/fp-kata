const subtract = require('../src/subtract')

describe('subtract', () => {
  it('subtracts two values', () => {
    expect(subtract(5, 3)).toBe(2)
  })

  it('subtracts two values (curry)', () => {
    expect(subtract(10)(7)).toBe(3)
  })
})
