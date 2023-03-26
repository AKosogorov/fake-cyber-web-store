<template>
  <section>
    <h2 class="mb-s">Buttons</h2>

    <VButton class="mb-s" txt="toggle disabled" @click="toggle" />

    <CyberButton class="mb-s" txt="Cyber button" :disabled="isDisabled" />

    <div class="column gap-m">
      <div
        v-for="(buttons, i) of buttonList"
        :key="i"
        class="row gap-s flex-wrap"
      >
        <VButton
          v-for="(button, idx) of buttons"
          :key="idx"
          class="events-none"
          :class="classes[idx]"
          :txt="button.txt"
          :border-left-icon="button.borderLeftIcon"
          :border-right-icon="button.borderRightIcon"
          :disabled="idx === 3 ? isDisabled : false"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { VButton } from '@/shared/ui/buttons'
import { CyberButton } from '@/shared/ui/cyber'
import { buttonList } from './model'
import useToggle from '@/shared/lib/use/useToggle'

const { isActive: isDisabled, toggle } = useToggle(true)
const classes = {
  1: 'hover',
  2: 'focus',
  4: 'active'
}
</script>
