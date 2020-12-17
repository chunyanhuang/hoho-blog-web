const path = require('path');

module.exports = {
    entry:  './app/router.js', // 入口文件
    output: {
      path: path.resolve(__dirname, './route'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js" // 打包后输出文件的文件名
    }
  }