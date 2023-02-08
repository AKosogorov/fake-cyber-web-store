<template>
  <div class="product-list">
    <ProductCard
      v-for="item of products"
      :key="item.id"
      :product="item"
    />
  </div>
</template>

<script setup lang="ts">
import { ProductCard } from "@/entities/Product";
import { onMounted, reactive } from "vue";

import { ProductApi } from "@/entities/Product";

const products = reactive([]);

onMounted(async () => {
  const response = await ProductApi.getAll();
  products.push(...response.data.products);
  console.log(products[0]);
});
</script>

<style>
@import "styles.scss";
</style>
