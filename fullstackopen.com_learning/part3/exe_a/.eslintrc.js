/*
 * @Author: JAM-SEVEN
 * @Date: 2021-06-30 14:47:54
 * @LastEditTime: 2021-06-30 14:48:05
 * @Description: TO DO
 */
module.exports = {
  parser: '@typescript-eslint/parser', // 指定ESLint解析器
  extends: [
    'plugin:react/recommended', // 使用来自 @eslint-plugin-react 的推荐规则
    'plugin:@typescript-eslint/recommended', // 使用来自@typescript-eslint/eslint-plugin的推荐规则
    'prettier/@typescript-eslint', // 使用 ESLint -config-prettier 禁用来自@typescript-eslint/ ESLint 与 prettier 冲突的 ESLint 规则
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018, // 允许解析最新的 ECMAScript 特性
    sourceType: 'module', // 允许使用 import
    ecmaFeatures: {
      jsx: true // 允许对JSX进行解析
    }
  },
  rules: {
    // 自定义规则
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: 'detect' // 告诉 eslint-plugin-react 自动检测 React 的版本
    }
  }
};
