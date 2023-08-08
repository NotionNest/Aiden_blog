<script setup lang="ts">

const body = ref('')
const title = ref('')
definePageMeta({
  alias: '/write',
  middleware: 'auth',
})

</script>

<template>
  <div class="flex flex-col mt-8">
    <div class="flex justify-end w-full mx-auto prose">
      <button class="btn-plain">
        Settings <span class="ml-2">⌘E</span>
      </button>
      <button class="btn-primary">
        Save <span class="ml-2">⌘S</span>
      </button>
    </div>

    <div class="w-full mx-auto prose md:p-2" spellcheck="false">
      <!-- <TiptapHeading :model-value="title" /> -->

      <Tiptap v-model="body"></Tiptap>
    </div>
  </div>
</template>
