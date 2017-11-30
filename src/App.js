import React from 'react'
import styled from 'styled-components'
import Editor from './editor'

const App = styled.div`
  margin: 0;
  padding: 0;
`
const AppHeader = styled.header`
  background-color: #03a9f4;
  height: 48px;
  padding: 8px;
  color: white;
`
const Title = styled.h3`
  font-size: 1.5em;
`
export default () => (
  <App>
    <AppHeader>
      <Title>A RichText Editor based on draft and rxjs</Title>
    </AppHeader>
    <Editor />
  </App>
)
