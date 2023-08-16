module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  ignorePatterns: ['*.bundle.js', '*.config.js', '*.json', '*.md', '*.yml', '*.yaml', 'node_modules'],
  extends: ['eslint:recommended', 'standard'],
  root: true,
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    // force semistandard
    semi: ['error', 'always'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-useless-escape': 'off',
    'no-prototype-builtins': 'off',
    'no-constant-condition': 'off',
    'no-async-promise-executor': 'off',
    'no-irregular-whitespace': 'off'
  }
};
