type Mass = 'gram' | 'kilogram' | 'metric-ton' | 'ounce' | 'pound' | 'short-ton'
type Temperature = 'celsius' | 'fahrenheit' | 'kelvin'
type Length = 'foot' | 'inch' | 'meter' | 'mile' | 'yard'
type Speed = 'kph' | 'mph'

export type Units = Mass | Temperature | Length | Speed

export type Formatter = (scalar: number, unit: string) => string

export interface ConvertProps {
  value: number
  unit: Units
  target: Units
  maxDecimals?: number
  formatter?: Formatter
}

export interface UnitObject {
  value: number
  unit: Units
}

export type UnitArray = UnitObject[]

export interface ArithmeticOptions {
  maxDecimals?: number
  formatter?: Formatter
}

export interface ComparisionProps {
  left: {
    value: number
    unit: Units
  }
  right: {
    value: number
    unit: Units
  }
  maxDecimals?: number
  formatter?: Formatter
}
