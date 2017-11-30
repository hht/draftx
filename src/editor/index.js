import React from 'react'
import { Editor, Modifier, EditorState } from 'draft-js'
import { compose } from 'recompose'
import styled from 'styled-components'
import { withStore, withProps } from './core/enchancer'
import Toolbar from './component/Toolbar'

const Container = styled.div`
  margin: 8px;
  border: 1px solid #03a9f4;
  .DraftEditor-root {
    padding: 8px;
  }
`

const handleBeforeInput = stream$ => (chars, editorState) => {
  const selection = editorState.getSelection()
  const startOffset = selection.getStartOffset()
  const content = editorState.getCurrentContent()
  const block = content.getBlockForKey(selection.getStartKey())
  const entity = block.getEntityAt(startOffset)

  if (entity === null) {
    const style = editorState.getCurrentInlineStyle()
    const newContent = Modifier.insertText(
      content,
      selection,
      chars,
      style,
      null
    )
    stream$.next(EditorState.push(editorState, newContent, 'insert-characters'))

    return 'handled'
  }

  return 'not-handled'
}
// eslint-disable-next-line max-len
export default compose(withStore, withProps({ editorState: el => el }))(({ editorState$, editorState }) => (
    <Container>
      <Toolbar />
      <Editor
        editorState={editorState}
        handleBeforeInput={handleBeforeInput(editorState$)}
        onChange={(state) => {
          editorState$.next(state)
        }}
      />
    </Container>
))
