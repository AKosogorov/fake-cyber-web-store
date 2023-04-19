import { WalletModel } from '@/entities/Wallet'

export function useRefillWallet() {
  const store = WalletModel.useWalletStore()

  async function refill(sum: number) {
    const balanceUpdated = store.balance + sum

    const changelogItem: WalletModel.IChangelogItem = {
      balance: balanceUpdated,
      date: Date.now(),
      sum,
      operationTypeId: WalletModel.EOperationTypes.refill
    }

    await store.updateAndSync(balanceUpdated, changelogItem)
  }

  return {
    refill
  }
}
