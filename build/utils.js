'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
var glob = require('glob')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
            use: loaders,
            publicPath: '../../../',         // 修改这里
            fallback: 'vue-style-loader'
        })

    } else {
        return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}


exports.getEntries = function (globPath) {
  var entries = {}
  /**
   * 读取src目录,并进行路径裁剪
   */
  glob.sync(globPath).forEach(function (entry) {
      /**
       * path.basename 提取出用 ‘/' 隔开的path的最后一部分，除第一个参数外其余是需要过滤的字符串
       * path.extname 获取文件后缀
       */
      var basename = path.basename(entry, path.extname(entry)) // 过滤router.js
      // ***************begin***************
      // 当然， 你也可以加上模块名称, 即输出如下： { module/main: './src/module/index/main.js', module/test: './src/module/test/test.js' }
      // 最终编译输出的文件也在module目录下， 访问路径需要时 localhost:8080/module/index.html
      // slice 从已有的数组中返回选定的元素, -3 倒序选择，即选择最后三个
      var tmp = entry.split('/').splice(-3)
      if(basename!==tmp[1]) return;  //过滤其他js文件
      var pathname = tmp.splice(0, 1) + '/' + basename // splice(0, 1)取tmp数组中第一个元素
      entries[pathname] = ['babel-polyfill', entry]
      
  })
  
  return entries
}

/* 变量值
  entry：     ../src/html/index/index.js
  basename:   index
  tmp:        [ 'html', 'index', 'index.js' ]
  pathname:   html/index
  enteries:   { 
                  'html/index': ['babel-polyfill', '../src/html/index/index.js'],
                  'html/first': ['babel-polyfill', '../src/html/first/first.js'] 
              }
*/

/* 这里是添加的部分 ---------------------------- 开始 */

// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
var glob = require('glob')
// 页面模板
var HtmlWebpackPlugin = require('html-webpack-plugin')
// 取得相应的页面路径，因为之前的配置，所以是src文件夹下的pages文件夹
var PAGE_PATH = path.resolve(__dirname, '../src/html')
// 用于做相应的merge处理
var merge = require('webpack-merge')


//多入口配置
// 通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在
// 那么就作为入口处理
exports.entries = function () {
    var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
    var map = {}
    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] = filePath
    })
    return map
}

//多页面输出配置
// 与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
// exports.htmlPlugin = function () {
//     let entryHtml = glob.sync("./src/html/*/*.js")
//     let arr = []
//     entryHtml.forEach((filePath) => {
//         let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
//         let conf = {
//             // 模板来源
//             template: filePath,
//             // 文件名称
//             filename: filename + '.html',
//             // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
//             chunks: ['manifest', 'vendor', filename],
//             inject: true
//         }
//         if (process.env.NODE_ENV === 'production') {
//             conf = merge(conf, {
//                 minify: {
//                     removeComments: true,
//                     collapseWhitespace: true,
//                     removeAttributeQuotes: true
//                 },
//                 chunksSortMode: 'dependency'
//             })
//         }
//         arr.push(new HtmlWebpackPlugin(conf))
//     })
//     return arr
// }
/* 这里是添加的部分 ---------------------------- 结束 */


