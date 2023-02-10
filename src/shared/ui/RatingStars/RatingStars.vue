<template>
  <div class="rating-stars row">
    <IconStar
      v-for="i of starSystem"
      :key="i"
      :class="i <= formatRating ? 'yellow' : 'grey'"
      :fill="i <= formatRating ? 'currentColor' : 'none'"
      :width="size"
      :height="size"
    />
  </div>
</template>

<script setup lang="ts">
import { IconStar } from '@/shared/ui/icons'
import { starSystem } from './model'
import type { appSize } from '@/shared/lib/interface/size'
import { EAppPixelSize } from '@/shared/lib/interface/size'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    rating: number
    iconSize?: appSize
  }>(),
  {
    iconSize: 'sm'
  }
)

const size = computed(() => EAppPixelSize[props.iconSize])
const formatRating = computed(() => Math.round(props.rating))
</script>

<style lang="scss">
@import 'styles';
</style>
