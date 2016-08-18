// webpack.config.js
module.exports = {
  entry: './a.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      { test: /\.css$/, loader: 'style-loader!css-loader' },
       {test: /\.svg/, loader: 'svg-url-loader'}
    ]
  },
  url: {
        dataUrlLimit: 1024
  }
};