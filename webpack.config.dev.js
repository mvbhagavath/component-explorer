const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client',
		'./src/index'
	],
	resolve: {
		root: [
			path.resolve('./src')
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/',
		historyApiFallback: true,
		contentBase: '/public/',
		stats: { colors: true },
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.IgnorePlugin(/cls-bluebird/, /request-promise/),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: [/node_modules/, /styles/],
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file-loader?name=images/[name].[ext]'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			},
			{
				test: /\.ico$/,
				loader: 'file-loader?name=/[name].[ext]'
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	externals: {
		fs: '{}',
		tls: '{}',
		net: '{}',
		console: '{}'
	}
};