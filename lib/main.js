/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var controllers, directives, filters, requireContextFiles, templateCache, viewPaths, views;

	__webpack_require__(368);

	__webpack_require__(393);

	requireContextFiles = function(files) {
	  var i, len, path, paths, results;
	  paths = files.keys();
	  results = [];
	  for (i = 0, len = paths.length; i < len; i++) {
	    path = paths[i];
	    results.push(files(path));
	  }
	  return results;
	};

	directives = __webpack_require__(394);

	controllers = __webpack_require__(411);

	filters = __webpack_require__(417);

	requireContextFiles(directives);

	requireContextFiles(controllers);

	requireContextFiles(filters);

	views = __webpack_require__(420);

	viewPaths = views.keys();

	templateCache = function($templateCache) {
	  var i, len, results, viewPath, viewPathClean, viewPathCleanHtml;
	  results = [];
	  for (i = 0, len = viewPaths.length; i < len; i++) {
	    viewPath = viewPaths[i];
	    viewPathClean = viewPath.split('./').pop();
	    viewPathCleanHtml = viewPathClean.replace('.jade', '.html');
	    results.push($templateCache.put("views/" + viewPathCleanHtml, views(viewPath)()));
	  }
	  return results;
	};

	templateCache.$nject = ['$templateCache'];

	angular.module('appirio-tech-ng-ui-components').run(templateCache);


/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(89).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },

/***/ 89:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./avatar.scss": 369,
		"./checkbox.scss": 371,
		"./countdown.scss": 373,
		"./date-input.scss": 375,
		"./dropdown.scss": 377,
		"./loader.scss": 379,
		"./lock-height.scss": 381,
		"./modal.scss": 383,
		"./selectable.scss": 385,
		"./selected-button.scss": 387,
		"./simple-countdown.scss": 389,
		"./tooltip.scss": 391
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 368;


/***/ },

/***/ 369:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 371:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 373:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 375:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 377:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 379:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 381:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 383:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 385:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 387:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 389:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 391:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 393:
/***/ function(module, exports) {

	'use strict';
	var dependencies;

	dependencies = ['ui.router', 'duScroll', 'react'];

	angular.module('appirio-tech-ng-ui-components', dependencies);


/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./avatar.directive.coffee": 395,
		"./checkbox.directive.coffee": 396,
		"./countdown.directive.coffee": 397,
		"./date-input.directive.coffee": 398,
		"./dropdown.directive.coffee": 399,
		"./fitted-width.directive.coffee": 400,
		"./flush-height.directive.coffee": 401,
		"./focus-on-click.directive.coffee": 402,
		"./full-height.directive.coffee": 403,
		"./loader.directive.coffee": 404,
		"./lock-height.directive.coffee": 405,
		"./modal.directive.coffee": 406,
		"./scroll.directive.coffee": 407,
		"./selectable.directive.coffee": 408,
		"./selected-button.directive.coffee": 409,
		"./simple-countdown.directive.coffee": 410
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 394;


/***/ },

/***/ 395:
/***/ function(module, exports) {

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


/***/ },

/***/ 396:
/***/ function(module, exports) {

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


/***/ },

/***/ 397:
/***/ function(module, exports) {

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


/***/ },

/***/ 398:
/***/ function(module, exports) {

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


/***/ },

/***/ 399:
/***/ function(module, exports) {

	'use strict';
	var directive;

	directive = function(reactDirective) {
	  return reactDirective(Select);
	};

	directive.$inject = ['reactDirective'];

	angular.module('appirio-tech-ng-ui-components').directive('dropdown', directive);


/***/ },

/***/ 400:
/***/ function(module, exports) {

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


/***/ },

/***/ 401:
/***/ function(module, exports) {

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


/***/ },

/***/ 402:
/***/ function(module, exports) {

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


/***/ },

/***/ 403:
/***/ function(module, exports) {

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


/***/ },

/***/ 404:
/***/ function(module, exports) {

	'use strict';
	var directive;

	directive = function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'views/loader.directive.html'
	  };
	};

	angular.module('appirio-tech-ng-ui-components').directive('loader', directive);


/***/ },

/***/ 405:
/***/ function(module, exports) {

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


/***/ },

/***/ 406:
/***/ function(module, exports) {

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


/***/ },

/***/ 407:
/***/ function(module, exports) {

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


/***/ },

/***/ 408:
/***/ function(module, exports) {

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


/***/ },

/***/ 409:
/***/ function(module, exports) {

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


/***/ },

/***/ 410:
/***/ function(module, exports) {

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


/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./checkbox.controller.coffee": 412,
		"./countdown.controller.coffee": 413,
		"./date-input.controller.coffee": 414,
		"./selected-button.controller.coffee": 415,
		"./simple-countdown.controller.coffee": 416
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 411;


/***/ },

/***/ 412:
/***/ function(module, exports) {

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


/***/ },

/***/ 413:
/***/ function(module, exports) {

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


/***/ },

/***/ 414:
/***/ function(module, exports) {

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


/***/ },

/***/ 415:
/***/ function(module, exports) {

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


/***/ },

/***/ 416:
/***/ function(module, exports) {

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


/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./ordinal-number.filter.coffee": 418,
		"./time-lapse.filter.coffee": 419
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 417;


/***/ },

