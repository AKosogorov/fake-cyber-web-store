<template>
  <div class="container">
    <h1 class="mb-s">Main page</h1>

    <ProductList :details-route-name="catalogPagesModel.details" />
  </div>
</template>

<script setup lang="ts">
import { ProductList } from '@/widgets/Product'
import { catalogPagesModel } from '@/pages/Catalog'
</script>
