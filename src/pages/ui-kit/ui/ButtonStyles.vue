<template>
  <section>
    <h2 class="mb-s">Buttons</h2>

    <VButton
      class="mb-s"
      txt="toggle disabled"
      @click="toggle"
    />

    <CyberButton
      class="mb-s"
      txt="Cyber button"
      :disabled="!isDisabled"
    />

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
import useToggle from '@/shared/lib/use/useToggle'

import { EBorderDecorateIcons } from '@/shared/ui/BorderDecorate'

const texts: string[] = ['BUTTON', 'HOVER', 'FOCUS', 'DISABLED', 'ACTIVE']

interface IBorders {
  bL: EBorderDecorateIcons
  bR?: EBorderDecorateIcons
}

const borders: IBorders[] = [
  { bL: EBorderDecorateIcons.outer },
  { bL: EBorderDecorateIcons.inner },
  { bL: EBorderDecorateIcons.outer, bR: EBorderDecorateIcons.inner },
  { bL: EBorderDecorateIcons.inner, bR: EBorderDecorateIcons.outer },
  { bL: EBorderDecorateIcons.top, bR: EBorderDecorateIcons.inner },
  { bL: EBorderDecorateIcons.bottom, bR: EBorderDecorateIcons.inner },
  { bL: EBorderDecorateIcons.inner, bR: EBorderDecorateIcons.top },
  { bL: EBorderDecorateIcons.inner, bR: EBorderDecorateIcons.bottom },
  { bL: EBorderDecorateIcons.top },
  { bL: EBorderDecorateIcons.bottom },
  { bL: EBorderDecorateIcons.bottom, bR: EBorderDecorateIcons.top },
  { bL: EBorderDecorateIcons.top, bR: EBorderDecorateIcons.bottom }
]

const buttonList = borders.map(mapper)

interface IButtonItem {
  txt: string
  borderLeftIcon: EBorderDecorateIcons | undefined
  borderRightIcon: EBorderDecorateIcons | undefined
}

function mapper(item: IBorders): IButtonItem[] {
  return texts.map(txt => ({
    txt,
    borderLeftIcon: item.bL,
    borderRightIcon: item.bR || item.bL
  }))
}

const { isActive: isDisabled, toggle } = useToggle(true)
const classes = ['', 'hover', 'focus', '', 'active']
</script>
