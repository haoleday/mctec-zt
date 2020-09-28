/*
 * @Author: your name
 * @Date: 2020-09-28 14:21:16
 * @LastEditTime: 2020-09-28 14:22:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zt\vue.config.js
 */
// vue.config.js
module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= '成功丰硕'
          return args
        })
    }
  }