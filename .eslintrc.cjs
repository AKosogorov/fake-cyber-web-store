/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: 1
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below'
      }
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: true
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'CONDITIONALS',
          'DEFINITION',
          'LIST_RENDERING',
          'RENDER_MODIFIERS',
          'TWO_WAY_BINDING',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'OTHER_DIRECTIVES',
          ['ATTR_STATIC', 'ATTR_DYNAMIC', 'ATTR_SHORTHAND_BOOL'],
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    "vue/html-quotes": [ "error", "double", { "avoidEscape": false } ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          ['template', 'render'],
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          'emits',
          ['props', 'propsData'],
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'watch',
          'watchQuery',
          'LIFECYCLE_HOOKS',
          'methods',
          'renderError'
        ]
      }

    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'always',
        maxEmptyLines: 1
      }
    ],
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: true
      }
    ]
  }
}
