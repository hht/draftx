export const regexStrategy = regex => (contentBlock, callback) => {
  const text = contentBlock.getText()
  let matchArr
  let start
  // eslint-disable-next-line no-cond-assign
  while ((matchArr = regex.exec(text)) !== null) {
    start = matchArr.index
    callback(start, start + matchArr[0].length)
  }
}

export const entityStrategy = type => (
  contentBlock,
  callback,
  contentState
) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity()
    if (entityKey === null) {
      return false
    }
    return contentState.getEntity(entityKey).getType() === type
  }, callback)
}
