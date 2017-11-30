import React from 'react'
import { Editor } from 'draft-js'
import { compose } from 'recompose'
import styled from 'styled-components'
import { withStore, withProps } from './core/enchancer'

const Container = styled.div`
  margin: 8px;
  padding: 8px;
  border: 1px solid #99ccff;
  border-radius: 4px;
`
// eslint-disable-next-line max-len
export default compose(withStore, withProps({ editorState: el => el }))(({ dispatch, editorState }) => (
    <Container>
      <Editor
        editorState={editorState}
        onChange={state => dispatch({ type: 'EditorState', payload: state })}
      />
    </Container>
))
