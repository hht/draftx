import React from 'react'
import { Editor } from 'draft-js'
import { compose } from 'recompose'
import styled from 'styled-components'
import { withStore, withProps } from './core/enchancer'
import { changeEditorState } from './core/action'
import Toolbar from './component/Toolbar'

const Container = styled.div`
  margin: 8px;
  border: 1px solid #03a9f4;
  .DraftEditor-root {
    padding: 8px;
  }
`
// eslint-disable-next-line max-len
export default compose(withStore, withProps({ editorState: el => el }))(({ dispatch, editorState }) => (
    <Container>
      <Toolbar />
      <Editor
        editorState={editorState}
        onChange={changeEditorState(dispatch)}
      />
    </Container>
))
