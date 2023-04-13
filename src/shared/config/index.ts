export const API_URL = getEnvVar('VITE_APP_API_URL')
export const APP_NAME = getEnvVar('VITE_APP_NAME')

export const FB_API_KEY = getEnvVar('VITE_APP_FB_API_KEY')
export const FB_API_URL = getEnvVar('VITE_APP_FB_API_URL')
export const FB_ACCOUNTS_API_URL = getEnvVar('VITE_APP_FB_ACCOUNTS_API_URL')
export const FB_SECURE_TOKEN_API_URL = getEnvVar(
  'VITE_APP_FB_SECURE_TOKEN_API_URL'
)

export const TOKEN_KEY = 'jwt-token'
export const TOKEN_EXPIRES_IN = 3600 * 1000
export const REFRESH_TOKEN_KEY = 'refresh-token'

export const isDevEnv = getEnvVar('DEV')
export const isProdEnv = getEnvVar('PROD')

function getEnvVar(key: string) {
  const envVar = import.meta.env[key]
  if (envVar === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return envVar
}
