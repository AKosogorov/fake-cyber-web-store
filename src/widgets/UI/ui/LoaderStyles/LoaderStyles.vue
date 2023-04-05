<template>
  <section>
    <h2 class="mb-s">Loaders</h2>

    <div class="column pd-m gap-l">
      <BarsLoader />

      <div class="row gap-s">
        <SpinnerLoader size="sm" />
        <SpinnerLoader size="md" />
        <SpinnerLoader size="lg" />
        <SpinnerLoader />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BarsLoader from '@/shared/ui/loaders/BarsLoader'
import SpinnerLoader from '@/shared/ui/loaders/SpinnerLoader'
</script>
