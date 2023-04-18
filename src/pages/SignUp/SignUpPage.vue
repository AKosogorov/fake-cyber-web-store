<template>
  <div class="sign-up-page container">
    <h1 class="mb-s">Sign Up</h1>

    <RegisterForm class="sign-up-page__form shadow-black border-radius" />
  </div>
</template>

<script setup lang="ts">
import { RegisterForm } from '@/features/auth'
</script>

<style lang="scss">
@import 'styles';
</style>
