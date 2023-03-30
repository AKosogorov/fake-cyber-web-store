<template>
  <div class="pagination column gap-s">
    <div class="pagination__info">Страница {{ modelValue }} из {{ count }}</div>

    <div class="pagination__pages row gap-xxs">
      <button
        class="pagination__button pagination__button--arrow pagination__button--arrow-prev reset"
        type="button"
        :disabled="isDisabled || isFirstPage"
        @click="changePage(modelValue - 1)"
      />

      <button
        class="pagination__button reset"
        :class="{ active: modelValue === 1 }"
        v-text="1"
        type="button"
        :disabled="isDisabled"
        @click="changePage(1)"
      />

      <span v-if="modelValue > 4 && count > 7">...</span>

      <button
        v-for="page in pages"
        :key="page"
        v-text="page"
        class="pagination__button reset"
        :class="{ active: page === modelValue }"
        type="button"
        :disabled="page === modelValue || isDisabled"
        @click="changePage(page)"
      />

      <span v-if="count > 7 && modelValue < count - 3">...</span>

      <button
        v-if="count !== 1"
        v-text="count"
        class="pagination__button reset"
        :class="{ active: count === modelValue }"
        :disabled="count === modelValue || isDisabled"
        type="button"
        @click="changePage(count)"
      />

      <button
        class="pagination__button pagination__button--arrow reset"
        type="button"
        :disabled="isDisabled || isLastPage"
        @click="changePage(modelValue + 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface IVPagination {
  modelValue: number
  count: number
  isDisabled?: boolean
}

const props = withDefaults(defineProps<IVPagination>(), {
  isDisabled: false
})

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

function changePage(num: number) {
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
