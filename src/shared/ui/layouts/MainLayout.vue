<template>
  <slot name="header" />
  <main>
    <router-view />
  </main>
  <slot />
  <slot name="footer" />
</template>
