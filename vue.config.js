const webpack = require("webpack");

module.exports = {
	// 基本路径
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
	assetsDir: "./",
	// 输出文件目录
	outputDir: 'dist'
}