<template>
  <article class="product-card column gap-s">
    <ProductCardImages
      class="product-card__image-wrap"
      :images="product.images"
      :alt="product.title"
    />

    <div>
      <h3 class="mb-xxs">{{ product.title }}</h3>
      <p>{{ product.description }}</p>

      <VPrice :price="product.price" :discount="product.discountPercentage" />
    </div>
  </article>
</template>

<script setup lang="ts">
import ProductCardImages from "../ProductCardImages";
import VPrice from "@/shared/ui/VPrice/index";
import type { IProduct } from "../../model/interface";

defineProps<{
  product: IProduct;
}>();
</script>

<style lang="scss">
@import "styles.scss";
</style>
