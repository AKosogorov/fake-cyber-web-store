import { FirebaseApi } from '@/shared/api'
import type { AxiosPromise } from 'axios'
import { getErrorMessageBy } from './errors'

export const api = {
  singUp,
  singIn
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
    console.log(data)
    return await FirebaseApi.accountInstance.post(
      ':signUp',
      withReturnToken(data)
    )
  } catch (e: any) {
    throw new Error(getErrorMessageBy(e.response.data.error.message))
  }
}

async function singIn(data: IAuthData): AxiosPromise<IAuthResponse> {
  try {
    return await FirebaseApi.accountInstance.post(
      ':signInWithPassword',
      withReturnToken(data)
    )
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
