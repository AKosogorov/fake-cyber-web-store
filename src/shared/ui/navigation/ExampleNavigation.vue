<template>
  <nav class="nav">
    <ul class="nav__list row gap-s">
      <li
        v-for="item of navList"
        :key="item.label"
      >
        <router-link
          class="link"
          :to="item.to"
        >
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useAppRoutes } from '@/app/providers'

const appRoutes = useAppRoutes()

const navList = [
  {
    to: appRoutes.getUIKit(),
    label: 'UI kit'
  },
  {
    to: appRoutes.getNotFound(),
    label: 'Empty'
  }
]
</script>
