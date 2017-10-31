const reverse = require('./reverse')
const curry = require('./curry')

module.exports = curry(
  (f, args) => {
    const [firstTwo, rest] = [args.slice(0, 2), args.slice(2)]

    return f(...reverse(firstTwo), ...rest)
  }
)
