<script setup lang="ts">
import { useRoute, useSeoMeta } from '#app'
const route = useRoute();

const path = '/resources/' + (route.params.slug as string[]).join('/');

const { data: resource } = await useAsyncData(route.path, () => 
  queryCollection('resources')
    .path(path)
    .first(),
  { default: () => ({ title: '', description: '', body: '' }) }
);

useSeoMeta({
  title: resource.value?.title || "Resource Center",
  description: resource.value?.description || "Resource Center page"
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="resource">
      <h1 class="text-3xl font-bold">{{ resource.title }}</h1>
    
      <p class="text-gray-600">{{ resource.description }}</p>
      <div class="mt-6 prose" v-html="resource.body"></div>
    </div>
    <div v-else>
      Resource not found.
    </div>
  </div>
</template>
