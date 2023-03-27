<template>
  <nav class="product-categories column gap-s">
    <h4>Categories</h4>

    <ul v-if="store.categories.length" class="product-categories__list">
      <li
        v-for="category of store.categories"
        :key="category"
        class="product-categories__item"
      >
        <router-link
          class="link"
          :to="{ name: routeName, params: { category } }"
        >
          {{ category }}
        </router-link>
      </li>
    </ul>

    <span v-if="!isLoading && !store.categories.length">No categories</span>
    <BarsLoader v-if="isLoading" />
  </nav>
</template>

<script setup lang="ts">
import { stores } from '../../model/'
import { onBeforeMount } from 'vue'
import { useIsLoading } from '@/shared/lib/use/useIsLoading'
import { useAlertsStore } from '@/shared/ui/TheAlerts'
import { BarsLoader } from '@/shared/ui/loaders'

defineProps<{
  routeName: string
}>()

const store = stores.useProductCategoriesStore()
const { isLoading, startLoading, finishLoading } = useIsLoading()

const { showError } = useAlertsStore()

onBeforeMount(() => {
  if (store.categories.length) return

  fetchCategories()
})

async function fetchCategories() {
  try {
    startLoading()
    await store.getCategories()
  } catch (e: any) {
    showError(e?.message)
  } finally {
    finishLoading()
  }
}
</script>

<style lang="scss">
@import 'styles';
</style>
