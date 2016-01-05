'use strict'

directive = ->
  link = (scope, element, attrs) ->
    closeButton = $ '<button type="button" class="clean close"><div class="icon cross"></div></button>'
    $element    = $ element[0]

    toggleShow = (show) ->
      if show && show != 'false'
        $element.addClass 'show'
      else
        $element.removeClass 'show'

    close = ->
      scope.show = false
      scope.$apply()

    closeButton.prependTo($element).bind 'click', close

    unless attrs['backgroundClickClose']
      $element.bind 'click', (e) ->
        close() if e.target == $element[0]

    scope.$watch 'show', toggleShow

  restrict: 'E'
  link    : link
  scope:
    show: '='

directive.$inject = []

angular.module('appirio-tech-ng-ui-components').directive 'modal', directive
