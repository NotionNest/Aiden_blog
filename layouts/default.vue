<script setup>

</script>

<template>
  <div>
    <header class="sticky top-0 z-99 w-full backdrop-blur-md">
      <MainHeader />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<style>

</style>
