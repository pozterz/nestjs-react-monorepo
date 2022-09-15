export const isProd = import.meta.env.NODE_ENV === 'production'
export const AUTH_STORAGE_NAME = '_token'
export const dateFormat = 'dd/MM/yyyy'
export const localeShortDate = {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
}
export const localeDate = {
  day: '2-digit',
  month: 'short',
  year: '2-digit',
}
export const engDateFormat = 'dd-MM-yyyy'
export const dateTimeFormat = 'dd/MM/yyyy HH:mm'
export const exportDateFormat = 'DDMMYY'

export const environment = {
  API_URL: import.meta.env.VITE_API_URL,
}

export const WEB_URL = import.meta.env.VITE_WEB_URL as string
