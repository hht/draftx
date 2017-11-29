/**
 * Action格式
 * {
 *  type
 *  payload
 *  target
 * }
 */
import log from '../util/Logger'

// 接收action和当前Editor状态，修改状态或发送新的Action
export const dispatch = stream$ => ([action, editorState]) => {
  switch (action.type) {
    case 'EditorState':
      stream$.next(action.payload)
      break
    default:
  }
  log(action, editorState)
}
