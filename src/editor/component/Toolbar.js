import styled from 'styled-components'
import React from 'react'
import Action from './InlineAction'

const Toolbar = styled.div`
  background: #03a9f4;
  color: #fff;
  font-weight: 900;
  min-height: 24px;
  padding: 4px;
`

export default () => (
  <Toolbar>
    <Action action="BOLD" />
    <Action action="UNDERLINE" />
  </Toolbar>
)
