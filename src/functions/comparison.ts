import Qty from 'js-quantities'
import { UnitObject, Units } from '../types'

type CompareOperations = 'eq' | 'same' | 'lt' | 'lte' | 'gt' | 'gte' | 'compareTo'

export const baseCompare = (qty1: Qty, qty2: Qty, operation: CompareOperations) => {
  return qty1[operation](qty2)
}

const eq = (values: UnitObject[]) => {
  const [val1, val2] = values
  const qty1 = Qty(val1.value, val1.unit)
  const qty2 = Qty(val2.value, val2.unit)

  return baseCompare(qty1, qty2, 'eq')
}

const same = (values: UnitObject[]) => {
  const [val1, val2] = values
  const qty1 = Qty(val1.value, val1.unit)
  const qty2 = Qty(val2.value, val2.unit)

  return baseCompare(qty1, qty2, 'same')
}

const lt = (values: UnitObject[]) => {
  const [val1, val2] = values
  const qty1 = Qty(val1.value, val1.unit)
  const qty2 = Qty(val2.value, val2.unit)

  return baseCompare(qty1, qty2, 'lt')
}

const lte = (values: UnitObject[]) => {
  const [val1, val2] = values
  const qty1 = Qty(val1.value, val1.unit)
  const qty2 = Qty(val2.value, val2.unit)

  return baseCompare(qty1, qty2, 'lte')
}

const gt = (values: UnitObject[]) => {
  const [val1, val2] = values
  const qty1 = Qty(val1.value, val1.unit)
  const qty2 = Qty(val2.value, val2.unit)

  return baseCompare(qty1, qty2, 'gt')
}

const gte = (values: UnitObject[]) => {
  const [val1, val2] = values
  const qty1 = Qty(val1.value, val1.unit)
  const qty2 = Qty(val2.value, val2.unit)

  return baseCompare(qty1, qty2, 'gte')
}

const compareTo = (values: UnitObject[]) => {
  const [val1, val2] = values
  const qty1 = Qty(val1.value, val1.unit)
  const qty2 = Qty(val2.value, val2.unit)

  return baseCompare(qty1, qty2, 'compareTo')
}

export { eq, same, lt, lte, gt, gte, compareTo }
