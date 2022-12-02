const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const modernizr = require('modernizr');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'assets')
	},
	module: {
		rules: [
			{
				test: /\.modernizrrc.js$/,
				loader: 'modernizr'
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin()
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].css' }),
		new CopyPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'index.html'),
					to: path.resolve(__dirname, 'dist')
				}
			]
		})
	],
	resolve: {
		alias: {
			modernizr$: path.resolve(__dirname, './src/app/.modernizrrc.js')
		}
	}
});
