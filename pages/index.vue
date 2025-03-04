<script setup lang="ts">
import { ref, computed } from 'vue';

// Fetch data from each collection
const { data: bomaResources } = await useAsyncData('boma', () => queryCollection('boma').all());
const { data: jiraniResources } = await useAsyncData('jirani', () => queryCollection('jirani').all());
const { data: generalResources } = await useAsyncData('general', () => queryCollection('general').all());

// Combine all collections
const allResources = computed(() => ({
  Boma: bomaResources.value || [],
  Jirani: jiraniResources.value || [],
  General: generalResources.value || [],
}));

// Search functionality
const searchQuery = ref('');
const filteredResources = computed(() => {
  if (!searchQuery.value) return allResources.value;

  const query = searchQuery.value.toLowerCase();
  return Object.fromEntries(
    Object.entries(allResources.value).map(([key, items]) => [
      key,
      items.filter((item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.body && item.body.children.every.name.toLowerCase().includes(query))
      ),
    ])
  );
});

// Expandable sections
const expandedSections = ref<string[]>([]);
const toggleSection = (section: string) => {
  if (expandedSections.value.includes(section)) {
    expandedSections.value = expandedSections.value.filter((s) => s !== section);
  } else {
    expandedSections.value.push(section);
  }
};
</script>

<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-3xl font-bold text-green-500">Resource Center</h1>

    <!-- Search Bar -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search resources..."
      class="mt-4 w-full p-2 border rounded focus:ring-2 focus:ring-green-400"
    />

    <!-- Resource Sections -->
    <div v-for="(category, name) in filteredResources" :key="name" class="mt-6">
      <div class="flex items-center justify-between cursor-pointer" @click="toggleSection(name)">
        <h2 class="text-2xl font-semibold text-gray-800">{{ name }}</h2>
        <span class="text-gray-500">
          {{ expandedSections.includes(name) ? '▼' : '▶' }}
        </span>
      </div>

      <!-- Expandable Content -->
      <ul v-if="expandedSections.includes(name) && category.length" class="mt-2 space-y-2">
        <li v-for="resource in category" :key="resource.path" class="p-4 border rounded bg-gray-50 hover:bg-gray-100">
          <NuxtLink :to="resource.path" class="text-lg font-medium text-blue-600 hover:underline">
            {{ resource.title }}
          </NuxtLink>
          <p class="text-sm text-gray-600">{{ resource.description }}</p>
        </li>
      </ul>

      <!-- No results message -->
      <p v-if="expandedSections.includes(name) && category.length === 0" class="mt-4 text-gray-500">
        No matching resources found in {{ name }}.
      </p>
    </div>

    <!-- Default Documentation -->
    <div v-if="Object.values(filteredResources).every(category => category.length === 0)" class="mt-6">
      <h2 class="text-2xl font-semibold text-gray-800">Getting Started</h2>
      <p class="mt-2 text-gray-600">
        Welcome to the Resource Center! Here are some default resources to help you get started:
      </p>
      <ul class="mt-2 space-y-2">
        <li class="p-4 border rounded bg-gray-50 hover:bg-gray-100">
          <NuxtLink to="/boma/getting-started" class="text-lg font-medium text-blue-600 hover:underline">
            Getting Started with Boma
          </NuxtLink>
          <p class="text-sm text-gray-600">A beginner's guide to using the Boma platform.</p>
        </li>
        <li class="p-4 border rounded bg-gray-50 hover:bg-gray-100">
          <NuxtLink to="/jirani/introduction" class="text-lg font-medium text-blue-600 hover:underline">
            Introduction to Jirani
          </NuxtLink>
          <p class="text-sm text-gray-600">Learn the basics of the Jirani system.</p>
        </li>
      </ul>
    </div>
  </div>
</template>