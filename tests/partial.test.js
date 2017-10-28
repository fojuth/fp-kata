const partial = require('../src/partial')

describe('partial', () => {
  it('returns a partially applied function', () => {
    const f = (a, b, c) => a + b + c

    expect(partial(f, [2, 3])(5)).toEqual(10)
  })

  it('returns a partially applied function (different param order)', () => {
    const f = (a, b, c) => a + b + c

    expect(partial(f, [2])(3, 5)).toEqual(10)
  })
})
