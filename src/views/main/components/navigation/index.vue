<template>
  <div>
    <mobile-navigation v-if="isMobileTerminal" />
  </div>
</template>

<script setup>
  import { isMobileTerminal } from '@/utils/flexible.ts'
  import mobileNavigation from './mobile/index.vue'
</script>

<style>

</style>
