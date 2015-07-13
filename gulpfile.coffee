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

configs.cdnify =
  url: '//work.topcoder-dev.com'

configs.useref =
  searchPath: ['.tmp', 'src/client/app/', '.']

configs.templateCache =
    files   : [
      'app/**/*.html',
      '.tmp/**/*.html',
      '!.tmp/index.html',
      '.tmp/views/avatar.directive.html']
    module  : 'appirio-tech-ng-ui-components'
    destPath: '.tmp'
    root    : '/views'

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
    __dirname + '/bower_components/auto-config-fake-server/dist/auto-config-fake-server.js'
    __dirname + '/tests/*.js'
    __dirname + '/app/**/*.stubs.js'
    __dirname + '/tests/*.coffee'
    __dirname + '/app/**/*.module.{js,coffee}'
    __dirname + '/app/**/*.{js,coffee}'
    __dirname + '/.tmp/constants.js'
    __dirname + '/.tmp/templates.js'
  ])


### END CONFIG ###
loadTasksModule = require __dirname + '/node_modules/appirio-gulp-tasks/load-tasks.coffee'

loadTasksModule.loadTasks configs
