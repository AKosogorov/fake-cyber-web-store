<template>
  <div class="product-details">
    <p v-if="isLoading">Loading...</p>

    <h2 v-else>{{ product.brand }}</h2>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import { ProductApi } from '@/entities/Product'
import type { IProduct } from '@/entities/Product'
import { useRoute } from 'vue-router'
import useLoadingWrap from '@/shared/lib/use/useLoadingWrap'

const route = useRoute()
const product = reactive<IProduct | object>({})

const { isLoading, runWithLoading } = useLoadingWrap()

const productId = computed(() => route.params.id)

onMounted(() => runWithLoading(loadProduct))

async function loadProduct() {
  const response = await ProductApi.getById(productId.value)
  for (const key in response.data) {
    product[key] = response.data[key]
  }
}
</script>

<style lang="scss">
@import 'styles';
</style>
