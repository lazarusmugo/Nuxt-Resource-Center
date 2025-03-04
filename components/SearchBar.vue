<template>
  <input 
    v-model="searchQuery"
    @input="$emit('search', searchQuery)"
    class="p-2 w-full border rounded"
    placeholder="Search docs..."
  />
</template>

<script setup>
const searchQuery = ref("");
</script>
