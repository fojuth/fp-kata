const curry = require('../src/curry')

const sum = (a, b, c) => a + b + c

describe('curry', () => {
  it('curries a function - (a, b, c)', () => {
    const curriedSum = curry(sum)

    expect(curriedSum(1, 2, 3)).toEqual(6)
  })

  it('curries a function - (a)(b, c)', () => {
    const curriedSum = curry(sum)

    expect(curriedSum(1)(2, 3)).toEqual(6)
  })

  it('curries a function - (a, b)(c)', () => {
    const curriedSum = curry(sum)

    expect(curriedSum(1, 2)(3)).toEqual(6)
  })

  it('curries a function - (a)(b)(c)', () => {
    const curriedSum = curry(sum)

    expect(curriedSum(1)(2)(3)).toEqual(6)
  })
})
