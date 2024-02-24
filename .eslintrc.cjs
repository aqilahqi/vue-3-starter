/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/attributes-order': [
      'error',
      {
        alphabetical: true
      }
    ],
    'vue/multi-word-component-names': ['error'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/component-definition-name-casing': [
      'error',
      'PascalCase' // 'kebab-case || PascalCase'
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/script-indent': [
      'error',
      'tab',
      { baseIndent: 1, ignores: ['./test/vitest/__tests__/*.ts'] }
    ],
    'vue/html-indent': [
      'error',
      'tab',
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: ['./test/vitest/__tests__/demo/*.vue']
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
        allowEmptyLines: false
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
}
