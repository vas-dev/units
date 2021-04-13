import { convert } from './convert'

describe('Convert', () => {
  it('Should convert successfully', () => {
    expect(convert({ value: 10, unit: 'pound', target: 'kilogram' })).toBe(4.54)
  })

  it('Should use the formatter when supplied', () => {
    expect(
      convert({ value: 10, unit: 'pound', target: 'kilogram', formatter: (value, unit) => `${value} ${unit}` })
    ).toBe('4.54 kg')
  })

  it('Should use the correct number of decimals', () => {
    expect(convert({ value: 10, unit: 'pound', target: 'kilogram', maxDecimals: 5 })).toBe(4.53592)
    expect(convert({ value: 10, unit: 'pound', target: 'kilogram', maxDecimals: 0 })).toBe(5)
  })

  it('Should not fail when both units match', () => {
    expect(convert({ value: 10, unit: 'pound', target: 'pound' })).toBe(10)
    expect(convert({ value: 10, unit: 'pound', target: 'pound', formatter: (value, unit) => `${value} ${unit}` })).toBe(
      '10 lbs'
    )
  })
})
