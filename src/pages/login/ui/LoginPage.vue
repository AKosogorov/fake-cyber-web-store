<template>
  <div class="login-page container">
    <h1 class="mb-m">Login</h1>

    <LoginForm class="login-page__form login-page__box shadow-black border-radius" />

    <div class="login-page__box column gap-xxs bg-dark-blue shadow-black border-radius">
      New to Fake Cyber Web Store?

      <router-link
        class="link blue"
        :to="appRoutes.getSignUp()"
      >
        Create an account
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginForm } from '@/features/auth'
import { useAppRoutes } from '@/app/providers'

const appRoutes = useAppRoutes()
</script>

<style lang="scss">
@import './styles';
</style>
