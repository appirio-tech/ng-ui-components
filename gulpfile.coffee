configs =
  __dirname : __dirname

configs.templateCache =
  files : [
    '.tmp/views/avatar.directive.html'
    '.tmp/views/countdown.directive.html'
    '.tmp/views/loader.directive.html'
  ]
  root  : 'views/'
  module: 'appirio-tech-ng-ui-components'


### END CONFIG ###
loadTasksModule = require __dirname + '/node_modules/appirio-gulp-tasks/load-tasks.coffee'

loadTasksModule.loadTasks configs
