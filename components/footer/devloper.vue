<template>
  <div>
    <p class="text-2xl py-1 font-semibold">
      Devloper
    </p>
    <p class="py-2">
      Hi! I'm aiden, a software engineer.
    </p>
    <div class="my-3 space-x-3 pb-3 dark:text-black">
      <NuxtLink
        to="https://github.com/nurRiyad"
        target="_blank"
        class="p-2 bg-gray-300 rounded-md"
        aria-label="Github"
      >
        <Icon name="fa:github" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/nur-riyad/"
        target="_blank"
        class="p-2 bg-gray-300 rounded-md"
        aria-label="LinkedIn"
      >
        <Icon name="fa:linkedin-square" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://twitter.com/qdnvubp"
        target="_blank"
        class="p-2 bg-gray-300 rounded-md"
        aria-label="Twitter"
      >
        <Icon name="fa:twitter-square" size="1em" />
      </NuxtLink>
      <NuxtLink
        to="https://stackoverflow.com/users/16781395/nur-riyad"
        target="_blank"
        class="p-2 bg-gray-300 rounded-md"
        aria-label="StackOverflow"
      >
        <Icon name="fa:stack-overflow" size="1em" />
      </NuxtLink>
    </div>
  </div>
</template>
