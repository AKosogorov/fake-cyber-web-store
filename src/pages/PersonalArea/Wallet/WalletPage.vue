<template>
  <div class="wallet-page container">
    <h1 class="mb-s">Wallet</h1>

    <div class="wallet-page__grid">
      <div class="wallet-page__changelog">
        <WalletChangelog />
      </div>

      <div class="wallet-page__aside">
        <WalletBalance>
          <template v-slot:refill>
            <RefillWallet />
          </template>
        </WalletBalance>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WalletBalance, WalletChangelog } from '@/entities/Wallet'
import { RefillWallet } from '@/features/Wallet/refill-wallet'
</script>

<style lang="scss">
@import 'styles';
</style>
