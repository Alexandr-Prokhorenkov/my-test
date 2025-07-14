// eslint.config.js
import parser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from '@typescript-eslint/eslint-plugin';
import angular from '@angular-eslint/eslint-plugin';
import angularTemplatePlugin from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
      globals: Object.fromEntries(
        Object.entries({
          ...globals.browser,
          ...globals.es2021,
        }).map(([key, value]) => [key.trim(), value]),
      ),
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@angular-eslint': angular,
      'simple-import-sort': simpleImportSort,
      prettier,
    },
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],

      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            constructors: 'no-public',
          },
        },
      ],
      '@angular-eslint/no-empty-lifecycle-method': 'warn',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component'] }],
      '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'warn',
      'no-var': 'error',
      'prettier/prettier': 'error',
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
    },
  },

  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplatePlugin,
    },
    rules: {
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/banana-in-box': 'error',
      '@angular-eslint/template/no-call-expression': 'warn',
      '@angular-eslint/template/conditional-complexity': ['warn', { maxComplexity: 3 }],
      '@angular-eslint/template/cyclomatic-complexity': ['warn', { maxComplexity: 5 }],
    },
  },

  {
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
];