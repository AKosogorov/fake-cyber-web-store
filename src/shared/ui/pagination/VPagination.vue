<template>
  <div v-if="count > 0" class="pagination column gap-xs">
    <div class="pagination__info">
      Page {{ modelValue }} of {{ count }} ++ {{ appStore.screenWidth }}
    </div>

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

      <span v-if="modelValue > 4 && count > 7">...</span>

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

      <span v-if="count > 7 && modelValue < count - 3">...</span>

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

const isFirstPage = computed(() => props.modelValue === 1)
const isLastPage = computed(() => props.modelValue === props.count)

const pages = computed(() => {
  if (props.modelValue < 5) {
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

function between(page: number) {
  return page > 1 && page < props.count
}

function getStartPages() {
  return [2, 3, 4, 5, 6].filter(between)
}

function getMiddlePages() {
  return [
    props.modelValue - 2,
    props.modelValue - 1,
    props.modelValue,
    props.modelValue + 1,
    props.modelValue + 2
  ]
}

function getEndPages() {
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
</script>

<style lang="scss">
@import 'styles';
</style>
