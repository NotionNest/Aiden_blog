<script setup lang="ts">
/*
 tiptap 中文文档
 https://www.itxst.com/tiptap/tutorial.html
*/
import { Editor, EditorContent, FloatingMenu } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { computed, onMounted, reactive } from 'vue'

const state = reactive({
  editor: new Editor({
    extensions: [
      EditorContent,
      FloatingMenu,
      StarterKit,
    ],
    content: ` 
       <p>拖动下面的图片到文字上方试试看</p>
       <img src="https://www.itxst.com/img/logov31.png" />
      `,
  }) as any,
  result: '',
})

onMounted(() => {

})

const getHtml = computed(() => {
  return state.editor.getHTML()
})
</script>

<template>
  <div>
    <FloatingMenu v-if="state.editor" :editor="state.editor" :tippy-options="{ duration: 100 }">
      <button :class="{ 'is-active': state.editor.isActive('heading', { level: 1 }) }" @click="state.editor.chain().focus().toggleHeading({ level: 1 }).run()">
        H1
      </button>
      <button :class="{ 'is-active': state.editor.isActive('heading', { level: 2 }) }" @click="state.editor.chain().focus().toggleHeading({ level: 2 }).run()">
        H2
      </button>
      <button :class="{ 'is-active': state.editor.isActive('bulletList') }" @click="state.editor.chain().focus().toggleBulletList().run()">
        Bullet List
      </button>
    </FloatingMenu>
  </div>
  <div>
    <EditorContent :editor="state.editor" />
  </div>
  <h2>编辑器内容：</h2>
  <div style="min-height: 90px;">
    {{ getHtml }}
  </div>
</template>

<style scoped>
.editor,
.html {
  margin: 10px 20px;
  width: 690px;
}
.is-active {
  background-color: #1512e6;
  color: #fff;
}
.editor:deep(.ProseMirror) {
  color: #333;
  border: solid 3px #333;
  padding: 0px 6px;
  height: 260px;
  overflow-y: auto;
  border-radius: 6px;
}
.editor:deep(a) {
  color: #1512e6;
  cursor: pointer;
  text-decoration: underline;
}
.editor:deep(img) {
  background-color: #000;
}
.btn {
  margin-left: 20px;
  margin-top: 10px;
}
button {
  margin-right: 10px;
}
.editor:deep(blockquote) {
  padding-left: 10px;
  border-left: 3px solid #ddd;
}
.html pre {
  white-space: pre-wrap;
}
h2 {
  padding-left: 15px;
  font-size: 15px;
}
.html,
textarea {
  margin: 0px 20px;
  color: #ddd;
  background: #282c34;
  width: 690px;
  min-height: 200px;
  white-space: pre-wrap;
  padding: 6px;
  border-radius: 3px;
}

.editor:deep(.ProseMirror) {
  code {
    font-size: 0.9rem;
    padding: 0.25em;
    border-radius: 0.25em;
    background-color: rgba(#616161, 0.1);
    color: #616161;
    box-decoration-break: clone;
  }
}
</style>
