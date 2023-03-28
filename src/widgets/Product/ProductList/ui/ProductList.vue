<template>
  <SpinnerLoader v-if="isLoading" />

  <div v-else class="product-list">
    <ProductCard
      v-for="item of products"
      :key="item.id"
      :product="item"
      :details-route-name="detailsRouteName"
    >
      <template v-slot:button-like>
        <AddToFavorites :id="item.id" />
      </template>

      <template v-slot:button-add-to-cart>
        <AddToCart :id="item.id" />
      </template>
    </ProductCard>
  </div>
</template>

<script setup lang="ts">
import SpinnerLoader from '@/shared/ui/loaders/SpinnerLoader'
import { ProductCard } from '@/entities/Product'
import { AddToFavorites } from '@/features/Product'
import { AddToCart } from '@/features/Cart'

import { onBeforeMount, reactive } from 'vue'
import { ProductModel } from '@/entities/Product'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'
import type { IProductListModel } from '../model'
import type { IBaseQuery } from '@/shared/api/types'
import { refreshArray } from '@/shared/lib/utils/array'
import { useAlertsStore } from '@/shared/ui/TheAlerts'

const props = defineProps<{
  detailsRouteName: string
  model: IProductListModel
  query?: IBaseQuery
}>()

const products = reactive<ProductModel.IProduct[]>([])

const { showError } = useAlertsStore()

const { isLoading, runWithLoading } = useLoadingWrap()

onBeforeMount(loadProducts)

function loadProducts() {
  runWithLoading(fetchAndRefresh)
}

async function fetchAndRefresh() {
  try {
    const data = await props.model.fetchProducts(props.query)
    refreshArray(products, data)
  } catch (e: any) {
    showError(e.message)
  }
}
</script>

<style lang="scss">
@import 'styles';
</style>
