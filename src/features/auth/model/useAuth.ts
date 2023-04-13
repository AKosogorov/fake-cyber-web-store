import { SessionModel } from '@/entities/Session'
import { UserApi } from '@/entities/User'

export function useAuth() {
  const session = SessionModel.useSessionStore()

  async function loadSessionUser(id: string) {
    const { data } = await UserApi.getById(id)
    session.setUser({ ...data, id })
  }

  return {
    loadSessionUser
  }
}
