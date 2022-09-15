import fetch from '../utils/fetch'

export const login = (values) => {
  return fetch('POST', 'auth', values)
}

export const forgotPassword = (values) => {
  return fetch('POST', 'users/forgot-password', values)
}

export const changePassword = (values) => {
  return fetch('POST', 'users/change-password', values)
}

export const acceptedTerms = () => {
  return fetch('POST', 'users/acceptTerms', {})
}
