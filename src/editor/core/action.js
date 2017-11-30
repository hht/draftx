export const changeEditorState = dispatch => state =>
  dispatch({ type: 'EditorState', payload: state })

export const toggleInlineStyle = (dispatch, action) => (event) => {
  event.preventDefault()
  dispatch({ type: 'InlineStyle', payload: action })
}
