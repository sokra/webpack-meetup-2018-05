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

	resolve: {
		alias: {
			react: "react-bundle",
			"react-dom": "react-bundle",
			"react-bundle": path.resolve(__dirname, "react-bundle/node_modules/react-bundle.js")
		}
	}
};
