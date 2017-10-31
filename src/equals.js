/**
 * Does not handle other types than Number
 */

const curry = require('./curry')

module.exports = curry(
  (a, b) => a === b
)
