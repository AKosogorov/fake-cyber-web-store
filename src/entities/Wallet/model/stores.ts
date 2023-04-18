import type { Ref } from 'vue'
import type { FirebaseApi } from '@/shared/api'
import type { IChangelogItem } from './types'
import { defineStore } from 'pinia'
import { EOperationTypes } from './types'
import { api } from '../api'
import { useReactiveArray } from '@/shared/lib/use/base/useReactiveArray'
import { useRefNumber } from '@/shared/lib/use/base/useRefNumber'
import { useRefString } from '@/shared/lib/use/base/useRefString'

interface IWalletStore {
  setWalletId: (id: FirebaseApi.TId) => void
  setBalance: (sum: number) => void
  loadWalletById: () => Promise<void>
  balance: Ref<number>
  changelog: IChangelogItem[]
  refill: (income: number) => Promise<void>
  writeOff: (income: number) => Promise<void>
  reset: () => void
}

const namespace = 'wallet'

export const useWalletStore = defineStore(namespace, (): IWalletStore => {
  const { value: walletId, setValue: setWalletId } = useRefString('')

  const { value: balance, setValue: setBalance } = useRefNumber(0)

  const {
    array: changelog,
    add,
    refresh: refreshChangelog
  } = useReactiveArray<IChangelogItem>()

  async function refill(sum: number) {
    const balanceUpdated = balance.value + sum

    const changelogItem: IChangelogItem = {
      balance: balanceUpdated,
      date: Date.now(),
      sum,
      operationTypeId: EOperationTypes.refill
    }

    await updateAndSync(balanceUpdated, changelogItem)
  }

  async function writeOff(sum: number) {
    const balanceUpdated = balance.value - sum

    const changelogItem: IChangelogItem = {
      balance: balanceUpdated,
      date: Date.now(),
      sum,
      operationTypeId: EOperationTypes.writeOff
    }

    await updateAndSync(balanceUpdated, changelogItem)
  }

  async function updateAndSync(balance: number, item: IChangelogItem) {
    await api.update(walletId.value, {
      balance,
      changelog: [...changelog, item]
    })

    setBalance(balance)
    add(item)
  }

  async function loadWalletById() {
    const { data } = await api.getById(walletId.value)
    setBalance(data.balance)

    if (data.changelog) {
      refreshChangelog(data.changelog)
    }
  }

  function reset() {
    setWalletId('')
    setBalance(0)
    refreshChangelog([])
  }

  return {
    setWalletId,
    setBalance,
    loadWalletById,
    balance,
    changelog,
    refill,
    writeOff,
    reset
  }
})
