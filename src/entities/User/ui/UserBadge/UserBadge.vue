<template>
  <div class="user-badge row gap-xs">
    <div class="avatar border-radius">
      <img
        :src="avatarSrc"
        :alt="`${user.username} avatar`"
        loading="lazy"
      />
    </div>

    <span class="user-badge__name">{{ user.username }}</span>
  </div>
</template>

<script setup lang="ts">
import type { IUser } from '../../model'
import { computed } from 'vue'
import { BASE_URL } from '@/shared/config'

interface IProps {
  user: IUser
}
const props = defineProps<IProps>()

const avatarSrc = computed(() => {
  if (props.user.avatar) {
    return props.user.avatar
  }

  return `${BASE_URL}/image/${props.user.gender}.png`
})
</script>

<style lang="scss">
@import 'styles';
</style>
