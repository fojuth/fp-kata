/**
 * Does not handle characters, only numbers
 */

const curry = require('./curry')

module.exports = curry(
  (a, b) => a > b
)
