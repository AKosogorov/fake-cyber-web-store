<template>
  <VeeRadio label="Gender" name="gender" :options="USER_GENDER_OPTIONS" />
</template>

<script setup lang="ts">
import { VeeRadio } from '@/shared/ui/form'
import { USER_GENDER_OPTIONS } from '../../model'
</script>
