import axios, { Method } from 'axios'
import { environment } from '../constants/_environment'
import { notification } from 'antd'
import { getToken, removeStore } from './session'
import { AUTH_STORAGE_NAME } from '../constants/_environment'

const fetch = (
  method: Method = 'get',
  endpoint = '/',
  body = {},
  headers = {},
  apiUrl = environment.API_URL,
  options = {}
) => {
  const url = `${apiUrl}/${endpoint}`
  const data = body
  const queryName = method === 'GET' ? 'params' : 'data'

  const api = axios.create({
    baseURL: url,
  })

  api.interceptors.request.use((config) => {
    // GET TOKEN
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  })

  const res = api.request({
    method,
    url,
    [queryName]: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    ...options,
  })

  res.catch((error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Unauthorized

        if (error.response?.data?.message) {
          notification.error({
            message: error.response.data.message,
          })
          removeStore(AUTH_STORAGE_NAME)
        }
      }
    }
  })

  return Promise.resolve(res)
}

export default fetch
