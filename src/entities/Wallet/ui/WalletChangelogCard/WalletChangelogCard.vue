<template>
  <div class="wallet-changelog-card">
    <CyberCard />

    <div class="wallet-changelog-card__date mb-xxs blue pseudo-minus">
      {{ date }}
    </div>

    <div class="row between gap-m">
      <div class="row gap-s blue">
        <div
          class="wallet-changelog-card__circle"
          :class="[classColor, isRefill ? 'pseudo-plus' : 'pseudo-minus']"
        />

        {{ operation }}
      </div>

      <div class="column ai-fe gap-xxs">
        <span :class="classColor">{{ sum }}</span>

        <span class="blue">Balance: {{ balance }}</span>
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

interface IProps {
  item: IChangelogItem
}

const props = defineProps<IProps>()

const date = computed(() => formatDateTime(props.item.date))

const operation = computed(() => {
  switch (props.item.operationTypeId) {
    case EOperationTypes.refill:
      return WALLET_OPERATION_TYPES[0].name
    default:
      return WALLET_OPERATION_TYPES[1].name
  }
})

const classColor = computed(() => {
  switch (props.item.operationTypeId) {
    case EOperationTypes.refill:
      return 'green'
    default:
      return 'red'
  }
})

const isRefill = computed(
  () => props.item.operationTypeId === EOperationTypes.refill
)

const sumFormatted = computed(() => formatUSD(props.item.sum))

const sum = computed(() => {
  const operator = isRefill.value ? '+' : '-'
  return `${operator}${sumFormatted.value}`
})

const balance = computed(() => formatUSD(props.item.balance))
</script>

<style lang="scss">
@import 'styles';
</style>