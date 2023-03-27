const getEnvVar = (key: string) => {
  const envVar = import.meta.env[key]
  if (envVar === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return envVar || ''
}

export const API_URL = getEnvVar('VITE_APP_API_URL')
export const APP_NAME = getEnvVar('VITE_APP_NAME')

export const isDevEnv = getEnvVar('DEV')
export const isProdEnv = getEnvVar('PROD')
