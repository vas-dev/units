import { UnitObject } from '../types'
import * as Operations from './arithmetic'

describe('Arithmetic Functions', () => {
  const left: UnitObject = { value: 10, unit: 'pound' }
  const right: UnitObject = { value: 100, unit: 'pound' }

  afterEach(jest.restoreAllMocks)

  describe('Base Operation', () => {
    it.each`
      op       | l       | r        | expected
      ${'add'} | ${left} | ${right} | ${110}
      ${'sub'} | ${left} | ${right} | ${-90}
      ${'mul'} | ${left} | ${right} | ${1000}
      ${'div'} | ${left} | ${right} | ${0.1}
    `('should return $expected when calling `$op` with values: $l.value and $r.value', ({ op, l, r, expected }) => {
      expect(Operations.base(op as 'add' | 'sub' | 'mul' | 'div', l, r, 2)).toBe(expected)
    })
  })

  describe.each([
    ['Add', 'add', 'add', '110 lbs'],
    ['Subtract', 'subtract', 'sub', '-90 lbs'],
    ['Multiply', 'multiply', 'mul', '1000 lbs2'],
    ['Divide', 'divide', 'div', '0.1 '],
  ])(`%s`, (_name, operation, argument, expectedString) => {
    it('should call `base` operation with the correct arguments', () => {
      const spy = jest.spyOn(Operations, 'base')
      Operations[operation]([left, right], { maxDecimals: 2 })

      expect(spy).toHaveBeenCalled()
      expect(spy).toHaveBeenCalledWith(argument, left, right, 2, undefined)
    })

    it('should format correctly', () => {
      const spy = jest.spyOn(Operations, 'base')
      const result = Operations[operation]([left, right], {
        maxDecimals: 2,
        formatter: (value, unit) => `${value} ${unit}`,
      })

      expect(spy).toHaveBeenCalled()
      expect(result).toBe(expectedString)
    })
  })
})
