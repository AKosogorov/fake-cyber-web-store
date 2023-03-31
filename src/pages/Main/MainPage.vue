<template>
  <div class="container">
    <h1 class="mb-s">Main page</h1>

    <div class="column gap-l mb-l">
      <ProductList
        :products="products"
        :details-route-name="catalogPages.product"
        :is-loading="isLoading"
      />

      <VPagination
        :model-value="page"
        :count="countPages"
        :is-disabled="isLoading"
        @update:model-value="loadPage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductList, ProductListModel } from '@/widgets/Product'
import { VPagination } from '@/shared/ui/pagination'

import { AppPages } from '@/pages'
import { onBeforeMount } from 'vue'

const catalogPages = AppPages.catalog
const {
  products,
  loadProductsWithQuery,
  page,
  countPages,
  loadPage,
  isLoading
} = ProductListModel.useGeneralModel()

onBeforeMount(loadProductsWithQuery)
</script>
