<template>
  <div class="container">
    <h1 class="mb-m">Fake Cyber - the best web store</h1>

    <div class="column gap-l mb-l">
      <ProductList
        :products="products"
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

import { onBeforeMount } from 'vue'

const { products, loadProductsWithQuery, page, countPages, loadPage, isLoading } = ProductListModel.useGeneralModel()

onBeforeMount(loadProductsWithQuery)
</script>
