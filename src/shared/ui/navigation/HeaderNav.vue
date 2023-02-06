<template>
  <nav class="nav">
    <ul class="nav__list row gap-xxs">
      <li>
        <router-link to="/">Main</router-link>
      </li>
      <li>
        <router-link to="/ui">UI</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'NotFoundPage' }">Empty</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.nav {
  &__list {
  }
}
</style>
