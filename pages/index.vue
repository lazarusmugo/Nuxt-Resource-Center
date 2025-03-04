<script setup lang="ts">
const { data: resources } = await useAsyncData('resources', () => {
  return queryCollection('resources').all();
});
</script>

<template>
  <div>
    <h1 class="font-bold text-green-500">Resource Center</h1>
    <ul>
      <li v-for="resource in resources" :key="resource.path">
        <NuxtLink :to="resource.path">{{ resource.title }}</NuxtLink>
    
      </li>
    </ul>
  </div>
</template>