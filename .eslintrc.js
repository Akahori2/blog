module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
		'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		//prettierは一番最後
		'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
      '@typescript-eslint',
      'import',
      'jsx-a11y',
      'react',
      'react-hooks',
  ],
  root: true,
  rules: {
		'no-use-before-define': 'off',
		"no-console": "off",
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-void': ['error', { allowAsStatement: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'argsIgnorePattern': '_',
        'ignoreRestSiblings': false,
        'varsIgnorePattern': '_',
      },
		],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
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
		'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
		],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/require-default-props': 'off',
		'prettier/prettier': [
			'error',
			{
				'singleQuote': true,
				'arrowParens': 'always',
				'useTabs': true,
				'tabWidth': 4,
				'bracketSpacing': true,
				'singleQuote': true,
				'trailingComma': 'all',
				'printWidth': 120,
			},
		],
		'import/no-unresolved': 'off',
		'jsx-a11y/img-redundant-alt': 'off',
  },
  overrides: [
    {
      'files': ['*.tsx'],
      'rules': {
        'react/prop-types': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
			},
    },
  },
};
