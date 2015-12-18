require.context './styles/', true, /^(.*\.(scss$))[^.]*$/igm

require './scripts/ng-ui-components.module'


requireContextFiles = (files) ->
  paths = files.keys()

  for path in paths
    files path

directives  = require.context './scripts/directives/', true, /^(.*\.(coffee$))[^.]*$/igm
controllers = require.context './scripts/controllers/', true, /^(.*\.(coffee$))[^.]*$/igm
filters     = require.context './scripts/filters/', true, /^(.*\.(coffee$))[^.]*$/igm

requireContextFiles directives
requireContextFiles controllers
requireContextFiles filters


views = require.context './views/', true, /^(.*\.(jade$))[^.]*$/igm
viewPaths = views.keys()

templateCache = ($templateCache) ->
  for viewPath in viewPaths
    viewPathClean = viewPath.split('./').pop()

    # TODD: bug if .jade occurs more often than once
    viewPathCleanHtml = viewPathClean.replace '.jade', '.html'

    $templateCache.put "views/#{viewPathCleanHtml}", views(viewPath)()

templateCache.$nject = ['$templateCache']

angular.module('appirio-tech-ng-ui-components').run templateCache

