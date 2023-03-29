<template>
  <div class="container">
    <h1 class="mb-s">Main page</h1>

    <ProductList
      :products="products"
      :details-route-name="catalogPages.product"
      :is-loading="isLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { ProductList, ProductListModel } from '@/widgets/Product'
import { AppPages } from '@/pages'
import { onBeforeMount } from 'vue'

const catalogPages = AppPages.catalog
const { products, loadProducts, isLoading } = ProductListModel.useGeneralModel()

onBeforeMount(loadProducts)
</script>
