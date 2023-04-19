import type { IChangelogItem } from './types'
import { useWalletStore } from './stores'
import { EOperationTypes } from './types'

export function useWriteOff() {
  const store = useWalletStore()

  async function writeOff(sum: number) {
    if (sum > store.balance) {
      throw new Error('Insufficient funds, please replenish your account')
    }

    const balanceUpdated = store.balance - sum

    const changelogItem: IChangelogItem = {
      balance: balanceUpdated,
      date: Date.now(),
      sum,
      operationTypeId: EOperationTypes.payment
    }

    await store.updateAndSync(balanceUpdated, changelogItem)
  }

  return {
    writeOff
  }
}
