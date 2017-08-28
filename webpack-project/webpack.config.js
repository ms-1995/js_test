/*
* @Author: fs-zhao
* @Date:   2017-08-28 11:28:43
* @Last Modified by:   fs-zhao
* @Last Modified time: 2017-08-28 15:02:20
*/
module.exports = {
	devtool: "eval-source-map",//打包时生成sourece Maps
  	entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  	output: {
    	path: __dirname + "/public",//打包后的文件存放的地方
    	filename: "bundle.js"//打包后输出文件的文件名
  	},
  	devServer: {
    	contentBase: "./public",//本地服务器所加载的页面所在的目录
    	historyApiFallback: true,//不跳转
    	inline: true//实时刷新
  	},
  	module: {//配置babel
        rules: [
            {
             	test: /(\.jsx|\.js)$/,
                use: {//将presets选项存放在.babelrc中
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    }

}
//__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。