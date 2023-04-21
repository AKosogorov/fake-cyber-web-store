<template>
  <span
    class="cyber-tag"
    aria-hidden="true"
    >{{ letter }}{{ number }}</span
  >
</template>

<script setup lang="ts">
import { generateNumber } from '@/shared/lib/utils/generate'
import { letters } from './model'

const i = generateNumber(0, letters.length - 1)
const letter = letters[i]
const number = generateNumber(10)
</script>

<style lang="scss">
@import 'styles';
</style>
