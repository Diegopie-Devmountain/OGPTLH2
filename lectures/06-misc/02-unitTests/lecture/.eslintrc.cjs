/* eslint-env node */

module.exports = {
  env: { browser: false, es2020: true, 'jest/globals': true },
  extends: ['eslint:recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['jest'],
  rules: {},
};
