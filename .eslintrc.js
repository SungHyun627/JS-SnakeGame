module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  parser: '@babel/eslint-parser',
  rules: {
    'no-new': 'off',
    'import/extensions': ['off'],
    'class-methods-use-this': ['off'],
    'import/prefer-default-export': 'off',
  },
};
