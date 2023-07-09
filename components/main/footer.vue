<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const path = computed(() => route.fullPath.replace('/', ''))
</script>

<template>
  <div class="py-5 border-t mt-5 text-zinc-700">
    <div class="px-6 container max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <FooterSite v-if="path === 'about'" />
        <FooterDevloper v-else />

        <FooterLink />
        <FooterConnect />
      </div>
      <div class="border-t mt-5 text-center p-2">
        不久的将来需要备案
      </div>
    </div>
  </div>
</template>

<style>

</style>
