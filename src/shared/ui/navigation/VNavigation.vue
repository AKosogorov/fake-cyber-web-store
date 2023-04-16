<template>
  <nav class="navigation">
    <ul class="navigation__list flex">
      <li class="navigation__item" v-for="(item, idx) of navList" :key="idx">
        <router-link
          class="navigation__link link row gap-xxs"
          :class="item.isActive && 'is-active'"
          :to="item.to"
        >
          <component
            v-if="item.icon"
            class="navigation__icon"
            :is="item.icon"
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
