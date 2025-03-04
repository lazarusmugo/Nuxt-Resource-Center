<script setup lang="ts">
import type { Collections } from '@nuxt/content';
import { useRoute, useAsyncData, useError } from 'nuxt/app';


const route = useRoute();

const collections: (keyof Collections)[] = ['boma', 'jirani', 'general'];

const fetchPage = async () => {
  for (const collection of collections) {
    const page = await queryCollection(collection).path(route.path).first();
    if (page) return page;
  }
  return null;
};


const { data: page, pending, error } = await useAsyncData(route.path, fetchPage);



</script>

<template>
  <div class="max-w-3xl mx-auto p-6">

    <p v-if="pending" class="text-gray-500">Loading...</p>

    <p v-else-if="error" class="text-red-500">{{ error.statusMessage }}</p>


    <template v-else>
      <header class="mb-4">
        <h1 class="text-3xl font-bold text-gray-900">{{ page?.title }}</h1>
        <p class="text-gray-600">{{ page?.description }}</p>
      </header>

      <ContentRenderer v-if="page" :value="page" class="prose max-w-none" />

      <footer class="mt-8 text-gray-500 text-sm">
        <p v-if="page?.date">Published on: {{ new Date(page.date).toLocaleDateString() }}</p>
      </footer>
    </template>
  </div>
</template>
