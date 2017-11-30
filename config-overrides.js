/* eslint-disable no-param-reassign */
const path = require('path')
const { getLoader } = require('react-app-rewired')

const ESLINT_PATH = `eslint-loader${path.sep}index.js`

const getEslintOptions = (rules) => {
  const matcher = rule =>
    rule.loader &&
    typeof rule.loader === 'string' &&
    rule.loader.endsWith(ESLINT_PATH)
  return getLoader(rules, matcher).options
}

module.exports = (config, env, override = f => f) => {
  //* 修改入口文件
  // config.entry.push(`${__dirname}/src/client/index.js`)

  /* 使用preact替代react
  config.resolve.alias = {
    ...config.resolve.alias,
    react: 'preact-compat',
    'react-dom': 'preact-compat'
  }
  */
  // *配置项目源文件根目录别名
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src/')
  }

  //* 使用自定义eslint配置
  const eslintOptions = getEslintOptions(config.module.rules)
  eslintOptions.useEslintrc = true
  eslintOptions.ignore = true
  override(eslintOptions)

  return config
}
