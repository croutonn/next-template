const commonRules = {
  'react/require-default-props': [
    'error',
    {
      forbidDefaultForRequired: true,
      ignoreFunctionalComponents: true,
    },
  ],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal'],
      pathGroups: [
        {
          pattern: '@/**',
          group: 'internal',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
      },
    },
  ],
}

module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      rules: {
        ...commonRules,
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            project: 'tsconfig.json',
          },
          node: {
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
          },
        },
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      extends: ['airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
      rules: {
        ...commonRules,
      },
    },
    {
      files: [
        './test/**/*.ts',
        './test/**/*.tsx',
        '**/__tests__/**/*.ts',
        '**/__tests__/**/*.tsx',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.spec.ts',
        '**/*.spec.tsx',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
}
