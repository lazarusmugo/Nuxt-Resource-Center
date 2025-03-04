<script setup lang="ts">
defineProps<{ title: string, description: string, link: string }>()
</script>

<template>
  <div class="p-4 bg-white shadow-md rounded-lg">
    <h2 class="text-xl font-semibold">{{ title }}</h2>
    <p class="text-gray-600">{{ description }}</p>
    <NuxtLink :to="link" class="text-custom-purple mt-2 block">Read more →</NuxtLink>
  </div>
</template>
