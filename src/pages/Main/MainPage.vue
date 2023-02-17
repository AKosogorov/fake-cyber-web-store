<template>
  <div class="container">
    <h1 class="mb-s">Main page</h1>

    <ProductList :details-route-name="productPage" />
  </div>
</template>

<script setup lang="ts">
import { ProductList } from '@/widgets/Product'
import { AppPages } from '@/pages'

const productPage = AppPages.catalog.product
</script>
