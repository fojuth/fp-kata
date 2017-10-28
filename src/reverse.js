const reverseString = string => (
  string.split('')
    .reverse()
    .join('')
)

module.exports = input => typeof input === 'string' ? reverseString(input) : input.reverse()
