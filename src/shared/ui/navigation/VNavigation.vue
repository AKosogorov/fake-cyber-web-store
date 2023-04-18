<template>
  <nav class="navigation">
    <ul class="navigation__list flex">
      <li v-for="(item, idx) of navList" :key="idx" class="navigation__item">
        <router-link
          class="navigation__link link row gap-xxs"
          :class="item.isActive && 'is-active'"
          :to="item.to"
        >
          <component
            v-if="item.icon"
            :is="item.icon"
            class="navigation__icon"
          />
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { INavItem } from './types'

defineProps<{ navList: INavItem[] }>()
</script>
