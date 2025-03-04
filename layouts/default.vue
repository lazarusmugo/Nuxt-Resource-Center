<!-- <template>
    <div class="flex">
      <Sidebar />
      <main class="flex-1 p-4">
        <slot />
      </main>
    </div>
  </template> -->


<template>
    <UContainer>
      <UPage>
        <template #left>
          <UAside>
          
          </UAside>
        </template>
  
        <slot />
      </UPage>
    </UContainer>
  </template>
  