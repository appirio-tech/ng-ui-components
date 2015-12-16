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

templateCache = ($templateCache) ->
  views = [
    'avatar.example'
    'countdown.example'
    'simple-countdown.example'
    'loader.example'
    'filters.example'
    'modal.example'
    'focus-on-click.example'
    'checkbox.example'
    'selected-button.example'
    'selectable.example'
    'scroll.example'
    'flush-height.example'
    'full-height.example'
    'fitted-width.example'
    'lock-height.example'
    'tooltip.example'
    'date-input.example'
    'dropdown.example'
  ]

  for view in views
    viewSrc = require "./views/#{view}"

    $templateCache.put "views/#{view}.html", viewSrc()

templateCache.$nject = ['$templateCache']

angular.module('example').run templateCache
