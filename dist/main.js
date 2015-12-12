(function() {
  'use strict';
  var dependencies;

  dependencies = ['ui.router', 'duScroll'];

  angular.module('appirio-tech-ng-ui-components', dependencies);

}).call(this);

angular.module("appirio-tech-ng-ui-components").run(["$templateCache", function($templateCache) {$templateCache.put("views/avatar.directive.html","<img ng-src=\"{{ avatarUrl }}\" ng-show=\"avatarUrl\" class=\"avatar\"/><svg class=\"avatar\" ng-hide=\"vm.avatarUrl\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\"><path fill=\"#020201\" d=\"M454.426,392.582c-5.439-16.32-15.298-32.782-29.839-42.362c-27.979-18.572-60.578-28.479-92.099-39.085 c-7.604-2.664-15.33-5.568-22.279-9.7c-6.204-3.686-8.533-11.246-9.974-17.886c-0.636-3.512-1.026-7.116-1.228-10.661 c22.857-31.267,38.019-82.295,38.019-124.136c0-65.298-36.896-83.495-82.402-83.495c-45.515,0-82.403,18.17-82.403,83.468 c0,43.338,16.255,96.5,40.489,127.383c-0.221,2.438-0.511,4.876-0.95,7.303c-1.444,6.639-3.77,14.058-9.97,17.743 c-6.957,4.133-14.682,6.756-22.287,9.42c-31.521,10.605-64.119,19.957-92.091,38.529c-14.549,9.58-24.403,27.159-29.838,43.479 c-5.597,16.938-7.886,37.917-7.541,54.917h205.958h205.974C462.313,430.5,460.019,409.521,454.426,392.582z\"/></svg>");
$templateCache.put("views/checkbox.directive.html","<div class=\"flex middle\"><button ng-class=\"{\'checked\': ngModel}\" ng-click=\"vm.toggle()\" type=\"button\" class=\"clean\"><div ng-hide=\"ngModel\" class=\"icon plus hollow\"></div><div ng-show=\"ngModel\" class=\"icon checkmark active\"></div></button><label ng-if=\"label\" ng-click=\"vm.toggle()\">{{ label }}</label></div>");
$templateCache.put("views/countdown.directive.html","<ul class=\"countdown\"><li ng-if=\"vm.days &gt; 0\"><span class=\"value\">{{ vm.days }}</span><span class=\"unit\">day<span ng-if=\"vm.days &gt; 1\">s</span></span></li><li ng-if=\"vm.hours &gt; 0 || vm.days &gt; 0\"><span class=\"value\">{{ vm.hours }}</span><span class=\"unit\">hr<span ng-if=\"vm.hours &gt; 1\">s</span></span></li><li ng-if=\"vm.minutes &gt; 0 || vm.hours &gt; 0 || vm.days &gt; 0\"><span class=\"value\">{{ vm.minutes }}</span><span class=\"unit\">min<span ng-if=\"vm.minutes &gt; 1\">s</span></span></li><li><span class=\"value\">{{ vm.seconds }}</span><span class=\"unit\">sec<span ng-if=\"vm.seconds &gt; 1\">s</span></span></li></ul>");
$templateCache.put("views/date-input.directive.html","<div class=\"flex middle\"><input type=\"text\" ng-model=\"date\" placeholder=\"{{ placeHolder }}\"/><button class=\"clean\"><div class=\"icon warning\"></div></button></div>");
$templateCache.put("views/loader.directive.html","<div class=\"container\"><div class=\"loader\"></div></div>");
$templateCache.put("views/modal.directive.html","");
$templateCache.put("views/selectable.directive.html","<div ng-show=\"!label &amp;&amp; !vm.isSelected()\">Select</div><div ng-show=\"!label &amp;&amp; vm.isSelected()\">Selected</div><div ng-show=\"label\">{{ label }}</div><div class=\"icon-container\"><div class=\"icon checkmark-white smallest\"></div></div>");
$templateCache.put("views/selected-button.directive.html","<button ng-class=\"{\'checked\': vm.isSelected(), \'action\': vm.isSelected()}\" ng-click=\"vm.toggle()\" type=\"button\"><p ng-show=\"!label &amp;&amp; !vm.isSelected()\">Select</p><p ng-show=\"!label &amp;&amp; vm.isSelected()\">Selected</p><p ng-show=\"label\">{{ label }}</p><div class=\"icon-container\"><div class=\"icon checkmark-white smallest\"></div></div></button>");
$templateCache.put("views/simple-countdown.directive.html","<p>{{vm.timeRemaining}} left</p>");}]);
(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/avatar.directive.html',
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
      templateUrl: 'views/simple-countdown.directive.html',
      controller: 'SimpleCountdownController',
      controllerAs: 'vm',
      scope: {
        end: '@end'
      }
    };
  };

  angular.module('appirio-tech-ng-ui-components').directive('simpleCountdown', directive);

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
      if (!attrs['backgroundClickClose']) {
        $element.bind('click', function(e) {
          if (e.target === $element[0]) {
            return close();
          }
        });
      }
      scope.$watch('show', toggleShow);
      return scope.$watch('destroy', function() {
        return overlay.remove();
      });
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
      var $element;
      $element = $(element[0]);
      return $element.bind('click', function() {
        return $element.focus();
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
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/checkbox.directive.html',
      controller: 'CheckboxController as vm',
      scope: {
        ngModel: '=ngModel',
        label: '@label'
      }
    };
  };

  angular.module('appirio-tech-ng-ui-components').directive('checkbox', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/selected-button.directive.html',
      controller: 'SelectedButtonController as vm',
      scope: {
        ngModel: '=ngModel',
        label: '@label',
        value: '=value'
      }
    };
  };

  angular.module('appirio-tech-ng-ui-components').directive('selectedButton', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    var link;
    link = function($scope, element, attrs) {
      var $element;
      $element = $(element[0]);
      $element.addClass('selected-button');
      $scope.$watch($scope.vm.isSelected, function() {
        $element.removeClass('checked');
        if (typeof attrs.selectable === 'string') {
          $element.removeClass(attrs.selectable);
        }
        if ($scope.vm.isSelected()) {
          $element.addClass('checked');
          if (typeof attrs.selectable === 'string') {
            return $element.addClass(attrs.selectable);
          }
        }
      });
      return $element.bind('click', function() {
        $scope.vm.toggle();
        return $scope.$apply();
      });
    };
    return {
      restrict: 'A',
      templateUrl: 'views/selectable.directive.html',
      controller: 'SelectedButtonController as vm',
      link: link,
      scope: {
        ngModel: '=ngModel',
        label: '@label',
        value: '=value'
      }
    };
  };

  angular.module('appirio-tech-ng-ui-components').directive('selectable', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function($document) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var elementId, scrollElement;
        elementId = attrs.scrollElement;
        scrollElement = angular.element(document.getElementById(elementId));
        return element.on('click', function() {
          return $document.scrollToElementAnimated(scrollElement);
        });
      }
    };
  };

  directive.$inject = ['$document'];

  angular.module('appirio-tech-ng-ui-components').directive('scrollElement', directive);

}).call(this);

