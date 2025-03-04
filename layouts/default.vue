<script setup lang="ts">
import { ref, computed } from 'vue';

// Sidebar visibility for mobile
const showMenu = ref(false);

// Fetch markdown files under each category
const { data: bomaResources } = await useAsyncData('boma', () => queryCollection('boma').all());
const { data: jiraniResources } = await useAsyncData('jirani', () => queryCollection('jirani').all());
const { data: generalResources } = await useAsyncData('general', () => queryCollection('general').all());



// Grouped resources
const groupedResources = computed(() => ({
  Boma: bomaResources.value || [],
  Jirani: jiraniResources.value || [],
  General: generalResources.value || [],
}));
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <aside
      class="w-64 p-4 bg-white border-r border-gray-300 h-screen fixed md:relative z-10 transform transition-transform md:translate-x-0"
      :class="showMenu ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- Close button for mobile -->
      <button @click="showMenu = false" class="md:hidden p-2">✖</button>

      <!-- Categories -->
      <ul>
        <li v-for="(category, name) in groupedResources" :key="name">
          <!-- Category Title -->
          <h2 class="text-lg font-bold py-2 border-b">{{ name }}</h2>

          <!-- List of Resources -->
          <ul class="ml-4 mt-2">
            <li v-for="resource in category" :key="resource.path">
              <NuxtLink
                :to="resource.path"
                class="block py-1 px-2 hover:bg-gray-200 rounded transition-colors"
                @click="showMenu = false"
              >
                {{ resource.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-4 md:ml-64">
 
      <slot />
    </main>
  </div>
</template>

<style>

.aside-transition {
  transition: transform 0.2s ease-in-out;
}
</style>