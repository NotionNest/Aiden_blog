<script setup lang="ts">
interface Props {
  path: string
  title: string
  date: string
  description: string
  image: string
  alt: string
  ogImage: string
  tags: Array<string>
  published: boolean
}
withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/nuxt-blog/no-image_cyyits.png',
  tags: () => [],
  published: false,
})
</script>

<template>
  <div class="group border m-2 overflow-hidden rounded-2xl shadow-sm">
    <NuxtLink>
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
        :src="image"
        :alt="alt"
      >
      <div class="px-3 pb-4">
        <div class="pt-3 pd-2">
          <div class="flex item-center" style="align-items: center;">
            <LogoDate />
            {{ date }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <template v-for="tag in tags" :key="tag">
              <span>{{ tag }}</span>
            </template>
          </div>
        </div>
        <h2 class="text-xl font-semibold pb-1 group-hover:text-sky-700 dark:group-hover:text-[#00dc82]">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2 text-base">
          {{ description }}
        </p>
        <div class="flex group-hover:underline text-sky-700 dark:text-[#00dc82] items-center py-2">
          <p>Read More</p>
          <LogoArrow />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
