import { BehaviorSubject } from 'rxjs/Rx'
import { EditorState } from 'draft-js'
import log from '../util/Logger'

// 统一处理所有的Action
const handle = stream$ => ([action, editorState]) => {
  switch (action.type) {
    case 'EditorState':
      stream$.next(action.payload)
      break
    default:
  }
  // TODO dont forget remove it
  log(action, editorState)
}

export const createStore = (initialState = EditorState.createEmpty()) => {
  // 为每个Editor创建一个状态流和一个动作流
  const editorState$ = new BehaviorSubject(initialState)
  const action$ = new BehaviorSubject({ type: '@INIT' })
  // 订阅接收到的action和最后的EditorState，发送到处理流程
  action$.withLatestFrom(editorState$).subscribe(handle(editorState$))
  // 发送action
  const dispatch = action => action$.next(action)
  // TODO dont forget remove it 暴露store以便测试
  window.editorState$ = editorState$
  window.dispatch = dispatch
  return { editorState$, dispatch }
}
