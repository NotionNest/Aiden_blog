<script lang="ts" setup>
import { BubbleMenu } from '@tiptap/vue-3'
import type { Editor } from '@tiptap/core'
import { type NodeSelection, TextSelection } from '@tiptap/pm/state'

const props = defineProps({
  editor: Object as PropType<Editor>,
})
type NodeType = 'image' | 'text' | 'video' | 'iframe'

const nodeType = computed<NodeType | undefined>(() => {
  const selection = props.editor?.state.selection as NodeSelection
  const isImage = selection.node?.type.name === 'image'
  const isIframe = selection.node?.type.name === 'iframe'
  const isText = selection instanceof TextSelection
  if (isImage)
    return 'image'
  if (isIframe)
    return 'iframe'
  if (isText)
    return 'text'
  return undefined
})
</script>

<template>
  <BubbleMenu v-if="editor" :editor="editor" :tippy-options="{ duration: 100 }">
    <div class="p-2 bg-white border shadow-md border-slate-100 rounded-xl">
      <div v-if="nodeType === 'text'" class="flex items-center space-x-1 text-gray-400 text-l">
        <button class="bubble-item" :class="{ 'is-active': editor.isActive('bold') }" @click="editor.chain().focus().toggleBold().run()">
          <div>加粗</div>
        </button>
        <button class="bubble-item" :class="{ 'is-active': editor.isActive('italic') }" @click="editor.chain().focus().toggleItalic().run()">
          <div>倾斜</div>
        </button>
        <button class="bubble-item" :class="{ 'is-active': editor.isActive('strike') }" @click="editor.chain().focus().toggleStrike().run()">
          <div>删除线</div>
        </button>
        <button class="bubble-item" :class="{ 'is-active': editor.isActive('underline') }" @click="editor.chain().focus().toggleUnderline().run()">
          <div>下划线</div>
        </button>
      </div>

      <div v-if="nodeType === 'image'">
        <button class="bubble-item">
          EditImage
        </button>
      </div>
      <div v-if="nodeType === 'iframe'">
        <button class="bubble-item">
          EditIframe
        </button>
      </div>
    </div>
  </BubbleMenu>
</template>

<style>
.bubble-item {
  @apply focus:bg-slate-200 focus:text-black p-1 rounded-lg transition ;
}
.is-active {
  @apply !text-black;
}
</style>
