<template>
  <button class="button-cyber reset" type="button">
    <span class="button-cyber__text label">
      {{ text }}<span aria-hidden="true">_</span>
    </span>

    <span class="button-cyber__glitch" aria-hidden="true">{{ text }}_</span>

    <CyberTag class="button-cyber__tag" />
  </button>
</template>

<script setup lang="ts">
import CyberTag from '@/shared/ui/text/CyberTag'
defineProps<{
  text: string
}>()
</script>

<style lang="scss">
@import 'styles';
</style>
