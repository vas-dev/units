import Qty from 'js-quantities'
import { UnitObject } from '../types'
import * as Comparison from './comparison'

describe('Comparison', () => {
  const left: UnitObject = { value: 10, unit: 'pound' }
  const right: UnitObject = { value: 100, unit: 'pound' }

  afterEach(jest.restoreAllMocks)

  describe.each([
    ['eq', left, right, false],
    ['eq', left, { value: 10, unit: 'pound' }, true],

    ['same', left, right, false],
    ['same', left, left, true],

    ['lt', left, right, true],
    ['lt', right, left, false],

    ['lte', left, right, true],
    ['lte', right, left, false],

    ['gt', left, right, false],
    ['gt', right, left, true],

    ['gte', left, right, false],
    ['gte', right, left, true],

    ['compareTo', left, right, -1],
    ['compareTo', right, left, 1],
  ])('%s', (operation, l, r, expected) => {
    test(`Should call the base comparison with the correct values`, () => {
      const qty1 = Qty(l.value, l.unit)
      const qty2 = Qty(r.value, r.unit)
      const spy = jest.spyOn(Comparison, 'baseCompare')

      const result = Comparison.baseCompare(
        qty1,
        qty2,
        operation as 'eq' | 'same' | 'lt' | 'lte' | 'gt' | 'gte' | 'compareTo'
      )

      expect(spy).toHaveBeenCalledWith(expect.any(Object), expect.any(Object), operation)
      expect(result).toBe(expected)
    })
  })
})