(function() {
  'use strict';
  var dir, getOffsetTop;

  getOffsetTop = function(elem) {
    var offsetTop;
    offsetTop = elem.offsetTop;
    while (elem = elem.offsetParent) {
      if (!isNaN(elem.offsetTop)) {
        offsetTop += elem.offsetTop;
      }
    }
    return offsetTop;
  };

  dir = function($window) {
    var elements, flushHeight, link, setViewPortHeight, viewPortHeight;
    viewPortHeight = 0;
    elements = [];
    setViewPortHeight = function() {
      viewPortHeight = $($window).height();
      return viewPortHeight;
    };
    setViewPortHeight();
    flushHeight = function($element) {
      var currentHeight, heightDiff, top;
      top = getOffsetTop($element[0]);
      heightDiff = viewPortHeight - top;
      currentHeight = $element.height();
      $element.css('min-height', heightDiff + 'px');
      if ($element.attr('flush-height') === 'lock') {
        return $element.css('height', heightDiff + 'px');
      }
    };
    $($window).bind('resize', function() {
      var element, i, len, results;
      setViewPortHeight();
      results = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        results.push(flushHeight(element));
      }
      return results;
    });
    link = function(scope, element, attrs) {
      elements.push($(element[0]));
      return element.ready(function() {
        return flushHeight($(element[0]));
      });
    };
    return {
      restrict: 'A',
      link: link
    };
  };

  dir.$inject = ['$window'];

  angular.module('appirio-tech-ng-ui-components').directive('flushHeight', dir);

}).call(this);

