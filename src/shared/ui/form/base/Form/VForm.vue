<template>
  <form class="form column gap-l" @submit="handlerSubmit">
    <slot />

    <div class="form__buttons">
      <slot name="button-submit">
        <ButtonSubmit :txt="buttonSubmitTxt" :is-submitting="isSubmitting" />
      </slot>
      <slot name="additional-buttons" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ButtonSubmit } from '@/shared/ui/buttons'

interface IVForm {
  handlerSubmit: (e?: Event | undefined) => Promise<Promise<void> | undefined>
  isSubmitting?: boolean
  buttonSubmitTxt?: string
}

withDefaults(defineProps<IVForm>(), {
  isSubmitting: false,
  buttonSubmitTxt: undefined
})
</script>

<style lang="scss">
@import 'styles';
</style>
