<script setup lang="ts">
const topics = [
  'javascript',
  'typescript',
  'git',
  'docker',
  'kubernetes',
  'vue',
  'nuxt',
  'pinia',
  'vuex',
  'firebase',
  'supabse',
  'cypress',
  'vercel',
  'namecheap',
]
</script>

<template>
  <div class="container max-w-5xl mx-auto">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 h-full gap-3">
      <template v-for="topic in topics" :key="topic">
        <CategoryCard :title="makeFirstCharUpper(topic)" />
      </template>
    </div>
  </div>
</template>
