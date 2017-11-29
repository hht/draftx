import { BehaviorSubject } from 'rxjs/Rx'
import { dispatch } from './action'

export const createStore = (initialState) => {
  // 为每个Editor创建一个状态流和一个动作流
  const state$ = new BehaviorSubject(initialState)
  const action$ = new BehaviorSubject({ type: '@INIT' })
  // 订阅接收到的action和最后的EditorState，发送到处理流程
  action$.withLatestFrom(state$).subscribe(dispatch(state$))
  return { state$, action$ }
}
