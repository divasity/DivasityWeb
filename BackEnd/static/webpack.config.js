const path = require('path');

module.exports = {
	mode: 'development',
	devtool: "none",
	
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.build.js'
	},
}