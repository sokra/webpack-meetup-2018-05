const path = require("path");
module.exports = {
	mode: "production",

	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, "src")	
				],
				loader: "babel-loader"
			}
		]
	},

	optimization: {
		splitChunks: {
			chunks: "all"
		}
	}
};
