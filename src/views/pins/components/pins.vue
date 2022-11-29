<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="fixed left-0 top-0 w-screen h-screen text-xl z-20 bg-slate-200">
    {{ props.id }}
  </div>
</template>

<style scoped>

</style>
