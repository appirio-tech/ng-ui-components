require 'react-select/dist/react-select.css'
require 'zepto/zepto.min.js'
require 'angular'
require 'angular-ui-router'
require 'angular-scroll'
require 'ngreact'

window.moment = require 'moment/moment'
window.Select = require 'react-select'

require './scripts/ng-ui-components.module'

requireContextFiles = (files) ->
  paths = files.keys()

  for path in paths
    files path

images      = require.context './images/', true, /^(.*\.(svg$))[^.]*$/igm
styles      = require.context './styles/', true, /^(.*\.(scss$))[^.]*$/igm
directives  = require.context './scripts/directives/', true, /^(.*\.(coffee$))[^.]*$/igm
controllers = require.context './scripts/controllers/', true, /^(.*\.(coffee$))[^.]*$/igm
filters     = require.context './scripts/filters/', true, /^(.*\.(coffee$))[^.]*$/igm

requireContextFiles styles
requireContextFiles directives
requireContextFiles controllers
requireContextFiles filters

views     = require.context './views/', true, /^(.*\.(jade$))[^.]*$/igm
viewPaths = views.keys()

templateCache = ($templateCache) ->
  for viewPath in viewPaths
    viewPathClean = viewPath.split('./').pop()

    # TODD: bug if .jade occurs more often than once
    viewPathCleanHtml = viewPathClean.replace '.jade', '.html'

    $templateCache.put "views/#{viewPathCleanHtml}", views(viewPath)()

templateCache.$inject = ['$templateCache']

angular.module('appirio-tech-ng-ui-components').run templateCache

