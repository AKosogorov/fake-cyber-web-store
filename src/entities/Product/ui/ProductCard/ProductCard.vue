<template>
  <article class="product-card column gap-s">
    <ProductCardImages
      class="product-card__image-wrap"
      :images="product.images"
      :alt="product.title"
    />

    <div class="column gap-xxs">
      <VPrice :price="product.price" :discount="product.discountPercentage" />

      <h4>{{ product.title }}</h4>
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
