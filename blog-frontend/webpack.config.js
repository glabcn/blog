const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
	    'webpack-hot-middleware/client',
	    './index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
	    new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extension: ['', '.jsx', '.js', '.json'],
		alias: {}
	},
	module: {
	    loaders: [
	      	{
		        test: /\.js[x]?$/,
		        loaders: ['react-hot','babel'],
		        exclude: /node_modules/,
		        include: __dirname
	      	}
    	]
	}
}