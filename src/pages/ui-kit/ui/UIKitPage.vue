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
import { scrollTop } from '@/shared/lib/dom'
import { onBeforeMount } from 'vue'
import { ColorStyles } from '@/pages/ui-kit/ui/ColorStyles'
import ButtonStyles from '@/pages/ui-kit/ui/ButtonStyles.vue'
import CheckboxStyles from '@/pages/ui-kit/ui/CheckboxStyles.vue'
import InputStyles from '@/pages/ui-kit/ui/InputStyles.vue'
import LoaderStyles from '@/pages/ui-kit/ui/LoaderStyles.vue'
import { PaginationStyles } from '@/pages/ui-kit/ui/PaginationStyles'
import RadioStyles from '@/pages/ui-kit/ui/RadioStyles.vue'

onBeforeMount(scrollTop)
</script>
