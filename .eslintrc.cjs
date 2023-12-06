/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [
      './tsconfig.json',
      './signalling-server/tsconfig.json',
      './display/tsconfig.json',
      './display/tsconfig.node.json',
      './client/tsconfig.json',
      './client/tsconfig.node.json',
    ],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  root: true,
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    'no-console': [
      'warn',
      { allow: ['warn', 'error', 'info', 'trace', 'dir', 'assert'] },
    ],
  },
  overrides: [
    {
      files: ['commitlint.config.js'],
      env: {
        node: true,
      },
    },
  ],
};
