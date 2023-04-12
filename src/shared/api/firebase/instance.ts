import axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'
import {
  FB_API_URL,
  APP_NAME,
  TOKEN_KEY,
  FB_ACCOUNTS_API_URL,
  FB_API_KEY
} from '@/shared/config'

export const instance = axios.create({
  baseURL: FB_API_URL
})

instance.interceptors.request.use(addToken, reject)

export const accountInstance = axios.create({
  baseURL: FB_ACCOUNTS_API_URL
})

accountInstance.interceptors.request.use(addAPIKey, reject)

function addToken(config: InternalAxiosRequestConfig) {
  config.headers.authorization = localStorage.getItem(
    `${APP_NAME}:${TOKEN_KEY}`
  )

  return config
}

function addAPIKey(config: InternalAxiosRequestConfig) {
  if (!config.params) {
    config.params = {}
  }
  config.params.key = FB_API_KEY

  return config
}

function reject(error: any) {
  return Promise.reject(error)
}
