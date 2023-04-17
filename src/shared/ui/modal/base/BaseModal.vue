<template>
  <teleport to="body">
    <div class="modal" :class="className">
      <div class="modal__wrap" @click.self="close">
        <div class="modal__content">
          <ButtonCross class="modal__button-close" @click="close" />

          <h3 v-if="title" class="modal__title center">{{ title }}</h3>

          <slot />
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ButtonCross } from '@/shared/ui/buttons'

const emit = defineEmits(['close'])

interface IProps {
  title?: string
  className?: string
}

defineProps<IProps>()

function close() {
  emit('close')
}
</script>

<style lang="scss">
@import 'styles';
</style>
