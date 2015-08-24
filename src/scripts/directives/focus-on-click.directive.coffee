'use strict';

dir = ->
  link = (scope, element, attrs) ->
    $(element).bind 'click', ->
      $(element).focus()

  restrict: 'A'
  link: link

dir.$inject = []

angular.module('appirio-tech-ng-ui-components').directive 'focusOnClick', dir

