export const formatNumber = (n, frac = 0, max = 2) => {
  const intl = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: frac,
    maximumFractionDigits: max,
  })
  return intl.format(n)
}

export const validateNumber = (value) => {
  const reg = /^[0-9]*$/gim
  if (value && value !== '' && !reg.test(value)) {
    value = value.trim()
    value = value.replace(/[^0-9]/gi, '')
  }
  return value
}

export const formatCurrency = (n, frac = 0, max = 2) => {
  const intl = new Intl.NumberFormat('th-TH', {
    minimumFractionDigits: frac,
    maximumFractionDigits: max,
    style: 'currency',
    currency: 'THB',
  })
  return intl.format(n)
}
