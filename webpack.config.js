var webpack = require('webpack');

module.exports = {
	// the initial file to be uploaded to bundle
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx'

	],
	externals: {
		jquery: 'jQuery'
	},

	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		})
	],
	// the location to output the entire code
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	// which extensions to get, a javascript object
	resolve: {
		root: __dirname,
		alias: {
			Main: 'app/components/Main.jsx',
			Nav: 'app/components/Nav.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		extensions: ['', '.js', '.jsx']
	},
	// which modules to load jsx through, such as babel
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets:['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				//which directories to ignore
				exclude: /(node_modules|bower_components)/
			}
		]
	}


};