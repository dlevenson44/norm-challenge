module.exports = {
 'env': {
  'browser': true,
  'es2021': true
 },
 'extends': [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:react/recommended'
 ],
 'overrides': [
  {
   'env': {
    'node': true
   },
   'files': [
    '.eslintrc.{js,cjs}'
   ],
   'parserOptions': {
    'sourceType': 'script'
   }
  }
 ],
 'parser': '@typescript-eslint/parser',
 'parserOptions': {
  'ecmaVersion': 'latest',
  'sourceType': 'module'
 },
 'plugins': [
  '@typescript-eslint',
  'react'
 ],
 'rules': {
  'indent': [
   'warn',
   1
  ],
  'linebreak-style': [
   'warn',
   'unix'
  ],
  'quotes': [
   'warn',
   'single'
  ],
  'semi': [
   'warn',
   'never'
  ],
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn'
 }
}
