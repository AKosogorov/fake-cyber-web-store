<template>
  <div class="menu-modal" @click.self="close">
    <div class="menu-modal__content">Content</div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>

<style lang="scss">
@import 'styles';
</style>
