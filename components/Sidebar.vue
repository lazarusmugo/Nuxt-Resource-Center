<template>
  <aside class="w-64 p-4 bg-gray-100 h-screen">
    <h2 class="text-xl font-bold">Resource Center</h2>
    <SearchBar @search="filterDocs" />
    
    <ul class="mt-4">
      <li v-for="doc in filteredDocs" :key="doc._path">
        <NuxtLink :to="doc._path" class="block p-2 hover:bg-gray-200">
          {{ doc.title }}
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const { data: docs } = await useAsyncData("docs", () => queryContent("docs").find());
const filteredDocs = ref(docs.value);

const filterDocs = (query) => {
  filteredDocs.value = docs.value.filter((doc) =>
    doc.title.toLowerCase().includes(query.toLowerCase())
  );
};
</script>
