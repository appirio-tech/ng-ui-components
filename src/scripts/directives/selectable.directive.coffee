'use strict'

directive = ->
  link = ($scope, element, attrs) ->
    $element = $ element[0]
    $element.addClass 'selected-button'

    $scope.$watch $scope.vm.isSelected, ->
      $element.removeClass 'checked'
      $element.removeClass attrs.selectable if typeof(attrs.selectable) == 'string'

      if $scope.vm.isSelected()
        $element.addClass 'checked'
        $element.addClass attrs.selectable if typeof(attrs.selectable) == 'string'

    $element.bind 'click', ->
      $scope.vm.toggle()

      $scope.$apply()

  restrict    : 'A'
  templateUrl : 'views/selectable.directive.html'
  controller  : 'SelectedButtonController as vm'
  link        : link
  scope       :
    ngModel: '=ngModel'
    label  : '@label'
    value  : '=value'

angular.module('appirio-tech-ng-ui-components').directive 'selectable', directive
