import { FirebaseApi } from '@/shared/api'
import type { AxiosPromise } from 'axios'
import { getErrorMessageBy } from './errors'

export const api = {
  singUp,
  singIn,
  getUserBy,
  getToken
}

interface IAuthData {
  email: string
  password: string
}

interface IAuthResponse {
  kind: string
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}

async function singUp(data: IAuthData): AxiosPromise<IAuthResponse> {
  try {
    return await FirebaseApi.accountInstance.post(':signUp', withReturnToken(data))
  } catch (e: any) {
    throw new Error(getErrorMessageBy(e.response.data.error.message))
  }
}

async function singIn(data: IAuthData): AxiosPromise<IAuthResponse> {
  try {
    return await FirebaseApi.accountInstance.post(':signInWithPassword', withReturnToken(data))
  } catch (e: any) {
    throw new Error(getErrorMessageBy(e.response.data.error.message))
  }
}

function withReturnToken(data: IAuthData) {
  return {
    ...data,
    returnSecureToken: true
  }
}

interface ITokenResponse {
  expires_in: string
  token_type: string
  refresh_token: string
  id_token: string
  user_id: string
  project_id: string
}

async function getToken(refreshToken: string): AxiosPromise<ITokenResponse> {
  try {
    return await FirebaseApi.secureTokenInstance.post('/token', {
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    })
  } catch (e: any) {
    throw new Error(getErrorMessageBy(e.response.data.error.message))
  }
}

async function getUserBy(idToken: string) {
  try {
    return await FirebaseApi.accountInstance.post(':lookup', { idToken })
  } catch (e: any) {
    throw new Error(getErrorMessageBy(e.response.data.error.message))
  }
}
