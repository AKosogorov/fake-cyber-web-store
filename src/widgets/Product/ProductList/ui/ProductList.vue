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
import { ProductCard } from '@/entities/Product'
import { onMounted, reactive } from 'vue'
import { ProductApi } from '@/entities/Product'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'
import SpinnerLoader from '@/shared/ui/loaders/SpinnerLoader'

defineProps<{
  detailsRouteName: string
}>()

const products = reactive([])
const { isLoading, runWithLoading } = useLoadingWrap()
onMounted(async () => runWithLoading(loadProducts))

async function loadProducts() {
  const response = await ProductApi.getAll()
  products.push(...response.data.products)
}
</script>

<style>
@import 'styles.scss';
</style>
