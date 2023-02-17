<template>
  <SpinnerLoader v-if="isLoading" />

  <div v-else class="product-list">
    <ProductCard
      v-for="item of products"
      :key="item.id"
      :product="item"
      :details-route-name="detailsRouteName"
    />
  </div>
</template>

<script setup lang="ts">
import { mapProduct, ProductCard } from '@/entities/Product'
import type { IProduct } from '@/entities/Product'
import { onMounted, reactive } from 'vue'
import { ProductApi } from '@/entities/Product'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'
import SpinnerLoader from '@/shared/ui/loaders/SpinnerLoader'

defineProps<{
  detailsRouteName: string
}>()

const { isLoading, runWithLoading } = useLoadingWrap()

onMounted(async () => runWithLoading(fetchProducts))

const products = reactive<IProduct[] | never>([])

async function fetchProducts() {
  const response = await ProductApi.getAll()

  const mapped = response.data.products.map(mapProduct)
  products.push(...mapped)
}
</script>

<style>
@import 'styles.scss';
</style>
