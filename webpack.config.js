const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
	filename: 'index.js',
	path: path.resolve(__dirname, 'es'),
	libraryTarget: 'umd', // 采用通用模块定义
	libraryExport: 'default', // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
  module: {
    rules: [
	  {
	    test: /\.js$/,
		use: {
	      loader: 'babel-loader',
		  options: {
			babelrc: false,
			presets: [
			  [require.resolve('@babel/preset-env'), { modules: false }]
			],
			cacheDirectory: true
		  },
		}
	  }
	]
  }
};
