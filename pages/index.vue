<template>
  <div class="prose mx-auto text-center">
    <h1 class="text-3xl font-bold">Welcome to the Resource Center</h1>
    <p class="text-gray-600">Find everything you need in one place.</p>

    <div v-if="featuredDocs.length" class="mt-6 flex flex-wrap justify-center gap-4">
      <NuxtLink
        v-for="doc in featuredDocs"
        :key="doc._path"
        :to="doc._path"
        class="p-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md"
      >
        <h2 class="text-lg font-semibold">{{ doc.title }}</h2>
      </NuxtLink>
    </div>
    <p v-else class="text-gray-500">No documentation available.</p>
  </div>
</template>

<script setup>
const { data: docs } = await useAsyncData("docs", async () => {
  const content = await queryContent("docs").find();
  return content || []; 
});

const featuredDocs = computed(() => (docs.value ? docs.value.slice(0, 3) : []));
</script>
