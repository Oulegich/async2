module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    "no-func-assign": "off",
    "no-unused-vars": "off",
    "no-empty": "off",
    "no-unsafe-finally": "off",
    "jest/valid-title": "off",
    'jest/no-conditional-expect': 'off',
    'no-constant-condition': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-fallthrough': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  plugins: ['jest'],
  settings: {
    jest: {
      version: '29',
    },
  },
};
