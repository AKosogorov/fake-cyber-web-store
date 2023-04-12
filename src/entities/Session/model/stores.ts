import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@/shared/lib/browser'
import { TOKEN_KEY } from '@/shared/config'
import { UserModel } from '@/entities/User'

const namespaced = 'session'

export const useSessionStore = defineStore(namespaced, () => {
  const { value, setLSValue } = useLocalStorage(TOKEN_KEY, '')

  const token = ref(value)

  function setToken(value: string) {
    token.value = value
    setLSValue(value)
  }

  function removeToken() {
    token.value = ''
    setLSValue('')
  }

  const user = reactive<UserModel.IUser>({
    id: '',
    username: 'Anonymous',
    gender: UserModel.EGender.male
  })

  function setUser(data: UserModel.IUser) {
    user.id = data.id
    user.username = data.username
    user.gender = data.gender
  }

  return {
    token,
    setToken,
    removeToken,
    user,
    setUser
  }
})
