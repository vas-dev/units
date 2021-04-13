const convertPrecision = (decimalPlaces = 0) => {
  if (decimalPlaces === 0) return 1
  return 1 / Math.pow(10, decimalPlaces)
}

export { convertPrecision }
