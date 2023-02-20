<template>
  <router-link class="link-to-cart link" to="/cart">
    <IconCart class="link-to-cart__icon" /><span
      class="link-to-cart__counter counter"
      >99</span
    >
  </router-link>
</template>

<script>
import { defineComponent } from 'vue'
import IconCart from '@/shared/ui/icons/IconCart.vue'

export default defineComponent({
  components: { IconCart }
})
</script>

<style lang="scss">
@import 'styles';
</style>
