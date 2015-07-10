configs =
  coffeeFiles     : 'app/**/*.coffee'
  jadeFiles       : 'app/**/*.jade'
  scssFiles       : 'app/**/*.scss'
  scssIncludePaths: require('appirio-work-styles').includePaths
  tempFolder      : '.tmp'
  appFolder       : 'app'
  distFolder      : 'dist'
  envFile         : __dirname + '/.env'
  taskPath        : __dirname + '/node_modules/appirio-gulp-tasks'

# TODO: upgrade api schemas in order to use default configs instead of below
configs.fixture =
  destPath: configs.tempFolder

configs.fixture.files = [
  'bower_components/appirio-tech-api-schemas/v3.json'
  'bower_components/appirio-tech-api-schemas/v2.json'
  'bower_components/appirio-tech-api-schemas/v3-users.json'
]

# TODO: CORS for https://topcoder-dev.auth0.com/oauth/ro is hard coded to allow http://localhost:3000/
configs.serve =
  port: 3000

configs.cdnify =
  url: '//work.topcoder-dev.com'

configs.useref =
  searchPath: ['.tmp', 'src/client/app/', '.']

configs.copyFiles =
  files:
    'dist': 'app/**/*.{gif,png,jpg,jpeg,svg}'
  base: 'app/'

# TODO:  use default settings
configs.ngConstants =
  destPath: '.tmp'

configs.templateCache =
  files   : ['app/**/*.html', '.tmp/**/*.html', '!.tmp/index.html']
  module  : 'appirio-tech-ng-ui-components'
  destPath: '.tmp'
  # root  : '/views'

#TODO: remove using wiredep
wiredep    = require 'wiredep'
bowerFiles = wiredep({devDependencies: true})['js']
karmaFiles = bowerFiles

configs.karma =
  configFile  : __dirname + '/node_modules/appirio-gulp-tasks/tasks/karma.conf.coffee'
  basePath    : __dirname
  coffeeFiles : [
    __dirname + '/src/client/**/*.coffee'
  ]
  files: karmaFiles.concat([
    __dirname + '/.tmp/json-fixtures.js'
    __dirname + '/bower_components/auto-config-fake-server/dist/auto-config-fake-server.js'
    __dirname + '/bower_components/appirio-tech-ng-auth/dist/main.js'
    __dirname + '/tests/*.js'
    __dirname + '/app/**/*.stubs.js'
    # __dirname + '/src/client/mock-api/*.coffee'
    __dirname + '/tests/*.coffee'
    __dirname + '/app/**/*.module.{js,coffee}'
    __dirname + '/app/**/*.{js,coffee}'
    __dirname + '/.tmp/constants.js'
    __dirname + '/.tmp/templates.js'
  ])


### END CONFIG ###
loadTasksModule = require __dirname + '/node_modules/appirio-gulp-tasks/load-tasks.coffee'

loadTasksModule.loadTasks configs
