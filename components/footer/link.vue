<template>
  <div class="flex flex-col my-5 md:my-0 md:justify-self-center">
    <p class="text-base font-semibold">
      Quick Link
    </p>
    <NuxtLink to="/" class="hover:underline dark:hover:text-[#00dc82]">
      Home
    </NuxtLink>
    <NuxtLink to="/blogs" class="hover:underline dark:hover:text-[#00dc82]">
      Blogs
    </NuxtLink>
    <NuxtLink to="/categories" class="hover:underline dark:hover:text-[#00dc82]">
      Categories
    </NuxtLink>
    <NuxtLink to="/about" class="hover:underline dark:hover:text-[#00dc82]">
      About Me
    </NuxtLink>
  </div>
</template>
