(function() {
  'use strict';
  var dependencies;

  dependencies = ['ui.router', 'ngResource', 'appirio-tech-ng-ui-components'];

  angular.module('example', dependencies);

}).call(this);

(function() {
  'use strict';
  var config;

  config = function($stateProvider) {
    var key, results, state, states;
    states = {};
    states['avatar'] = {
      url: '/',
      title: 'Avatar',
      templateUrl: 'views/avatar.example.html'
    };
    states['countdown'] = {
      url: '/countdown',
      templateUrl: 'views/countdown.example.html'
    };
    states['simple-countdown'] = {
      url: '/simple-countdown',
      templateUrl: 'views/simple-countdown.example.html'
    };
    states['loader'] = {
      url: '/loader',
      templateUrl: 'views/loader.example.html'
    };
    states['filters'] = {
      url: '/filters',
      templateUrl: 'views/filters.example.html'
    };
    states['modal'] = {
      url: '/modal',
      templateUrl: 'views/modal.example.html',
      controller: 'ModalExampleController as vm'
    };
    states['focus-on-click'] = {
      url: '/focus-on-click',
      templateUrl: 'views/focus-on-click.example.html'
    };
    states['checkbox'] = {
      url: '/checkbox',
      templateUrl: 'views/checkbox.example.html',
      controller: 'CheckboxExampleController as vm'
    };
    states['selected-button'] = {
      url: '/selected-button',
      templateUrl: 'views/selected-button.example.html',
      controller: 'SelectedButtonExampleController as vm'
    };
    states['selectable'] = {
      url: '/selectable',
      templateUrl: 'views/selectable.example.html',
      controller: 'SelectedButtonExampleController as vm'
    };
    states['scroll'] = {
      url: '/scroll',
      templateUrl: 'views/scroll.example.html'
    };
    states['flush-height'] = {
      url: '/flush-height',
      templateUrl: 'views/flush-height.example.html'
    };
    states['full-height'] = {
      url: '/full-height',
      templateUrl: 'views/full-height.example.html'
    };
    states['fitted-width'] = {
      url: '/fitted-width',
      templateUrl: 'views/fitted-width.example.html'
    };
    states['lock-height'] = {
      url: '/lock-height',
      templateUrl: 'views/lock-height.example.html',
      controller: 'LockHeightExampleController as vm'
    };
    states['tooltip'] = {
      url: '/tooltip',
      templateUrl: 'views/tooltip.example.html'
    };
    results = [];
    for (key in states) {
      state = states[key];
      results.push($stateProvider.state(key, state));
    }
    return results;
  };

  config.$inject = ['$stateProvider'];

  angular.module('appirio-tech-ng-ui-components').config(config).run();

}).call(this);

(function() {
  'use strict';
  var ModalExampleController;

  ModalExampleController = function($scope) {
    var activate, vm;
    vm = this;
    vm.show = false;
    activate = function() {
      return vm;
    };
    return activate();
  };

  ModalExampleController.$inject = ['$scope'];

  angular.module('example').controller('ModalExampleController', ModalExampleController);

}).call(this);

(function() {
  'use strict';
  var CheckboxExampleController;

  CheckboxExampleController = function($scope) {
    var activate, vm;
    vm = this;
    vm.value = false;
    activate = function() {
      return vm;
    };
    return activate();
  };

  CheckboxExampleController.$inject = ['$scope'];

  angular.module('example').controller('CheckboxExampleController', CheckboxExampleController);

}).call(this);

(function() {
  'use strict';
  var SelectedButtonExampleController;

  SelectedButtonExampleController = function($scope) {
    var activate, vm;
    vm = this;
    vm.value = void 0;
    vm.fruits = [];
    vm.apples = 'apples';
    vm.oranges = 'oranges';
    vm.mangos = 'mangos';
    activate = function() {
      return vm;
    };
    return activate();
  };

  SelectedButtonExampleController.$inject = ['$scope'];

  angular.module('example').controller('SelectedButtonExampleController', SelectedButtonExampleController);

}).call(this);

(function() {
  'use strict';
  var LockHeightExampleController;

  LockHeightExampleController = function($scope) {
    var activate, vm;
    vm = this;
    vm.show = false;
    activate = function() {
      return vm;
    };
    return activate();
  };

  LockHeightExampleController.$inject = ['$scope'];

  angular.module('example').controller('LockHeightExampleController', LockHeightExampleController);

}).call(this);

