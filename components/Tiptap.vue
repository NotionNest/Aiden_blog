<script lang="ts" setup>
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Focus from '@tiptap/extension-focus'
import Underline from '@tiptap/extension-underline'

import Placeholder from '~~/utils/tiptap/placeholder' //
import suggestion from '~~/utils/tiptap/suggestion'
import Commands from '~~/utils/tiptap/commands'

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: '',
  extensions: [
    Focus,
    Underline,
    StarterKit,
    Placeholder,
    Commands.configure({
      suggestion,
    }),
  ],
  editable: true,
  onUpdate(props: any) {
    emit('update:modelValue', props.editor.getHTML())
  },
})
</script>

<template>
  <div v-if="editor">
    <TiptapBubble :editor="editor" />
    <EditorContent class="content" :editor="editor" />
  </div>
</template>

<style lang="scss">
.ProseMirror {
  @apply p-2 focus:outline-none;
}

.ProseMirror .is-empty::before {
  content: attr(data-placeholder);
  float: left;
  pointer-events: none;
  height: 0;
  @apply text-gray-300;
}

@keyframes highlight {
  0% {
    @apply bg-slate-100;
  }

  100% {
    @apply bg-transparent;
  }
}

.has-focus {
  animation: highlight 0.75s ease-out;
  @apply rounded;
}

.prose :where(p):not(:where([class~="not-prose"] *)) {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
