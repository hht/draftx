import { RichUtils } from 'draft-js'

const EditorState = (stream$, currentState, action) =>
  stream$.next(action.payload)
const InlineStyle = (stream$, currentState, action) =>
  stream$.next(RichUtils.toggleInlineStyle(currentState, action.payload))

export default {
  EditorState,
  InlineStyle
}
