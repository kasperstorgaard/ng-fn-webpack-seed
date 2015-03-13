var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './js/app.js'
  ],
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      ASSETS_PATH: '/assets'
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.html$/, loaders: ['ng-cache-loader'] },
      { test: /app\/.*\.js$/, loaders: ['ng-annotate']},
      { test: /\.less$/, loaders: ['style-loader','css-loader','less-loader'] },
      { test: /\.css$/, loaders: ['style-loader','css-loader'] },
      { test: /\.(png|jpg)$/, loaders: ['url-loader?limit=8192'] },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: ['url-loader?limit=10000&mimetype=application/font-woff'] },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: ['url-loader?limit=10000&mimetype=application/font-woff2'] },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loaders: ['file-loader'] }
    ]
  }
};
