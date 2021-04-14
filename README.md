# Units

A small library to convert units

## Usage

```ts
import { convert } from '@vas-dev/units'

convert({ value: 20, unit: 'pound', target: 'kilogram', maxDecimals: 2 })

// 9.07
```

## API

> Note: Since this is a small wrapper around [`js-quantities`](https://github.com/gentooboontoo/js-quantities) most of the surfaced functions are the same but with different arguments

### `convert `

```ts
import { convert } from '@vas-dev/units'

convert({
  value: 20,

  // Starting Unit
  unit: 'pound',

  // Unit to be converted to
  target: 'kilogram',

  // Number of decimals - Optional - Default: 2
  maxDecimals: 2,

  // Custom formatter, returns a string - Optional
  formatter: (scalar: number, unit: Unit) => `${scalar} ${unit}`,
})

// 9.07
```

### `add` / `subtract` / `multiply` / `divide`

All of these operators have the same API. When using `add` or `subtract`, units can be different but must be the same type. Return value will be the unit of the left-side (first object in the array).

```ts
import { add } from '@vas-dev/units'

add(
  // Array of objects for operation
  [
    { value: 2, unit: 'pound' },
    { value: 5, unit: 'kilogram' },
  ],
  {
    // Number of decimals - Optional - Default: 2
    maxDecimals: 2,

    // Custom formatter, returns a string - Optional
    formatter: (scalar: number, unit: Unit) => `${scalar} ${unit}`,
  }
)
```

### `eq` / `gt` / `gte` / `lt` / `lte` / `same`

Compares the left-side (first in the array) to the right-side (second in the array).

```ts
import { eq } from '@vas-dev/units'

eq([
  { value: 2, unit: 'pound' },
  { value: 5, unit: 'kilogram' },
])

// false
```

`eq` will check that quantities are the same. Example: 1kg === 1000g.

`same` will check that both the quantity and the unit are the same. Example: 1kg !== 1000g

Others work as you would expect them to.

### `compareTo`

Returns a `-1` if less than, `1` if greater than, `0` if equal.

```ts
import { compareTo } from '@vas-dev/units'

compareTo([
  { value: 2, unit: 'pound' },
  { value: 5, unit: 'kilogram' },
])

// -1
```
