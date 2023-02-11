<template>
  <button class="cyber-button reset" type="button">
    <span class="cyber-button__text label">
      {{ text }}<span aria-hidden="true">_</span>
    </span>

    <span class="cyber-button__glitch" aria-hidden="true">{{ text }}_</span>

    <CyberTag class="cyber-button__tag" />
  </button>
</template>

<script setup lang="ts">
import CyberTag from '../CyberTag'
defineProps<{
  text: string
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
