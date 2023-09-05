<template>
  <section class="ui-color-styles">
    <h2 class="mb-s">Colors</h2>

    <ul class="ui-color-styles__list">
      <li
        v-for="(color, i) of colors"
        :key="i"
        class="ui-color-styles__item center"
        :class="'bg-' + color.bg"
      >
        <h3 :class="color.text">
          {{ color.bg }}
        </h3>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
const colors = ['yellow', 'red', 'grey', 'blue', 'black', 'dark-blue', 'green', 'purple'].map(item => {
  let textColor = 'black'

  const bgWithWhiteText = ['red', 'black', 'dark-blue']

  if (bgWithWhiteText.includes(item)) {
    textColor = 'white'
  }

  return {
    text: textColor,
    bg: item
  }
})
</script>

<style lang="scss">
@import 'styles';
</style>
