import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@/shared/lib/browser'
import { REFRESH_TOKEN_KEY, TOKEN_EXPIRES_IN, TOKEN_KEY } from '@/shared/config'
import type { UserModel } from '@/entities/User'
import { api } from '../api'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import useTimeout from '@/shared/lib/use/useTimeout'

const namespaced = 'session'

interface ITokens {
  idToken: string
  refreshToken: string
}

const defaultUserName = 'Anonymous'
const defaultUserGender = 'male' as UserModel.EGender

interface ISessionUser extends UserModel.IUser {
  createdAt?: number
  updatedAt?: number
}

export const useSessionStore = defineStore(namespaced, () => {
  const { showError } = useAlertsStore()

  const { value: tokenValue, setLSValue: setLSToken } = useLocalStorage(
    TOKEN_KEY,
    ''
  )

  const token = ref(tokenValue)

  function setToken(value: string) {
    token.value = value
    setLSToken(value)
  }

  function removeToken() {
    setToken('')
  }

  const { value: refreshTokenValue, setLSValue: setLSRefreshToken } =
    useLocalStorage(REFRESH_TOKEN_KEY, '')

  const refreshToken = ref(refreshTokenValue)

  function setRefreshToken(value: string) {
    refreshToken.value = value
    setLSRefreshToken(value)
  }

  function removeRefreshToken() {
    setRefreshToken('')
  }

  const {
    setTimeoutId: setTimeoutGetToken,
    clearTimeoutId: clearTimeoutGetToken
  } = useTimeout(getToken, TOKEN_EXPIRES_IN)

  async function getToken() {
    try {
      const { data } = await api.getToken(refreshToken.value)
      setToken(data.id_token)
      setRefreshToken(data.refresh_token)
      setTimeoutGetToken()
    } catch (e: any) {
      showError(e.message)
    }
  }

  function setTokens(data: ITokens) {
    clearTimeoutGetToken()
    setToken(data.idToken)
    setRefreshToken(data.refreshToken)
    setTimeoutGetToken()
  }

  const user = reactive<ISessionUser>({
    id: '',
    username: defaultUserName,
    gender: defaultUserGender,
    email: ''
  })

  function setUser(data: ISessionUser) {
    user.id = data.id
    user.username = data.username
    user.gender = data.gender
    user.email = data.email
  }

  function logout() {
    clearTimeoutGetToken()
    removeToken()
    removeRefreshToken()

    setUser({
      id: '',
      username: defaultUserName,
      gender: defaultUserGender,
      email: ''
    })
  }

  return {
    token,
    setTokens,
    refreshToken,
    user,
    setUser,
    logout
  }
})
