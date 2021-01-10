// 引入path模块
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    //接受当前目录(__dirname)下的icons目录
    const dir = path.resolve(__dirname, 'src/assets/icons')
    // config就是Vue把Webpack封装了暴露给我们的对象
    config.module
      // 添加一个规则，规则名为sve-sprite
      .rule('sve-sprite')
      //文件如果匹配的上正则,就用这个规则,但只需要这个文件下遵守这个规则
      .test(/\.svg$/)
      //表示只包含icons目录
      .include.add(dir).end()
      //要使用哪些loader
      //使用svg-sprite-loader，并添加一个选项
      //extract:false是不要把它解析出文件来
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()
    //配置插件
    // 插件名字svg-sprite，使用svg-sprite-loader/plugin路径
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])
    //其他svg loader排除 icons 目录
    config.module.rule('svg').exclude.add(dir)
  }
}
