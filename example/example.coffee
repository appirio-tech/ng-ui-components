require './styles/main.scss'

require './scripts/example.module'
require './scripts/routes'
require './scripts/modal-example.controller'
require './scripts/checkbox-example.controller'
require './scripts/selected-button-example.controller'
require './scripts/lock-height-example.controller'
require './scripts/dropdown.example.controller'
require './scripts/date-input.example'

exampleNav = require './nav.jade'

$('#example-nav').html exampleNav()

views = require.context './views/', true, /^(.*\.(jade$))[^.]*$/igm
viewPaths = views.keys()

templateCache = ($templateCache) ->
  for viewPath in viewPaths
    viewPathClean = viewPath.split('./').pop()

    # TODD: bug if .jade occurs more often than once
    viewPathCleanHtml = viewPathClean.replace '.jade', '.html'

    $templateCache.put "views/#{viewPathCleanHtml}", views(viewPath)()

templateCache.$nject = ['$templateCache']

angular.module('example').run templateCache
