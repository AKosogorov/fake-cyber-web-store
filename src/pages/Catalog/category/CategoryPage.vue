<template>
  <div class="category-page container">
    <h1 class="capitalize mb-m">{{ title }}</h1>

    <ProductList
      :details-route-name="AppPages.catalog.product"
      :model="ProductListModel.categoryModel"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { AppPages } from '@/pages'
import { ProductList, ProductListModel } from '@/widgets/Product'

const route = useRoute()

const title = computed(() => route.params.category)
</script>

<style lang="scss">
.category-page {
  &__title {
    text-transform: capitalize;
  }
}
</style>
