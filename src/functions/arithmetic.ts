import Qty, { Formatter } from 'js-quantities'
import { ArithmeticOptions, UnitArray, UnitObject } from '../types'
import { convertPrecision } from '../utils'

export const base = (
  operation: 'add' | 'sub' | 'mul' | 'div',
  left: UnitObject,
  right: UnitObject,
  maxDecimals = 0,
  formatter?: Formatter
) => {
  const result = Qty(left.value, left.unit)
    [operation](`${right.value} ${right.unit}`)
    .toPrec(convertPrecision(maxDecimals))
  return formatter ? result.format(formatter) : result.scalar
}

const add = (values: UnitArray, opts?: ArithmeticOptions) => {
  const [left, right] = values
  return base('add', left, right, opts?.maxDecimals, opts?.formatter)
}

const subtract = (values: UnitArray, opts?: ArithmeticOptions) => {
  const [left, right] = values
  return base('sub', left, right, opts?.maxDecimals, opts?.formatter)
}

const multiply = (values: UnitArray, opts?: ArithmeticOptions) => {
  const [left, right] = values
  return base('mul', left, right, opts?.maxDecimals, opts?.formatter)
}

const divide = (values: UnitArray, opts?: ArithmeticOptions) => {
  const [left, right] = values
  return base('div', left, right, opts?.maxDecimals, opts?.formatter)
}

export { add, subtract, multiply, divide }
