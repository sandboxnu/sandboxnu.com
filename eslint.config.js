import reactPlugin from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import astroPlugin from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import astroParser from 'astro-eslint-parser';

export default [
  {
    // Global settings
    ignores: ['**/node_modules/*', 'dist/**/*'],
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
  {
    // JavaScript/TypeScript/React files
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    // Astro files
    files: ['**/*.astro'],
    plugins: {
      astro: astroPlugin,
    },
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
    },
  },
];
