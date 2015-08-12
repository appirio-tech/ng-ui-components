'use strict'

directive = ->
  link = (scope, element, attrs) ->
    overlay     = $ '#modal-overlay'
    closeButton = $ '<button type="button" class="clean close"><div class="icon cross"></div></button>'
    $element    = $ element[0]

    toggleShow = (show) ->
      if show && show != 'false'
        $element.addClass 'show'
        overlay.show()
      else
        $element.removeClass 'show'
        overlay.hide()

    close = ->
      scope.show = false
      scope.$apply()

    closeButton.prependTo($element).bind 'click', close

    unless overlay.length
      overlay = $ '<div id="modal-overlay"></div>'
      overlay.appendTo 'body'

    $element.bind 'click', (e) ->
      close() if e.target == $element[0]

    scope.$watch 'show', toggleShow

  restrict: 'E'
  link    : link
  scope:
    show: '='

directive.$inject = []

angular.module('appirio-tech-ng-ui-components').directive 'modal', directive
