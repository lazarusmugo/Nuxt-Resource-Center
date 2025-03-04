<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('resources').path(route.path).first();
});
</script>

<template>
  <div>
    <header>
      <h1>{{ page?.title }}</h1>
      <p>{{ page?.description }}</p>
    </header>

    <ContentRenderer v-if="page" :value="page" />

    <footer>
      <p>Published on: {{ page?.date }}</p>
    </footer>
  </div>
</template>