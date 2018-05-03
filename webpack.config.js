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
				loader: "babel-loader",

				options: {
					presets: [
						["env", {modules: false}],
						"react"
					],
					plugins: ["syntax-dynamic-import"]
				}
			}
		]
	},

	optimization: {
		splitChunks: {
			chunks: "all"
		}
	}
};
