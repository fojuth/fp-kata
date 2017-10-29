const pipe = require('../src/pipe')

const doMath = pipe(Math.pow, Math.abs)

describe('pipe', () => {
  it('pipes the input through all functions and returns the result', () => {
    expect(doMath(-2, 3)).toBe(8)
  })
})
