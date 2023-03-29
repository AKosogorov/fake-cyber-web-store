<template>
  <div class="category-page container">
    <h1 class="capitalize mb-m">{{ currentCategory }}</h1>

    <ProductList
      :products="products"
      :details-route-name="AppPages.catalog.product"
      :is-loading="isLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onBeforeMount, watch } from 'vue'
import { AppPages } from '@/pages'
import { ProductList, ProductListModel } from '@/widgets/Product'

const route = useRoute()

const currentCategory = computed(() => route.params.category as string)

const { products, loadProducts, isLoading } =
  ProductListModel.useCategoryModel()

onBeforeMount(loadProductsOfCategory)

watch(currentCategory, loadProductsOfCategory)

function loadProductsOfCategory() {
  loadProducts({ category: currentCategory.value })
}
</script>

<style lang="scss">
.category-page {
  &__title {
    text-transform: capitalize;
  }
}
</style>