(function() {
  'use strict';
  var dir;

  dir = function($window) {
    var elements, fullHeight, link, setViewPortHeight, viewPortHeight;
    viewPortHeight = 0;
    elements = [];
    setViewPortHeight = function() {
      viewPortHeight = $($window).height();
      return viewPortHeight;
    };
    setViewPortHeight();
    fullHeight = function($element) {
      $element.css('min-height', viewPortHeight + 'px');
      return $element.css('height', viewPortHeight + 'px');
    };
    $($window).bind('resize', function() {
      var element, i, len, results;
      setViewPortHeight();
      results = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        results.push(fullHeight(element));
      }
      return results;
    });
    link = function(scope, element, attrs) {
      elements.push($(element[0]));
      return element.ready(function() {
        return fullHeight($(element[0]));
      });
    };
    return {
      restrict: 'A',
      link: link
    };
  };

  dir.$inject = ['$window'];

  angular.module('appirio-tech-ng-ui-components').directive('fullHeight', dir);

}).call(this);

(function() {
  'use strict';
  var dir, getBiggestLeft;

  getBiggestLeft = function(elements) {
    var biggestLeft, element, i, len;
    biggestLeft = null;
    for (i = 0, len = elements.length; i < len; i++) {
      element = elements[i];
      if (!biggestLeft) {
        biggestLeft = $(element);
      } else if ($(element).position().left > biggestLeft.position().left) {
        biggestLeft = $(element);
      }
    }
    return biggestLeft;
  };

  dir = function($window) {
    var fittedWidth, link, watchElements;
    watchElements = [];
    fittedWidth = function($element) {
      var biggestLeft, newWidth;
      $element.css('width', '100%');
      biggestLeft = getBiggestLeft($element.children());
      if (biggestLeft) {
        newWidth = biggestLeft.position().left;
        newWidth -= $element.position().left;
        newWidth += parseInt(biggestLeft.css('margin-left'));
        newWidth += biggestLeft.width();
        newWidth += parseInt(biggestLeft.css('margin-right'));
        newWidth += parseInt($element.css('padding-right'));
        return $element.css('width', newWidth + 'px');
      }
    };
    $($window).bind('resize', function() {
      var element, i, len, results;
      results = [];
      for (i = 0, len = watchElements.length; i < len; i++) {
        element = watchElements[i];
        results.push(fittedWidth(element));
      }
      return results;
    });
    link = function(scope, element, attrs) {
      return element.ready(function() {
        var parent;
        if (scope.$last === void 0) {
          watchElements.push($(element[0]));
          return fittedWidth($(element[0]));
        } else if (scope.$last) {
          parent = $(element[0]).parent();
          watchElements.push(parent);
          return fittedWidth(parent);
        }
      });
    };
    return {
      restrict: 'A',
      link: link
    };
  };

  dir.$inject = ['$window'];

  angular.module('appirio-tech-ng-ui-components').directive('fittedWidth', dir);

}).call(this);

(function() {
  'use strict';
  var dir;

  dir = function($window, $timeout) {
    var elements, link, lockHeight;
    elements = [];
    lockHeight = function($element) {
      var attr, childrenWithClass, classToToggle, ignoreContent, ref;
      attr = $element.attr('lock-height');
      if (attr !== 'lock-height') {
        classToToggle = attr;
      }
      ignoreContent = (ref = $element.attr('ignore-content')) != null ? ref.length : void 0;
      $element.css('height', 'auto');
      $element.css('max-height', 'none');
      $element.addClass('lock-height');
      if (ignoreContent) {
        $element.addClass('ignore-content');
      }
      if (classToToggle) {
        childrenWithClass = $element.find('.' + classToToggle);
        childrenWithClass.removeClass(classToToggle);
      }
      if (classToToggle) {
        $element.removeClass(classToToggle);
      }
      $element.css('max-height', $element.height() + 'px');
      if ($element.attr('retain-class') === 'true') {
        if (classToToggle) {
          $element.addClass(classToToggle);
        }
        if (childrenWithClass) {
          childrenWithClass.addClass(classToToggle);
        }
      }
      if (ignoreContent) {
        return $element.removeClass('ignore-content');
      }
    };
    $($window).bind('resize', function() {
      var element, i, len, results;
      results = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        results.push(lockHeight(element));
      }
      return results;
    });
    link = function(scope, element, attrs) {
      elements.push($(element[0]));
      return element.ready(function() {
        var timeoutSet;
        lockHeight($(element[0]));
        timeoutSet = false;
        return scope.$watch(function() {
          var callback;
          if (!timeoutSet) {
            callback = function() {
              timeoutSet = false;
              return lockHeight($(element[0]));
            };
            $timeout(callback, 0, false);
            return timeoutSet = true;
          }
        });
      });
    };
    return {
      restrict: 'A',
      link: link,
      priority: -1,
      scope: {
        retainClass: '@',
        ignoreContent: '@'
      }
    };
  };

  dir.$inject = ['$window', '$timeout'];

  angular.module('appirio-tech-ng-ui-components').directive('lockHeight', dir);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/date-input.directive.html',
      controller: 'DateInputController as vm',
      scope: {
        date: '=',
        isValid: '=',
        placeHolder: '@'
      }
    };
  };

  angular.module('appirio-tech-ng-ui-components').directive('dateInput', directive);

}).call(this);

