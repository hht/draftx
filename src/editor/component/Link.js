import React from 'react'

export default ({ contentState, entityKey, children }) => {
  const { url } = contentState.getEntity(entityKey).getData()
  return <a href={url}>{children}</a>
}
