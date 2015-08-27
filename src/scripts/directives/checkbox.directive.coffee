'use strict'

directive = ->
  restrict    : 'E'
  templateUrl : 'views/checkbox.directive.html'
  controller  : 'CheckboxController as vm'
  scope       :
    ngModel: '=ngModel'
    label  : '@label'

angular.module('appirio-tech-ng-ui-components').directive 'checkbox', directive
