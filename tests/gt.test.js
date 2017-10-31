const gt = require('../src/gt')

describe('gt', () => {
  it('is true if first arg is greater than the second', () => {
    expect(gt(2, 1)).toBe(true)
    expect(gt(2)(1)).toBe(true)
  })

  it('is false if first arg is lower than the second', () => {
    expect(gt(2, 3)).toBe(false)
    expect(gt(2)(3)).toBe(false)
  })

  it('is false if first arg is equal to the second', () => {
    expect(gt(2, 2)).toBe(false)
    expect(gt(2)(2)).toBe(false)
  })
})
