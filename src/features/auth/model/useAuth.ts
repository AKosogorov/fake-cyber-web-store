import type { FirebaseApi } from '@/shared/api'
import { SessionModel } from '@/entities/Session'
import { UserApi } from '@/entities/User'

export function useAuth() {
  const session = SessionModel.useSessionStore()

  async function loadSessionUser(id: FirebaseApi.TId) {
    const { data } = await UserApi.getById(id)
    session.setUser({ ...data, id })
  }

  return {
    loadSessionUser
  }
}
