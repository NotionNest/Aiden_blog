<script setup>
const { Slash } = useMagicKeys()

const writeEl = ref()
watch(Slash, (n) => {
  if (n && writeEl.value) {
    setTimeout(() => {
      writeEl.value.$el.click()
    }, 300)
  }
})
</script>

<template>
  <main class="container max-w-5xl mx-auto">
    <NuxtLink ref="writeEl" class="hidden btn-primary" to="/write">
      Press '/' to write
    </NuxtLink>
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>

<style>

</style>
