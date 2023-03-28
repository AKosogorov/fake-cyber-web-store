<template>
  <button
    class="button-cross pseudo-cross reset"
    :style="styles"
    type="button"
  />
</template>

<script setup lang="ts">
import { EAppPixelSize } from '@/shared/lib/interface/size'
import { computed } from 'vue'

interface IButtonCross {
  size?: EAppPixelSize
}

const props = withDefaults(defineProps<IButtonCross>(), {
  size: EAppPixelSize.xs
})

const styles = computed(() => ({
  width: props.size,
  height: props.size
}))
</script>

<style lang="scss">
@import 'styles';
</style>
