<template>
  <button
    v-show="isVisible"
    class="button-scroll-top border-radius pseudo-double-arrow reset"
    type="button"
    @click="scrollTop"
  />
</template>

<script setup lang="ts">
import { scrollTop } from '@/shared/lib/dom'
import { onMounted, onUnmounted } from 'vue'
import { useIsBoolean } from '@/shared/lib/use/base/useIsBoolean'
import { throttle } from '@/shared/lib/utils/throttle'

const { isBoolean: isVisible, setIs } = useIsBoolean()

const handleScroll = throttle(setVisible, 1000)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function setVisible() {
  setIs(window.scrollY > 300)
}
</script>

<style lang="scss">
@import 'styles';
</style>
