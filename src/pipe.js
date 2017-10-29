// FIXME: refactor and simplify

const ifElse = require('./ifElse')
const prop = require('./prop')

const splitArrayAt = (array, index = 1) => [array.slice(0, index), array.slice(index)]

const callFunction = (func, args) => funcs => {
  const [f, rest] = splitArrayAt(funcs)

  return callFunctionRecursive(...f, func(...args))(...rest)
}

const callFunctionRecursive = (func, ...args) => (...funcs) => (
  ifElse(
    funcs => prop('length', funcs), // FIXME: update once prop is curried
    callFunction(func, args),
    () => func(...args)
  )(funcs)
)

module.exports = (...funcs) => (...args) => {
  const [f, rest] = splitArrayAt(funcs)

  return callFunctionRecursive(...f, ...args)(...rest)
}
