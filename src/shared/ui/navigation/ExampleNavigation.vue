<template>
  <nav class="nav">
    <ul class="nav__list row gap-s">
      <li>
        <router-link
          class="link"
          to="/ui"
          >UI</router-link
        >
      </li>
      <li>
        <router-link
          class="link"
          :to="{ name: 'NotFoundPage' }"
        >
          Empty
        </router-link>
      </li>
    </ul>
  </nav>
</template>
