module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:security/recommended',
  ],
  overrides: [
    {
      env: {
        browser: true,
        es6: true,
        'jest/globals': true,
        node: true,
      },
      extends: [
        'airbnb-typescript',
        'prettier',
        'prettier/react',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:security/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
        'import',
        'jsx-a11y',
        'jest',
        'prefer-arrow',
        'prettier',
        'security',
        'sort-keys-fix',
      ],
      rules: {
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/indent': 0, // handled by prettier
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-var-requires': 'warn',
        'arrow-body-style': ['error', 'as-needed'],
        curly: ['error', 'all'],
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
            'newlines-between': 'never',
          },
        ],
        'import/prefer-default-export': 0,
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/require-top-level-describe': 'error',
        'jest/valid-expect': 'error',
        'prefer-arrow/prefer-arrow-functions': [
          'warn',
          {
            classPropertiesAllowed: true,
            disallowPrototype: true,
            singleReturnOnly: true,
          },
        ],
        'prettier/prettier': 'error',
        quotes: ['error', 'single', { avoidEscape: true }],
        'react/jsx-no-literals': [
          0,
          {
            noStrings: false,
          },
        ],
        'react/jsx-props-no-spreading': 0,
        'react/jsx-sort-default-props': 'error',
        'react/jsx-sort-props': [
          'error',
          {
            callbacksLast: true,
            ignoreCase: true,
            reservedFirst: true,
          },
        ],
        'react/prop-types': 0,
        'react/sort-prop-types': [
          'error',
          {
            ignoreCase: true,
            sortShapeProp: true,
          },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'security/detect-non-literal-regexp': 0,
        'security/detect-object-injection': 0,
        'security/detect-unsafe-regex': 0,
        'sort-keys-fix/sort-keys-fix': [
          'error',
          'asc',
          { caseSensitive: false, natural: true },
        ],
      },
    },
  ],
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-hooks',
    'import',
    'jsx-a11y',
    'jest',
    'prefer-arrow',
    'prettier',
    'security',
    'sort-keys-fix',
  ],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    curly: ['error', 'all'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'never',
      },
    ],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/require-top-level-describe': 'error',
    'jest/valid-expect': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        singleReturnOnly: true,
      },
    ],
    'prettier/prettier': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-no-literals': [
      0,
      {
        noStrings: false,
      },
    ],
    'react/jsx-props-no-spreading': 0,
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'react/sort-prop-types': [
      'error',
      {
        ignoreCase: true,
        sortShapeProp: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'security/detect-non-literal-regexp': 0,
    'security/detect-object-injection': 0,
    'security/detect-unsafe-regex': 0,
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: false, natural: true },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
