<script setup lang="ts">
const colorMode = useColorMode()
const route = useRoute()
const path = computed(() => route.fullPath.replace('/', ''))
function changeColorMode() {
  // colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  colorMode.preference = 'light'
}
</script>

<template>
  <div class="flex py-5 font-semibold border-b">
    <div class="container flex items-baseline justify-between max-w-5xl px-6 mx-auto">
      <ul class="flex items-baseline space-x-5">
        <li class="text-lg sm:text-2xl font-blod">
          <NuxtLink to="/">
            Aiden's Bolg
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex items-center space-x-3 text-sm sm:space-x-6 sm:text-lg">
        <li>
          <NuxtLink to="/blogs" :class="{ underline: path === 'blogs' }">
            Blogs
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/categories" :class="{ underline: path === 'categories' }">
            Categories
          </NuxtLink>
        </li>
        <li title="About Me">
          <NuxtLink to="/about" aria-label="About Me" :class="{ underline: path === 'about' }">
            About
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div>
      <div id="darkModeToggle" class="dark-mode-toggle" :class="{ dark: colorMode.preference === 'dark' }" @click="changeColorMode">
        <button class="toggle-button" />
      </div>
    </div>
  </div>
</template>

<style>
.dark-mode-toggle {
  position: absolute;
  width: 40px;
  height: 20px;
  top: 28px;
  right: 10px;
  background-color: #ddd;
  border-radius: 9999px;
  cursor: pointer;
}

.toggle-button {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.dark-mode-toggle.dark .toggle-button {
  transform: translateX(20px);
  background-color: #333;
}
</style>