(function() {
  'use strict';
  var directive;

  directive = function(reactDirective) {
    return reactDirective(Select);
  };

  directive.$inject = ['reactDirective'];

  angular.module('appirio-tech-ng-ui-components').directive('dropdown', directive);

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
  var SimpleCountdownController;

  SimpleCountdownController = function($scope) {
    var activate, timeRemaining, vm;
    vm = this;
    timeRemaining = 0;
    activate = function() {
      $scope.$watch('end', function(newValue) {
        return vm.timeRemaining = moment(newValue).fromNow(true);
      });
      return vm;
    };
    return activate();
  };

  SimpleCountdownController.$inject = ['$scope'];

  angular.module('appirio-tech-ng-ui-components').controller('SimpleCountdownController', SimpleCountdownController);

}).call(this);

(function() {
  'use strict';
  var CheckboxController;

  CheckboxController = function($scope) {
    var activate, vm;
    vm = this;
    vm.avatarUrl = null;
    vm.toggle = function() {
      return $scope.ngModel = !$scope.ngModel;
    };
    activate = function() {
      return vm;
    };
    return activate();
  };

  CheckboxController.$inject = ['$scope'];

  angular.module('appirio-tech-ng-ui-components').controller('CheckboxController', CheckboxController);

}).call(this);

(function() {
  'use strict';
  var SelectedButtonController, removeFromArray;

  removeFromArray = function(items, lookFor) {
    var i, item, len, newItems;
    newItems = [];
    for (i = 0, len = items.length; i < len; i++) {
      item = items[i];
      if (item !== lookFor) {
        newItems.push(item);
      }
    }
    return newItems;
  };

  SelectedButtonController = function($scope) {
    var activate, isArrayModel, toggleArray, vm;
    vm = this;
    vm.avatarUrl = null;
    toggleArray = function() {
      if (vm.isSelected()) {
        return $scope.ngModel = removeFromArray($scope.ngModel, $scope.value);
      } else {
        return $scope.ngModel.push($scope.value);
      }
    };
    isArrayModel = function() {
      var ref;
      return ((ref = $scope.ngModel) != null ? ref.push : void 0) && $scope.value;
    };
    vm.toggle = function() {
      if (isArrayModel()) {
        return toggleArray();
      } else {
        if (vm.isSelected()) {
          return $scope.ngModel = void 0;
        } else if ($scope.value !== void 0) {
          return $scope.ngModel = $scope.value;
        } else {
          return $scope.ngModel = true;
        }
      }
    };
    vm.isSelected = function() {
      if (isArrayModel()) {
        return $scope.ngModel.indexOf($scope.value) !== -1;
      } else {
        if ($scope.value !== void 0) {
          return $scope.ngModel === $scope.value;
        } else {
          return $scope.ngModel;
        }
      }
    };
    activate = function() {
      return vm;
    };
    return activate();
  };

  SelectedButtonController.$inject = ['$scope'];

  angular.module('appirio-tech-ng-ui-components').controller('SelectedButtonController', SelectedButtonController);

}).call(this);

(function() {
  'use strict';
  var DateInputController;

  DateInputController = function($scope) {
    var activate, vm;
    vm = this;
    activate = function() {
      $scope.$watch('date', function(newValue, oldValue) {
        $scope.isValid = false;
        if (newValue != null ? newValue.length : void 0) {
          return $scope.isValid = true;
        }
      });
      return vm;
    };
    return activate();
  };

  DateInputController.$inject = ['$scope'];

  angular.module('appirio-tech-ng-ui-components').controller('DateInputController', DateInputController);

}).call(this);

(function() {
  'use strict';
  var filter;

  filter = function() {
    return function(createdAt, hideSuffix) {
      if (hideSuffix == null) {
        hideSuffix = false;
      }
      return moment(createdAt).fromNow(hideSuffix);
    };
  };

  angular.module('appirio-tech-ng-ui-components').filter('timeLapse', filter);

}).call(this);

(function() {
  'use strict';
  var filter;

  filter = function() {
    return function(number) {
      var ordinalMap;
      ordinalMap = {
        1: '1st',
        2: '2nd',
        3: '3rd'
      };
      return ordinalMap[number];
    };
  };

  angular.module('appirio-tech-ng-ui-components').filter('ordinalNumber', filter);

}).call(this);
