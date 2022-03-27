module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					tests: ['./tests/'],
					'@components': './src/components',
					'@screens': './src/screens',
					'@themes': './src/themes',
					'@assets': './src/assets',
					'@img': './src/assets/img',
					'@icons': './src/assets/icons',
					'@utils': './src/utils',
					'@modules': './src/modules',
					'@constants': './src/constants',
				},
			},
		],
		'react-native-reanimated/plugin',
	],
	env: {
		production: {
			plugins: ['transform-remove-console'],
		},
	},
};
