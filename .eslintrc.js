module.exports = {
	env: {
		es2021: true,
		node: true,
		'react-native/react-native': true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['import', 'react', 'react-native', 'react-hooks', '@typescript-eslint'],
	rules: {
		// eslint-plugin-import
		'import/first': 1,
		'import/newline-after-import': 1,
		'import/no-cycle': 2,
		'import/no-duplicates': 1,
		'import/no-unresolved': 2,
		'import/no-unused-modules': 1,

		// eslint-plugin-prettier
		'prettier/prettier': 0,

		// eslint-plugin-react-native
		'react-native/no-color-literals': 1,
		'react-native/no-inline-styles': 1,
		'react-native/no-single-element-style-arrays': 1,
		'react-native/no-unused-styles': 1,

		// eslint-plugin-react-hooks
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

		// eslint-plugin-@typescript-eslint
		'@typescript-eslint/explicit-function-return-type': [
			1,
			{'allowExpressions': true, 'allowTypedFunctionExpressions': true}
		],
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/no-empty-interface': 1,
		'@typescript-eslint/no-unused-vars': [1, {'argsIgnorePattern': '^_'}],
		'@typescript-eslint/no-use-before-define': 0,
		'@typescript-eslint/comma-dangle': ['error', 'only-multiline'],

		// ignore errors for the react-navigation package
		'react/prop-types': ['error', {'ignore': ['navigation', 'navigation.navigate']}],

		'linebreak-style': ['error', 'unix'],
		indent: ['error', 'tab'],
		quotes: ['error', 'single', {avoidEscape: true}],
		semi: ['error', 'always'],
	},
};
