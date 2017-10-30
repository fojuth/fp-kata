const add = require('../src/add')

describe('add', () => {
  it('adds two values', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('adds two values (curry)', () => {
    expect(add(7)(10)).toBe(17)
  })
})
