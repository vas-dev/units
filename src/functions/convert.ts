import Qty from 'js-quantities'
import { ConvertProps } from '../types'
import { convertPrecision } from '../utils'

const convert = ({ value, unit, target, maxDecimals = 2, formatter }: ConvertProps) => {
  const qty = Qty(value, unit).to(target).toPrec(convertPrecision(maxDecimals))
  return formatter ? qty.format(formatter) : qty.scalar
}

export { convert }
