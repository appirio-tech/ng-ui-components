(function() {
  'use strict';
  var dependencies;

  dependencies = ['ui.router'];

  angular.module('appirio-tech-ng-ui-components', dependencies);

}).call(this);

angular.module("appirio-tech-ng-ui-components").run(["$templateCache", function($templateCache) {$templateCache.put("views/avatar.directive.html","<img ng-src=\"{{ vm.avatarUrl }}\" ng-show=\"vm.avatarUrl\" class=\"avatar\"/><svg class=\"avatar\" ng-hide=\"vm.avatarUrl\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\"><path fill=\"#020201\" d=\"M454.426,392.582c-5.439-16.32-15.298-32.782-29.839-42.362c-27.979-18.572-60.578-28.479-92.099-39.085 c-7.604-2.664-15.33-5.568-22.279-9.7c-6.204-3.686-8.533-11.246-9.974-17.886c-0.636-3.512-1.026-7.116-1.228-10.661 c22.857-31.267,38.019-82.295,38.019-124.136c0-65.298-36.896-83.495-82.402-83.495c-45.515,0-82.403,18.17-82.403,83.468 c0,43.338,16.255,96.5,40.489,127.383c-0.221,2.438-0.511,4.876-0.95,7.303c-1.444,6.639-3.77,14.058-9.97,17.743 c-6.957,4.133-14.682,6.756-22.287,9.42c-31.521,10.605-64.119,19.957-92.091,38.529c-14.549,9.58-24.403,27.159-29.838,43.479 c-5.597,16.938-7.886,37.917-7.541,54.917h205.958h205.974C462.313,430.5,460.019,409.521,454.426,392.582z\"/></svg>");
$templateCache.put("views/avatar.html","<avatar avatar-url=\"http://www.topcoder.com/i/m/cardiboy_big.jpg\"></avatar>");
$templateCache.put("views/countdown.directive.html","<ul class=\"countdown\"><li ng-if=\"vm.days &gt; 0\"><span class=\"value\">{{ vm.days }}</span><span class=\"unit\">day<span ng-if=\"vm.days &gt; 1\">s</span></span></li><li ng-if=\"vm.hours &gt; 0 || vm.days &gt; 0\"><span class=\"value\">{{ vm.hours }}</span><span class=\"unit\">hr<span ng-if=\"vm.hours &gt; 1\">s</span></span></li><li ng-if=\"vm.minutes &gt; 0 || vm.hours &gt; 0 || vm.days &gt; 0\"><span class=\"value\">{{ vm.minutes }}</span><span class=\"unit\">min<span ng-if=\"vm.minutes &gt; 1\">s</span></span></li><li><span class=\"value\">{{ vm.seconds }}</span><span class=\"unit\">sec<span ng-if=\"vm.seconds &gt; 1\">s</span></span></li></ul>");
$templateCache.put("views/countdown.html","<countdown end=\"2015-08-013 09:30:26.123+07:00\"></countdown>");
$templateCache.put("views/filters.html","<time>{{ \"1995-12-25T08:00:00.000Z\" | timeLapse }}</time>");
$templateCache.put("views/focus-on-click.html","<button type=\"button\" focus-on-click=\"focus-on-click\" class=\"focus-on-click\">should have red border when focused</button>");
$templateCache.put("views/loader.directive.html","<div class=\"container\"><div class=\"loader\"></div></div>");
$templateCache.put("views/loader.html","<img src=\"images/turtles-breaking.jpg\" style=\"width:100%\"/><loader></loader>");
$templateCache.put("views/modal.directive.html","");
$templateCache.put("views/modal.html","<button ng-click=\"vm.show = true\">Show</button><modal show=\"vm.show\"><img src=\"http://petdogss.com/wp-content/uploads/2015/01/attention-seeking-puppy.jpg\"/></modal>");}]);
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

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/countdown.directive.html',
      controller: 'CountdownController',
      controllerAs: 'vm',
      scope: {
        end: '@end'
      }
    };
  };

  angular.module('appirio-tech-ng-ui-components').directive('countdown', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/loader.directive.html'
    };
  };

  angular.module('appirio-tech-ng-ui-components').directive('loader', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    var link;
    link = function(scope, element, attrs) {
      var $element, close, closeButton, overlay, toggleShow;
      overlay = $('#modal-overlay');
      closeButton = $('<button type="button" class="clean close"><div class="icon cross"></div></button>');
      $element = $(element[0]);
      toggleShow = function(show) {
        if (show && show !== 'false') {
          $element.addClass('show');
          return overlay.show();
        } else {
          $element.removeClass('show');
          return overlay.hide();
        }
      };
      close = function() {
        scope.show = false;
        return scope.$apply();
      };
      closeButton.prependTo($element).bind('click', close);
      if (!overlay.length) {
        overlay = $('<div id="modal-overlay"></div>');
        overlay.appendTo('body');
      }
      $element.bind('click', function(e) {
        if (e.target === $element[0]) {
          return close();
        }
      });
      return scope.$watch('show', toggleShow);
    };
    return {
      restrict: 'E',
      link: link,
      scope: {
        show: '='
      }
    };
  };

  directive.$inject = [];

  angular.module('appirio-tech-ng-ui-components').directive('modal', directive);

}).call(this);

(function() {
  'use strict';
  var dir;

  dir = function() {
    var link;
    link = function(scope, element, attrs) {
      return $(element).bind('click', function() {
        return $(element).focus();
      });
    };
    return {
      restrict: 'A',
      link: link
    };
  };

  dir.$inject = [];

  angular.module('appirio-tech-ng-ui-components').directive('focusOnClick', dir);

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
  var CountdownController;

  CountdownController = function($scope) {
    var activate, vm;
    vm = this;
    vm.days = 0;
    vm.hours = 0;
    vm.minutes = 0;
    vm.seconds = 0;
    activate = function() {
      $scope.$watch('end', function() {
        var diff, duration, end, now;
        now = moment();
        end = new Date($scope.end);
        diff = moment(end).diff(now);
        duration = moment.duration(diff);
        vm.days = duration.days();
        vm.hours = duration.hours();
        vm.minutes = duration.minutes();
        return vm.seconds = duration.seconds();
      });
      return vm;
    };
    return activate();
  };

  CountdownController.$inject = ['$scope'];

  angular.module('appirio-tech-ng-ui-components').controller('CountdownController', CountdownController);

}).call(this);

(function() {
  'use strict';
  var filter;

  filter = function() {
    return function(createdAt) {
      return moment(createdAt).fromNow();
    };
  };

  angular.module('appirio-tech-ng-ui-components').filter('timeLapse', filter);

}).call(this);
