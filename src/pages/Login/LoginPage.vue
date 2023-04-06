<template>
  <div class="container">
    <h1 class="mb-s">Login</h1>

    <form class="column gap-m" @submit.prevent="send">
      <div class="column gap-s">
        <VInput label="Username" />

        <VInput label="Password" />
      </div>

      <div>
        <VButton type="submit" txt="Login" />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '@/shared/ui/buttons'
import { VInput } from '@/shared/ui/form'

function send(e: Event) {
  console.log(e)
}
</script>

<style lang="scss">
@import 'styles';
</style>
