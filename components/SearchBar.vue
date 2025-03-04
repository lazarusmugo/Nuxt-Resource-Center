<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    type="text"
    class="w-full p-2 border border-gray-300 rounded"
    placeholder="Search resources..."
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
