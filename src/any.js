const curry = require('./curry')

module.exports = curry(
  (f, array) => array.filter(f).length > 0
)
