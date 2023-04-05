<template>
  <ButtonLike :is-like="isLike" @click="onClick" />
</template>

<script setup lang="ts">
import { ButtonLike } from '@/shared/ui/buttons'
import { ProductModel } from '@/entities/Product'
import { useIsLike } from '@/shared/lib/use/useIsLike'

const props = defineProps<{
  id: number
}>()

const { add, remove, checkInFavoritesBy } =
  ProductModel.stores.useFavoritesStore()

const { isLike, toggleIsLike } = useIsLike(checkInFavoritesBy(props.id))

function onClick() {
  if (isLike.value) {
    remove(props.id)
  } else {
    add(props.id)
  }

  toggleIsLike()
}
</script>

<style lang="scss">
@import 'styles';
</style>
