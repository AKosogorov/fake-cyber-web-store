<template>
  <ButtonLike :is-like="isLike" @click="onClick" />
</template>

<script setup lang="ts">
import { ButtonLike } from '@/shared/ui/buttons'
import { FavoritesModel } from '@/entities/Favorites'
import { useIsLike } from '@/shared/lib/use/useIsLike'
import { useAddToFavorites } from '@/features/Product/AddToFavorites/model'

const props = defineProps<{
  id: number
}>()

const { checkInFavoritesBy } = FavoritesModel.useFavoritesStore()

const { add, remove } = useAddToFavorites()

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
