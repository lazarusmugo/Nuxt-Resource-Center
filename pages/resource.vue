<script setup lang="ts">
const { data: resources } = await useAsyncData('resources', () =>
  queryCollection('resources')
    .where('published', '=', true)
    .all()
)
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">📚 Resource Center</h1>
    <div v-if="resources?.length">
      <ul>
        <li v-for="resource in resources" :key="resource.path">
          <!-- Use resource.path instead of resource._path -->
          <NuxtLink :to="resource.path">
            <h2 class="text-xl font-semibold">{{ resource.title }}</h2>
            <p class="text-gray-600">{{ resource.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <p v-else>No resources found.</p>
  </div>
</template>
