import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: '',
  suffix: ' %',
  includeThousandsSeparator: false,
  thousandsSeparatorSymbol: '',
  allowDecimal: true,
  decimalSymbol: ',',
  decimalLimit: 2,
  integerLimit: 2,
  allowNegative: false,
  allowLeadingZeroes: false,
}

const feeMask = createNumberMask(defaultMaskOptions)

export default feeMask;