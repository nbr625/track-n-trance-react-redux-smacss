import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
        ],
        loaders: [ 'react-hot-loader', 'babel' ]
      },
       {
         test: /\.css$/,
         loaders: ['css']
       },
       {
         test: /\.scss$/,
         loaders: ['style', 'css', 'sass']
       },
       {
         test: /\.(jpe?g|png|gif|svg)$/i,
         loaders: [
           'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
           'image-webpack-loader'
         ]
       }

    ]
  },
  imageWebpackLoader: {
    mozjpeg: {
      quality: 65
    },
    pngquant:{
      quality: "65-90",
      speed: 4
    },
    svgo:{
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        }
      ]
    },
    // Specifying webp here will create a WEBP version of your JPG/PNG images
    webp: {
      quality: 75
    }
  },
  resolve: {
    extentions: ['', '.js']
  },
  node: {
    net: 'empty',
    dns: 'empty'
  }
}
