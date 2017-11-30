export const changeEditorState = dispatch => state =>
  dispatch({ type: 'editorState', payload: state })

export const toggleInlineStyle = (dispatch, action) => (event) => {
  event.preventDefault()
  dispatch({ type: 'inlineStyle', payload: action })
}
export const createLink = (dispatch, action) => (event) => {
  event.preventDefault()
  dispatch({ type: 'createLink', payload: action })
}

export const save = dispatch => (event) => {
  event.preventDefault()
  dispatch({ type: 'save' })
}
export const load = dispatch => (event) => {
  event.preventDefault()
  dispatch({ type: 'load' })
}
