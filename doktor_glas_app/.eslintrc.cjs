module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        bracketSameLine: true,
        useTabs: false,
        tabWidth: 2
      }
    ],
    'react-refresh/only-export-components': 'warn'
  },
  overrides: [
    { files: ['*.ts', '*.tsx', '*.js'], parser: '@typescript-eslint/parser' }
  ]
};
