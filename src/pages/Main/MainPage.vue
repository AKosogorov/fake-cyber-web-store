<template>
  <div class="container">
    <h1 class="mb-s">Main page</h1>
    <ProductCategories :route-name="catalogPages.category" />

    <ProductList
      :details-route-name="catalogPages.product"
      :model="ProductListModel.generalModel"
    />
  </div>
</template>

<script setup lang="ts">
import { ProductList, ProductListModel } from '@/widgets/Product'
import { AppPages } from '@/pages'
import { ProductCategories } from '@/entities/Product'

const catalogPages = AppPages.catalog
</script>
