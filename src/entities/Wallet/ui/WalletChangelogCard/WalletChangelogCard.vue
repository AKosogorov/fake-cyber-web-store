<template>
  <div class="wallet-changelog-card">
    <CyberCard />

    <div class="wallet-changelog-card__date mb-xxs blue pseudo-minus">
      {{ date }}
    </div>

    <div class="wallet-changelog-card__grid row between gap-m">
      <div class="wallet-changelog-card__operation row gap-s blue">
        <div
          class="wallet-changelog-card__icon"
          :class="[classColor, isPositive ? 'pseudo-plus' : 'pseudo-minus']"
        />

        {{ operation }}
      </div>

      <div class="wallet-changelog-card__sum" :class="classColor">
        {{ sum }}
      </div>

      <div class="wallet-changelog-card__balance blue">
        Balance: {{ balance }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IChangelogItem } from '../../model'
import { EOperationTypes, WALLET_OPERATION_TYPES } from '../../model'
import { formatDateTime } from '@/shared/lib/utils/date/format'
import { computed } from 'vue'
import { formatUSD } from '@/shared/lib/utils/format/currency'
import { CyberCard } from '@/shared/ui/cyber'
import { EAppColor } from '@/shared/lib/types/app'

interface IProps {
  item: IChangelogItem
}

const props = defineProps<IProps>()

const date = computed(() => formatDateTime(props.item.date))

const operation = computed(
  () => WALLET_OPERATION_TYPES[props.item.operationTypeId - 1].name
)

const isPositive = computed(() => {
  switch (props.item.operationTypeId) {
    case EOperationTypes.refill:
    case EOperationTypes.refund:
      return true
    default:
      return false
  }
})

const classColor = computed(() =>
  isPositive.value ? EAppColor.green : EAppColor.red
)

const sumFormatted = computed(() => formatUSD(props.item.sum))

const sum = computed(() => {
  const operator = isPositive.value ? '+' : '-'
  return `${operator}${sumFormatted.value}`
})

const balance = computed(() => formatUSD(props.item.balance))
</script>

<style lang="scss">
@import 'styles';
</style>
