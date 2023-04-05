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
import { EAppPixelSize } from '@/shared/lib/types/app'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    rating: number
    size?: EAppPixelSize
  }>(),
  {
    size: EAppPixelSize.sm
  }
)

const formatRating = computed(() => Math.round(props.rating))
</script>

<style lang="scss">
@import 'styles';
</style>
