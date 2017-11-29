import React from 'react'
import { Observable } from 'rxjs/Rx'
import { keys, values, zipObject, mapValues } from 'lodash'
import { PropTypes } from 'prop-types'
import {
  compose,
  mapPropsStream,
  withContext,
  getContext,
  setObservableConfig
} from 'recompose'
import { createStore } from './store'

setObservableConfig({
  fromESObservable: Observable.from
})

// context对象值
const propTypes = { editorState$: PropTypes.object, dispatch: PropTypes.func }

// 将对象的值映射为对editorState$的变换
const transform = origins => props =>
  mapValues(origins, callback => callback(props.editorState$))

// 将store中的editorState$首先变换然后映射为组件属性
const mapStreams = origins => BaseComponent => (props) => {
  const streams = transform(origins)(props)
  const Component = mapPropsStream(props$ =>
    props$.combineLatest(...values(streams), (ownProps, ...rest) => ({
      ...ownProps,
      ...zipObject(keys(streams), rest),
      ...props
    })))(BaseComponent)
  return <Component />
}

export const withProps = origins =>
  compose(getContext(propTypes), mapStreams(origins))

// 初始化store并绑定到context
export const withStore = BaseComponent => ({ initialState, children }) => {
  // eslint-disable-next-line max-len
  const Component = withContext(propTypes, () => createStore(initialState))(BaseComponent)
  return <Component>{children}</Component>
}
