<template>
  <div class="category-page container">
    <h1 class="capitalize mb-m">{{ currentCategory }}</h1>

    <div class="column gap-l mb-l">
      <ProductList
        :products="products"
        :is-loading="isLoading"
      />

      <VPagination
        :model-value="page"
        :count="countPages"
        :is-disabled="isLoading"
        @update:model-value="loadPageOfCategory"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { VPagination } from '@/shared/ui/pagination'
import { useRoute } from 'vue-router'
import { computed, onBeforeMount, watch } from 'vue'
import { ProductList, ProductListModel } from '@/widgets/Product/ProductList'

const route = useRoute()

const currentCategory = computed(() => route.params.category as string)

const { products, loadProductsWithQuery, isLoading, page, countPages, setPage } = ProductListModel.useCategoryModel()

onBeforeMount(loadProductsOfCategory)

watch(currentCategory, loadProductsOfCategory)

function loadPageOfCategory(num: number) {
  setPage(num)
  loadProductsWithQuery({ category: currentCategory.value })
}

function loadProductsOfCategory() {
  loadProductsWithQuery({ category: currentCategory.value })
}
</script>

<style lang="scss">
.category-page {
  &__title {
    text-transform: capitalize;
  }
}
</style>
