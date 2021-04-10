const withPlugins = require('next-compose-plugins');
const withImages = require('next-images')
const withTranspile = require('next-transpile-modules');
// const withTs = require('next-typescript')
// module.exports.withImages = withImages;
// module.exports.withTranspile = withTranspile;
module.exports = withPlugins(
  [
    [withTranspile,
      {
        resolveSymlinks: true,
        transpileModules: ["ol"],

      },
    ],
    withImages,
    {
      webpack(config, options) {
        const { dir, defaultLoaders } = options
        config.resolve.extensions.push('.ts', '.tsx')
        config.module.rules.push({
          test: /\\.+(ts|tsx)$/,
          include: [dir], 
          exclude: /node_modules/,
          use: [
            defaultLoaders.babel,
            { loader: 'ts-loader', options: { transpileOnly: true } }
          ]
        })
        config.node= {
          // Some libraries import Node modules but don't use them in the browser.
          // Tell Webpack to provide empty mocks for them so importing them works.
          ...config.node,
          fs: 'empty',
          child_process : 'empty',
          net : 'empty',
          tls: 'empty',
        }
        return config
      }
    },
    
  ],
  { 
    env: {
     //setup environmnet variables here or seperate file
    }
  }

    
)