angular.module("example").run(["$templateCache", function($templateCache) {$templateCache.put("views/avatar.example.html","<avatar avatar-url=\"http://www.topcoder.com/i/m/cardiboy_big.jpg\"></avatar>");
$templateCache.put("views/checkbox.example.html","<checkbox ng-model=\"vm.value\" label=\"Show me the money\"></checkbox><hr/><img src=\"http://i.perezhilton.com/wp-content/uploads/2013/07/tumblr_m3bwbqnjig1rrgbmqo1_500.gif\" ng-show=\"vm.value\"/>");
$templateCache.put("views/countdown.example.html","<countdown end=\"2015-08-013 09:30:26.123+07:00\"></countdown>");
$templateCache.put("views/filters.example.html","<time>{{ \"1995-12-25T08:00:00.000Z\" | timeLapse }}</time><div><p>{{1 | ordinalNumber}}</p></div>");
$templateCache.put("views/fitted-width.example.html","<h1>Fitted Width</h1><ul class=\"flex wrap fitted-width\"><li ng-repeat=\"n in [42, 42, 43, 43] track by $index\" fitted-width=\"fitted-width\">{{ $index }}</li></ul><ul fitted-width=\"fitted-width\" class=\"flex wrap fitted-width\"><li>1</li><li>2</li><li>3</li><li>4</li></ul>");
$templateCache.put("views/flush-height.example.html","<div flush-height=\"flush-height\" style=\"background-color:grey\">Flush Height</div>");
$templateCache.put("views/focus-on-click.example.html","<button type=\"button\" focus-on-click=\"focus-on-click\" class=\"focus-on-click\">should have red border when focused</button>");
$templateCache.put("views/full-height.example.html","<div full-height=\"full-height\" style=\"background-color:grey\">Full Height</div>");
$templateCache.put("views/loader.example.html","<loader></loader>");
$templateCache.put("views/lock-height.example.html","<button ng-click=\"vm.show = !vm.show\" class=\"action\">show? {{ vm.show }}</button><div flush-height=\"lock\" style=\"background-color:black; padding: 50px;\" class=\"flex column\"><div ng-class=\"{ \'no-height\': !vm.show }\" lock-height=\"no-height\" style=\"background-color:grey; overflow:auto; font-size:36px;\" class=\"lock-height flex-grow\"><ul><li ng-repeat=\"n in [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] track by $index\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li></ul></div></div>");
$templateCache.put("views/modal.example.html","<button ng-click=\"vm.show = true\">Show</button><modal show=\"vm.show\" background-click-close=\"background-click-close\"><img src=\"http://petdogss.com/wp-content/uploads/2015/01/attention-seeking-puppy.jpg\"/></modal>");
$templateCache.put("views/scroll.example.html","<button type=\"button\" scroll-element=\"section2\">Scroll to Section 2</button><div id=\"section1\" class=\"scrollSection\"><h2>Section 1</h2></div><div id=\"section2\" class=\"scrollSection\"><h2>Section 2</h2></div>");
$templateCache.put("views/selectable.example.html","<p>button.widest.biggest(ng-model=\"vm.value\" selectable=true)</p><br/><button ng-model=\"vm.value\" selectable=\"selectable\" class=\"action widest biggest\"></button><hr/><p>button.wider.big(ng-model=\"vm.value\" label=\"show me the money\" selectable=\"action\")</p><br/><button ng-model=\"vm.value\" label=\"show me the money\" selectable=\"action\" class=\"wider big\"></button><hr/><label>Show me the money?</label><p>button(ng-model=\"vm.value\" label=\"yes\" value=\"true\" selectable=\"action\")</p><br/><button ng-model=\"vm.value\" label=\"yes\" value=\"true\" selectable=\"action\"></button><br/><p>button(ng-model=\"vm.value\" label=\"no\" value=\"false\" selectable=\"action\")</p><br/><button ng-model=\"vm.value\" label=\"no\" value=\"false\" selectable=\"action\"></button><hr/><img src=\"http://i.perezhilton.com/wp-content/uploads/2013/07/tumblr_m3bwbqnjig1rrgbmqo1_500.gif\" ng-show=\"vm.value\"/><label>Tracking a list</label><p>button(ng-model=\"vm.fruits\" label=\"apples\" value=\"vm.apples\" selectable=\"action\")</p><br/><button ng-model=\"vm.fruits\" label=\"apples\" value=\"vm.apples\" selectable=\"action\"></button><br/><p>button(ng-model=\"vm.fruits\" label=\"oranges\" value=\"vm.oranges\" selectable=\"action\")</p><br/><button ng-model=\"vm.fruits\" label=\"oranges\" value=\"vm.oranges\" selectable=\"action\"></button><br/><p>button(ng-model=\"vm.fruits\" label=\"mangos\" value=\"vm.mangos\" selectable=\"action\")</p><br/><button ng-model=\"vm.fruits\" label=\"mangos\" value=\"vm.mangos\" selectable=\"action\"></button><br/><div class=\"fruits\">{{ vm.fruits }}</div>");
$templateCache.put("views/selected-button.example.html","<selected-button ng-model=\"vm.value\"></selected-button><hr/><selected-button ng-model=\"vm.value\" label=\"show me the money\"></selected-button><hr/><h2>Show me the money?</h2><selected-button ng-model=\"vm.value\" label=\"yes\" value=\"true\"></selected-button><br/><selected-button ng-model=\"vm.value\" label=\"no\" value=\"false\"></selected-button><hr/><img src=\"http://i.perezhilton.com/wp-content/uploads/2013/07/tumblr_m3bwbqnjig1rrgbmqo1_500.gif\" ng-show=\"vm.value\"/><h2>Tracking a list</h2><selected-button ng-model=\"vm.fruits\" label=\"apples\" value=\"vm.apples\"></selected-button><br/><selected-button ng-model=\"vm.fruits\" label=\"oranges\" value=\"vm.oranges\"></selected-button><br/><selected-button ng-model=\"vm.fruits\" label=\"mangos\" value=\"vm.mangos\"></selected-button><br/><div class=\"fruits\">{{ vm.fruits }}</div>");
$templateCache.put("views/simple-countdown.example.html","<simple-countdown end=\"2015-12-10T19:41:15.354Z\"></simple-countdown>");
$templateCache.put("views/tooltip.example.html","<div class=\"username\"><input type=\"text\" name=\"username\" ng-model=\"vm.username\" required=\"required\" placeholder=\"Username\" class=\"widest\"/><div class=\"tooltip elevated\"><div class=\"arrow\"></div><p>Your username is public, please pick one that is:</p><p>Use letters, numbers, and these special characters: (-_.{}[])</p></div></div>");}]);