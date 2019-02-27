
const {
  IS_PROD,
  CDN_DOMAIN,
  NODE_ENV,
  OUTPUT_SUFFIX,
  LOCAL_IP_ADDRESS
} = require('./config/constant');
const { resolveFromRoot } = require('./config/util');

const publicPath = IS_PROD 
  ? `${CDN_DOMAIN}${OUTPUT_SUFFIX}`
  : LOCAL_IP_ADDRESS

module.exports = {
    // publicPath: '',
    lintOnSave: false,
    publicPath,    
    outputDir: resolveFromRoot(`../server/app${OUTPUT_SUFFIX}`),
    devServer: {
      inline: true,
      contentBase: resolveFromRoot(`../server/app${OUTPUT_SUFFIX}`),
      headers: {'Access-Control-Allow-Origin': '*'}
    },
    css: {
      loaderOptions: {
        sass: {
          // 这里的选项会传递给 sass-loader
        }
      }
    },
    configureWebpack: () => ({
      optimization: {
        splitChunks: {
          cacheGroups: {
            'vue-vendor': {
              /* eslint-disable no-useless-escape */
              chunks: 'initial',
              test: /[\/]node_modules[\/](vue|axios)/,
              name: 'vue-vendor',
              priority: -9,
              enforce: true
            }
          }
        }
      }
    }),
    chainWebpack: config => {

      // 修改 babel.config.js cwd
      config.module
        .rule('js')
        .use('babel-loader')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return Object.assign(options || {}, {
            cwd: __dirname
          });
        });
    }
}
