<template>
  <ButtonSm @click="onLogout">
    <template v-slot:icon>
      <IconLogout :width="iconSize" :height="iconSize" />
    </template>

    Logout
  </ButtonSm>
</template>

<script setup lang="ts">
import { ButtonSm } from '@/shared/ui/buttons'
import { IconLogout } from '@/shared/ui/icons'

import { EAppPixelSize } from '@/shared/lib/types/app'
import { useRouter } from 'vue-router'
import { useLogout } from '../../model'

interface IProps {
  iconSize?: EAppPixelSize
}

withDefaults(defineProps<IProps>(), {
  iconSize: EAppPixelSize.sm
})

const router = useRouter()
const { logout } = useLogout()

function onLogout() {
  logout()
  router.push('/')
}
</script>
