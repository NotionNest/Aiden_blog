import type { Editor, Range } from '@tiptap/core'
import { VueRenderer } from '@tiptap/vue-3'
import tippy from 'tippy.js'

import CommandsList from '~~/components/Tiptap/CommandList.vue'

interface Command {
  editor: Editor
  range: Range
}
export default {
  items: ({ query }: any) => {
    return [
      {
        title: 'Heading 2',
        description: 'Big section heading.',
        command: ({ editor, range }: Command) => {
          editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run()
        },
      },
      {
        title: 'Heading 3',
        description: 'Medium section heading.',
        command: ({ editor, range }: Command) => {
          editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run()
        },
      },
      {
        title: 'Numbered List',
        description: 'Create a list with numbering.',
        command: ({ editor, range }: Command) => {
          editor.chain().focus().deleteRange(range).wrapInList('orderedList').run()
        },
      },
      {
        title: 'Bulleted List',
        description: 'Create a simple bulleted list.',
        command: ({ editor, range }: Command) => {
          editor.chain().focus().deleteRange(range).wrapInList('bulletList').run()
        },
      },
    ]
      .filter(item => item.title.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 10)
  },
  render: () => {
    let component: any
    let popup: any
    return {
      onStart: (props: any) => {
        component = new VueRenderer(CommandsList, {
          props,
          editor: props.editor,
        })
        if (!props.clientRect)
          return

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        })
      },
      onUpdate(props: any) {
        component.updateProps(props)

        if (!props.clientRect)
          return

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        })
      },
      onKeyDown(props: any) {
        if (props.event.key === 'Escape') {
          popup[0].hide()

          return true
        }

        return component.ref?.onKeyDown(props.event)
      },
      onExit() {
        popup[0].destroy()
        component.destroy()
      },
    }
  },
}
