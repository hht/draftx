import { BehaviorSubject } from 'rxjs/Rx'
import { EditorState } from 'draft-js'
// import { isEqual, omit } from 'lodash'
import Reducer from './reducer'
import decorator from './decorator'
import log from '../util/Logger'

// 统一处理所有的Action
const handle = stream$ => ([action, currentState]) => {
  const reducer = Reducer[action.type]
  if (typeof reducer === 'function') {
    reducer(stream$, currentState, action)
  }
  // TODO dont forget remove it
  log(action, currentState)
}
// eslint-disable-next-line max-len
export const createStore = (initialState = EditorState.createEmpty(decorator)) => {
  // 为每个Editor创建一个状态流和一个动作流
  // eslint-disable-next-line max-len
  const editorState$ = new BehaviorSubject(initialState)
  const action$ = new BehaviorSubject({ type: '@INIT' })
  // 订阅接收到的action和最后的EditorState，发送到处理流程
  action$.withLatestFrom(editorState$).subscribe(handle(editorState$))
  // 发送action
  const dispatch = action => action$.next(action)
  // TODO dont forget remove it 暴露store以便测试
  window.dispatch = dispatch
  return { editorState$, dispatch }
}
