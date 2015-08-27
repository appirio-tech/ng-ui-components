configs =
  __dirname : __dirname

configs.templateCache =
  files : [
    'src/views/*.html'
    '.tmp/views/*.html'
  ]
  root  : 'views/'
  module: 'appirio-tech-ng-ui-components'

### END CONFIG ###
loadTasksModule = require __dirname + '/node_modules/appirio-gulp-tasks/load-tasks.coffee'

loadTasksModule.loadTasks configs
