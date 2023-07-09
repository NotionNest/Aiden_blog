<script setup lang="ts">
import { makeFirstCharUpper } from '@/utils/helper'

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
  <div class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="flex flex-wrap px-6 mt-12 gap-3">
      <template v-for="topic in topics" :key="topic">
        <CategoryCard :title="makeFirstCharUpper(topic)" />
      </template>
    </div>
  </div>
</template>
