<script setup lang="ts"></script>

<template>
  <div class="max-w-4xl mx-auto p-4">
    <h1 class="text-3xl font-bold text-green-500">
      Welcome to the Resource Center
    </h1>
    <p class="mt-2 text-gray-600">
      Explore our resources to get started with Boma, Jirani, and more.
    </p>

    <div class="mt-6 space-y-4">
      <NuxtLink
        to="/boma"
        class="block p-6 bg-white border rounded-lg hover:bg-gray-50 transition-colors"
      >
        <h2 class="text-xl font-semibold text-blue-600">Boma Resources</h2>
        <p class="mt-2 text-gray-600">
          Learn how to manage your properties with Boma.
        </p>
      </NuxtLink>

      <NuxtLink
        to="/jirani"
        class="block p-6 bg-white border rounded-lg hover:bg-gray-50 transition-colors"
      >
        <h2 class="text-xl font-semibold text-blue-600">Jirani Resources</h2>
        <p class="mt-2 text-gray-600">
          Discover how to connect with your community using Jirani.
        </p>
      </NuxtLink>

      <NuxtLink
        to="/general"
        class="block p-6 bg-white border rounded-lg hover:bg-gray-50 transition-colors"
      >
        <h2 class="text-xl font-semibold text-blue-600">General Resources</h2>
        <p class="mt-2 text-gray-600">
          Find answers to frequently asked questions and more.
        </p>
      </NuxtLink>
    </div>
  </div>
</template>
