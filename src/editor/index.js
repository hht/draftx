import '@/assets/scss/editor.scss'
import React from 'react'
import { Editor } from 'draft-js'
import { compose } from 'recompose'
import { withStore, withProps } from './core/enchancer'

// eslint-disable-next-line max-len
export default compose(withStore, withProps({ editorState: el => el }))(({ dispatch, editorState }) => (
    <div className="editor">
      <Editor
        editorState={editorState}
        onChange={state => dispatch({ type: 'EditorState', payload: state })}
      />
    </div>
))
