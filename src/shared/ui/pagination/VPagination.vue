<template>
  <div v-if="count > 0" class="pagination column gap-xs">
    <div class="pagination__info">Page {{ modelValue }} of {{ count }}</div>

    <div class="pagination__pages row gap-xxs">
      <button
        class="pagination__button pagination__button--arrow pagination__button--arrow-prev reset"
        type="button"
        :disabled="isDisabled || isFirstPage"
        @click="updateModelValue(modelValue - 1)"
      />

      <button
        class="pagination__button reset"
        :class="{ active: modelValue === 1 }"
        type="button"
        :disabled="isDisabled || isFirstPage"
        @click="updateModelValue(1)"
        v-text="1"
      />

      <span v-if="visibleDotsLeft">...</span>

      <button
        v-for="page in pages"
        :key="page"
        class="pagination__button reset"
        :class="{ active: page === modelValue }"
        type="button"
        :disabled="page === modelValue || isDisabled"
        @click="updateModelValue(page)"
        v-text="page"
      />

      <span v-if="visibleDotsRight">...</span>

      <button
        v-if="count > 1"
        class="pagination__button reset"
        :class="{ active: count === modelValue }"
        :disabled="count === modelValue || isDisabled"
        type="button"
        @click="updateModelValue(count)"
        v-text="count"
      />

      <button
        class="pagination__button pagination__button--arrow reset"
        type="button"
        :disabled="isDisabled || isLastPage"
        @click="updateModelValue(modelValue + 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/app/providers'

const emit = defineEmits(['update:modelValue'])

interface IVPagination {
  modelValue: number
  count: number
  isDisabled?: boolean
}

const props = withDefaults(defineProps<IVPagination>(), {
  isDisabled: false
})

const appStore = useAppStore()

const isMobile = computed(() => appStore.screenWidth <= 400)

const isFirstPage = computed(() => props.modelValue === 1)
const isLastPage = computed(() => props.modelValue === props.count)

const visibleDots = computed(() => {
  if (isMobile.value) {
    return props.count > 6
  }
  return props.count > 7
})

const pageForVisibleDotsLeft = computed(() => (isMobile.value ? 3 : 4))
const visibleDotsLeft = computed(
  () => visibleDots.value && props.modelValue > pageForVisibleDotsLeft.value
)

const pageForVisibleDotsRight = computed(() => (isMobile.value ? 2 : 3))
const visibleDotsRight = computed(
  () =>
    visibleDots.value &&
    props.modelValue < props.count - pageForVisibleDotsRight.value
)

const pageForStartPages = computed(() => (isMobile.value ? 4 : 5))

const pages = computed(() => {
  if (props.modelValue < pageForStartPages.value) {
    return getStartPages()
  }

  if (props.modelValue > props.count - 3) {
    return getEndPages()
  }

  return getMiddlePages()
})

function updateModelValue(num: number) {
  emit('update:modelValue', num)
}

function getStartPages() {
  return getStartPagesList().filter(between)
}
function getStartPagesList() {
  if (isMobile.value) {
    return [2, 3, 4]
  }
  return [2, 3, 4, 5, 6]
}

function getMiddlePages() {
  if (isMobile.value) {
    return [props.modelValue - 1, props.modelValue, props.modelValue + 1]
  }

  return [
    props.modelValue - 2,
    props.modelValue - 1,
    props.modelValue,
    props.modelValue + 1,
    props.modelValue + 2
  ]
}

function getEndPages() {
  if (isMobile.value) {
    return [
      props.modelValue - 3,
      props.modelValue - 2,
      props.modelValue - 1,
      props.modelValue,
      props.modelValue + 1,
      props.modelValue + 2
    ]
      .filter(between)
      .slice(-3)
  }

  return [
    props.modelValue - 5,
    props.modelValue - 4,
    props.modelValue - 3,
    props.modelValue - 2,
    props.modelValue - 1,
    props.modelValue,
    props.modelValue + 1,
    props.modelValue + 2
  ]
    .filter(between)
    .slice(-5)
}

function between(page: number) {
  return page > 1 && page < props.count
}
</script>

<style lang="scss">
@import 'styles';
</style>
