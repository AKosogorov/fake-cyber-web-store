<template>
  <div class="container">
    <h1>UI</h1>

    <ColorStyles />

    <InputStyles />

    <CheckboxStyles />

    <RadioStyles />

    <ButtonStyles />

    <PaginationStyles />

    <LoaderStyles />
  </div>
</template>

<script setup lang="ts">
import {
  ColorStyles,
  ButtonStyles,
  CheckboxStyles,
  InputStyles,
  LoaderStyles,
  PaginationStyles,
  RadioStyles
} from '@/widgets/UI'
import { scrollTop } from '@/shared/lib/dom'
import { onBeforeMount } from 'vue'

onBeforeMount(scrollTop)
</script>
