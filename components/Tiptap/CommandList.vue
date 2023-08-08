<script setup lang="ts">
import type { PropType } from 'vue'

interface Item {
  title: string
  description: string
}

const props = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true,
  },
  command: {
    type: Function,
    required: true,
  },
})
const { items } = toRefs(props)
const selectedIndex = ref(0)

watch(items, () => (selectedIndex.value = 0))

function selectItem(index: number) {
  const item = items.value[index]

  if (item)
    props.command(item)
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'ArrowUp') {
    selectedIndex.value = (selectedIndex.value + items.value.length - 1) % items.value.length
    return true
  }
  if (event.key === 'ArrowDown') {
    selectedIndex.value = (selectedIndex.value + 1) % items.value.length
    return true
  }
  if (event.key === 'Enter') {
    selectItem(selectedIndex.value)
    return true
  }
}

defineExpose({
  onKeyDown,
})
</script>

<template>
  <div class="flex flex-col px-2 py-4 bg-white shadow-xl rounded-xl w-72">
    <template v-if="items.length">
      <button
        v-for="(item, index) in items"
        :key="index"
        class="flex flex-col p-2 text-sm text-left transition bg-transparent rounded-lg"
        :class="{ '!bg-slate-100': index === selectedIndex }"
        @click="selectItem(index)"
      >
        <span>{{ item.title }}</span>
        <span class="text-xs opacity-40">{{ item.description }}</span>
      </button>
    </template>
    <div v-else class="item">
      No result
    </div>
  </div>
</template>
