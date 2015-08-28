'use strict'

directive = ->
  restrict    : 'E'
  templateUrl : 'views/selected-button.directive.html'
  controller  : 'SelectedButtonController as vm'
  scope       :
    ngModel: '=ngModel'

angular.module('appirio-tech-ng-ui-components').directive 'selectedButton', directive
