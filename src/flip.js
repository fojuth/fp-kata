module.exports = f => args => {
  const [firstTwo, rest] = [args.slice(0, 2), args.slice(2)]

  return f(...firstTwo.reverse(), ...rest)
}
