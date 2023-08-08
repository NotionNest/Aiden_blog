import Placeholder from "@tiptap/extension-placeholder";
import { NodeSelection, TextSelection } from 'prosemirror-state'

// Overwrite the keyboard shortcuts
export default Placeholder.extend({
	addOptions() {
		return {
			...this.parent?.(),	
			placeholder: "Type '/' for commands",
			// ({node, editor}) => {
			// 	const selection = editor.state.selection as NodeSelection
			// 	if (selection instanceof TextSelection) {
			// 		return " Type '/' for commands"
			// 	}
			// },
			includeChildren: true
		}
	}
})