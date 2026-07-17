// eslint.config.js (in your project root)
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/dist', '**/node_modules'],
  },
  {
    languageOptions: {
      parserOptions: {
        project: true,
        // This tells ESLint to look at the tsconfig relative to the current file
        tsconfigRootDir: import.meta.dirname, 
      },
    },
  },
);