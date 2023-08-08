<script lang="ts" setup>
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>运行Tiptap</p>',
  extensions: [StarterKit],
})
</script>

<template>
  <div v-if="editor">
    <button
      :disabled="!editor.can().chain().focus().toggleBold().run()"
      :class="{ 'is-active': editor.isActive('bold') }"
      @click="editor.chain().focus().toggleBold().run()"
    >
      bold
    </button>

    <BubbleMenu :editor="editor" />
    <EditorContent class="editor-container" :editor="editor" />
  </div>
</template>

<style>
/* .editor-container {
  width: 400px;
  height: 400px;
} */
.is-active {
  color: red;
}
</style>
