webpack           = require 'webpack'
path              = require 'path'
srcPath           = path.join __dirname, '/../src'
examplePath       = path.join __dirname, '/example'
ExtractTextPlugin = require 'extract-text-webpack-plugin'

config = {}
config.context = __dirname

config.entry =
  lib    : './example/lib.coffee'
  main   : './example/main.coffee'
  example: './example/example.coffee'

config.output = filename: '[name].js'

config.devServer =
  contentBase       : './example/'
  historyApiFallback: true
  hot               : true
  port              : 9000
  publicPath        : '/assets/'
  noInfo            : false

config.resolve =
  modulesDirectories: ['node_modules', 'bower_components']
  extensions: ['', '.js', '.json', '.coffee', '.jade', '.scss']
  alias:
    example: examplePath + '/actions/'
    # src: srcPath + '/components/'

config.sassLoader =
  includePaths: [
    path.join __dirname, '/node_modules/bourbon/app/assets/stylesheets'
    path.join __dirname, '/node_modules/appirio-styles/styles'
  ]

config.module =
  loaders: [
    test: /\.jade$/
    loader: 'jade-loader?self'
  ,
    test: /\.html$/
    loader: 'raw'
  ,
    test: /\.coffee$/
    loader: "coffee"
  ,
    test: /\.(coffee\.md|litcoffee)$/
    loader: "coffee?literate"
  ,
    test: /\.json$/
    loader: 'json'
  ,
    test: /\.scss$/
    loader: ExtractTextPlugin.extract 'style-loader', 'css-loader!sass-loader'
  ]

config.plugins = [
  new ExtractTextPlugin '[name].css'
]

module.exports = config
