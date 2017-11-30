import {
  RichUtils,
  Modifier,
  EditorState,
  convertToRaw,
  convertFromRaw
} from 'draft-js'
import decorator from './decorator'

const editorState = (stream$, currentState, action) =>
  stream$.next(action.payload)
const inlineStyle = (stream$, currentState, action) =>
  stream$.next(RichUtils.toggleInlineStyle(currentState, action.payload))
const createLink = (stream$, currentState, action) => {
  const contentState = currentState.getCurrentContent()
  const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {
    url: action.payload
  })
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
  const contentStateWithLink = Modifier.applyEntity(
    contentStateWithEntity,
    currentState.getSelection(),
    entityKey
  )
  // eslint-disable-next-line max-len
  stream$.next(EditorState.set(currentState, { currentContent: contentStateWithLink }))
}
const save = (stream$, currentState) =>
  window.localStorage.setItem(
    'Editor',
    JSON.stringify(convertToRaw(currentState.getCurrentContent()))
  )
const load = (stream$) => {
  // eslint-disable-next-line max-len
  stream$.next(EditorState.createWithContent(
    convertFromRaw(JSON.parse(window.localStorage.getItem('Editor'))),
    decorator
  ))
}

export default {
  editorState,
  inlineStyle,
  createLink,
  save,
  load
}
