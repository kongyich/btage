<script setup>
import Headers from "./components/header/index.vue"
import Mains from "./components/main.vue"
import Floating from "./components/floating.vue"
</script>

<template>
  <div class="h-screen">
    <headers class="h-header" />
    <div class="h-main">
      <mains />
    </div>
    <floating />
  </div>
</template>



<style>

</style>
