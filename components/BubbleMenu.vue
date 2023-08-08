<script lang="ts" setup>
import { BubbleMenu, Editor } from '@tiptap/vue-3'

defineProps({
  editor: {
    type: Editor,
    require: true,
  },
})
</script>

<template>
  <BubbleMenu
    v-if="editor"
    :editor="editor"
    :tippy-options="{ duration: 100 }"
  >
    <button
      class="btn-primary"
      :class="{ 'is-active': editor.isActive('bold') }"
      @click="editor.chain().focus().toggleBold().run()"
    >
      bold
    </button>
    <button
      class="btn-primary"
      :class="{ 'is-active': editor.isActive('italic') }"
      @click="editor.chain().focus().toggleItalic().run()"
    >
      italic
    </button>
    <button
      class="btn-primary"
      :class="{ 'is-active': editor.isActive('strike') }"
      @click="editor.chain().focus().toggleStrike().run()"
    >
      strike
    </button>
  </BubbleMenu>
</template>

<style>

</style>
