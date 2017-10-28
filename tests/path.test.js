const path = require('../src/path')

describe('path', () => {
  it('returns value of the given path', () => {
    const o = {
      foo: {
        bar: {
          baz: 42
        }
      }
    }

    expect(path(['foo', 'bar', 'baz'], o)).toBe(42)
  })

  it('returns undefined if the path is not resolved', () => {
    const o = {
      foo: {
        bar: {
          baz: 42
        }
      }
    }

    expect(path(['nope', 'bar'], o)).toBe(undefined)
  })
})
