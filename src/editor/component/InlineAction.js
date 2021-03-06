import React from 'react'
import styled from 'styled-components'
import { withProps } from '../core/enchancer'
import { toggleInlineStyle } from '../core/action'

const Action = styled.span`
  border: 1px solid #fff;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
`

export default withProps()(({ action, dispatch }) => (
  <Action onMouseDown={toggleInlineStyle(dispatch, action)}>{action}</Action>
))
