import { WalletModel } from '@/entities/Wallet'

export function useWriteOffWallet() {
  const store = WalletModel.useWalletStore()

  async function writeOff(sum: number) {
    if (sum > store.balance) {
      throw new Error('Insufficient funds, please replenish your account')
    }

    const balanceUpdated = store.balance - sum

    const changelogItem: WalletModel.IChangelogItem = {
      balance: balanceUpdated,
      date: Date.now(),
      sum,
      operationTypeId: WalletModel.EOperationTypes.writeOff
    }

    await store.updateAndSync(balanceUpdated, changelogItem)
  }

  return {
    writeOff
  }
}
