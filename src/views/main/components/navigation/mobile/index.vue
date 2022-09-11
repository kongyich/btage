<template>
  <div>
    移动端下的
  </div>
</template>

<script setup>
import { getCategory } from '@/api/category'

const getCategoryData = async() => {
  const data = await getCategory()
  console.log(data);
}

getCategoryData()
</script>

<style>

</style>
