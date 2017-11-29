import '@/assets/scss/editor.scss'
import React from 'react'
import { Observable } from 'rxjs/Rx'
import { Editor, EditorState } from 'draft-js'
import { mapPropsStream, setObservableConfig } from 'recompose'
import { createStore } from './core/store'

setObservableConfig({
  fromESObservable: Observable.from
})

const EditorPane = ({ store }) => {
  const Component = mapPropsStream(props$ =>
    props$.combineLatest(store.state$, (props, editorState) => ({
      ...props,
      editorState
    })))(({ editorState }) => (
      <Editor
        editorState={editorState}
        onChange={(state) => {
          store.action$.next({ type: 'EditorState', payload: state })
        }}
      />
  ))
  return <Component />
}

const component = ({ initialState = EditorState.createEmpty() }) => {
  const store = createStore(initialState)
  return (
    <div className="editor">
      <EditorPane store={store} />
    </div>
  )
}
export default component
