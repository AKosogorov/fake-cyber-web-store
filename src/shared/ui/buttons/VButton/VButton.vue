<template>
  <button class="button reset" type="button" @click="onClick">
    <BorderDecorate
        class="button__border-decorate button__border-decorate--after"
        icon-left="inner"
        icon-right="outer"
    />

    <BorderDecorate
        class="button__border-decorate"
        icon-left="inner"
        icon-right="outer"
    />

    <span class="button__text">BUTTON</span>
  </button>
</template>

<script setup lang="ts">
import BorderDecorate from "@/shared/ui/BorderDecorate";

function onClick () {
  console.log('onClick')
}
</script>

<style lang="scss">
@import "styles";
</style>