/***/ 418:
/***/ function(module, exports) {

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


/***/ },

/***/ 419:
/***/ function(module, exports) {

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


/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./avatar.directive.jade": 421,
		"./checkbox.directive.jade": 422,
		"./countdown.directive.jade": 423,
		"./date-input.directive.jade": 424,
		"./loader.directive.jade": 425,
		"./modal.directive.jade": 426,
		"./selectable.directive.jade": 427,
		"./selected-button.directive.jade": 428,
		"./simple-countdown.directive.jade": 429
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 420;


/***/ },

/***/ 421:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(88);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var self = locals || {};
	buf.push("<img ng-src=\"{{ avatarUrl }}\" ng-show=\"avatarUrl\" class=\"avatar\"><svg class=\"avatar\" ng-hide=\"vm.avatarUrl\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\"><path fill=\"#020201\" d=\"M454.426,392.582c-5.439-16.32-15.298-32.782-29.839-42.362c-27.979-18.572-60.578-28.479-92.099-39.085 c-7.604-2.664-15.33-5.568-22.279-9.7c-6.204-3.686-8.533-11.246-9.974-17.886c-0.636-3.512-1.026-7.116-1.228-10.661 c22.857-31.267,38.019-82.295,38.019-124.136c0-65.298-36.896-83.495-82.402-83.495c-45.515,0-82.403,18.17-82.403,83.468 c0,43.338,16.255,96.5,40.489,127.383c-0.221,2.438-0.511,4.876-0.95,7.303c-1.444,6.639-3.77,14.058-9.97,17.743 c-6.957,4.133-14.682,6.756-22.287,9.42c-31.521,10.605-64.119,19.957-92.091,38.529c-14.549,9.58-24.403,27.159-29.838,43.479 c-5.597,16.938-7.886,37.917-7.541,54.917h205.958h205.974C462.313,430.5,460.019,409.521,454.426,392.582z\"/></svg>");;return buf.join("");
	}

/***/ },

/***/ 422:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(88);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var self = locals || {};
	buf.push("<div class=\"flex middle\"><button ng-class=\"{'checked': ngModel}\" ng-click=\"vm.toggle()\" type=\"button\" class=\"clean\"><div ng-hide=\"ngModel\" class=\"icon plus hollow\"></div><div ng-show=\"ngModel\" class=\"icon checkmark active\"></div></button><label ng-if=\"label\" ng-click=\"vm.toggle()\">{{ label }}</label></div>");;return buf.join("");
	}

/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(88);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var self = locals || {};
	buf.push("<ul class=\"countdown\"><li ng-if=\"vm.days &gt; 0\"><span class=\"value\">{{ vm.days }}</span><span class=\"unit\">day<span ng-if=\"vm.days &gt; 1\">s</span></span></li><li ng-if=\"vm.hours &gt; 0 || vm.days &gt; 0\"><span class=\"value\">{{ vm.hours }}</span><span class=\"unit\">hr<span ng-if=\"vm.hours &gt; 1\">s</span></span></li><li ng-if=\"vm.minutes &gt; 0 || vm.hours &gt; 0 || vm.days &gt; 0\"><span class=\"value\">{{ vm.minutes }}</span><span class=\"unit\">min<span ng-if=\"vm.minutes &gt; 1\">s</span></span></li><li><span class=\"value\">{{ vm.seconds }}</span><span class=\"unit\">sec<span ng-if=\"vm.seconds &gt; 1\">s</span></span></li></ul>");;return buf.join("");
	}

/***/ },

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(88);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var self = locals || {};
	buf.push("<div class=\"flex middle\"><input type=\"text\" ng-model=\"date\" placeholder=\"{{ placeHolder }}\"><button class=\"clean\"><div class=\"icon warning\"></div></button></div>");;return buf.join("");
	}

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(88);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var self = locals || {};
	buf.push("<div class=\"container\"><div class=\"loader\"></div></div>");;return buf.join("");
	}

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(88);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var self = locals || {};
	;return buf.join("");
	}

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(88);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var self = locals || {};
	buf.push("<div ng-show=\"!label &amp;&amp; !vm.isSelected()\">Select</div><div ng-show=\"!label &amp;&amp; vm.isSelected()\">Selected</div><div ng-show=\"label\">{{ label }}</div><div class=\"icon-container\"><div class=\"icon checkmark-white smallest\"></div></div>");;return buf.join("");
	}

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(88);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var self = locals || {};
	buf.push("<button ng-class=\"{'checked': vm.isSelected(), 'action': vm.isSelected()}\" ng-click=\"vm.toggle()\" type=\"button\"><p ng-show=\"!label &amp;&amp; !vm.isSelected()\">Select</p><p ng-show=\"!label &amp;&amp; vm.isSelected()\">Selected</p><p ng-show=\"label\">{{ label }}</p><div class=\"icon-container flex center space-around\"><div class=\"icon checkmark-white smallest\"></div></div></button>");;return buf.join("");
	}

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(88);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	var self = locals || {};
	buf.push("<p>{{vm.timeRemaining}} left</p>");;return buf.join("");
	}

/***/ }

/******/ });