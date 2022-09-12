<template>
  <div class="bg-white dark:bg-zinc-900 duration-500 sticky top-0 left-0 z-10">
    <ul class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden">
      <li v-for="item in data" :key="item.id" class="shrink-0 px-0.5 py-0.5 z-10 duration-200">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>

defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>
