require '../src/scripts/ng-ui-components.module'

directives = [
  'avatar'
  'countdown'
  'simple-countdown'
  'loader'
  'modal'
  'focus-on-click'
  'checkbox'
  'selected-button'
  'selectable'
  'scroll'
  'flush-height'
  'full-height'
  'fitted-width'
  'lock-height'
  'date-input'
  'dropdown'
]

controllers = [
  'countdown'
  'simple-countdown'
  'checkbox'
  'selected-button'
  'date-input'
]

filters = [
  'time-lapse'
  'ordinal-number'
]

for directive in directives
  require "../src/scripts/directives/#{directive}.directive"

for controller in controllers
  require "../src/scripts/controllers/#{controller}.controller"

for filter in filters
  require "../src/scripts/filters/#{filter}.filter"

templateCache = ($templateCache) ->
  views = [
    'avatar'
    'checkbox'
    'countdown'
    'date-input'
    'loader'
    'modal'
    'selectable'
    'selected-button'
    'simple-countdown'
  ]

  for view in views
    viewSrc = require "../src/views/#{view}.directive"

    $templateCache.put "views/#{view}.directive.html", viewSrc()

templateCache.$nject = ['$templateCache']

angular.module('appirio-tech-ng-ui-components').run templateCache

