(function() {
  'use strict';
  var dependencies;

  dependencies = ['ui.router'];

  angular.module('appirio-tech-ng-ui-components', dependencies);

}).call(this);

(function() {
  'use strict';
  var AvatarController;

  AvatarController = function($scope) {
    var activate, vm;
    vm = this;
    vm.avatarUrl = null;
    activate = function() {
      $scope.$watch('avatarUrl', function() {
        if ($scope.avatarUrl) {
          return vm.avatarUrl = $scope.avatarUrl;
        }
      });
      return vm;
    };
    return activate();
  };

  AvatarController.$inject = ['$scope'];

  angular.module('appirio-tech-ng-ui-components').controller('AvatarController', AvatarController);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/avatar.directive.html',
      controller: 'AvatarController',
      controllerAs: 'vm',
      scope: {
        avatarUrl: '@avatarUrl'
      }
    };
  };

  angular.module('appirio-tech-ng-ui-components').directive('avatar', directive);

}).call(this);
