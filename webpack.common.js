const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry   : {
		vendor  : [
			'./src/js/vendor.js',
			'./src/css/vendor.css'
		],
		styles  : './src/sass/styles.scss',
		scripts : './src/app.js'
	},
	module  : {
		rules : [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-classes']
					}
				}
			},
			{
				test : /\.html$/,
				use  : [
					'html-loader'
				]
			},
			{
				test : /\.(svg|png|jpg|gif)$/,
				use  : {
					loader  : 'file-loader',
					options : {
						name       : '[name].[ext]',
						outputPath : 'imgs'
					}
				}
			}
		]
	},
	plugins : [
		new CleanWebpackPlugin()
	],
	resolve: {
		fallback: {
			fs : false
		}		
	}
};
