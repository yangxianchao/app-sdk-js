(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("HuobanAppSDK_QR", [], factory);
	else if(typeof exports === 'object')
		exports["HuobanAppSDK_QR"] = factory();
	else
		root["HuobanAppSDK_QR"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isPC = exports.isMobile = exports.isIPad = exports.isIPhone = exports.isAndroid = undefined;
	exports.client = client;
	exports.host = host;
	
	var _const = __webpack_require__(1);
	
	var ConstVars = _interopRequireWildcard(_const);
	
	var _browser = __webpack_require__(2);
	
	var _browser2 = _interopRequireDefault(_browser);
	
	var _webview = __webpack_require__(10);
	
	var _webview2 = _interopRequireDefault(_webview);
	
	var _webview_url = __webpack_require__(11);
	
	var _webview_url2 = _interopRequireDefault(_webview_url);
	
	var _host = __webpack_require__(12);
	
	var _host2 = _interopRequireDefault(_host);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var isAndroid = exports.isAndroid = ConstVars.isAndroid;
	var isIPhone = exports.isIPhone = ConstVars.isIPhone;
	var isIPad = exports.isIPad = ConstVars.isIPad;
	var isMobile = exports.isMobile = ConstVars.isMobile;
	var isPC = exports.isPC = ConstVars.isPC;
	
	var instance = {};
	
	function client(handlers) {
	  if (!instance.client) {
	    if (isAndroid) {
	      instance.client = new _webview_url2.default();
	    } else if (isIPhone || isIPad) {
	      instance.client = new _webview2.default();
	    } else {
	      instance.client = new _browser2.default();
	    }
	  }
	
	  if (handlers) {
	    instance.client.on(handlers);
	  }
	
	  return instance.client;
	}
	
	function host(handlers) {
	  if (!instance.host) {
	    instance.host = new _host2.default();
	    instance.host.init();
	  }
	
	  if (handlers) {
	    instance.host.on(handlers);
	  }
	
	  return instance.host;
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var UA = navigator.userAgent;
	
	var isAndroid = exports.isAndroid = !!UA.match(/(Android);?[\s\/]+([\d.]+)?/);
	var isIPad = exports.isIPad = !!UA.match(/(iPad).*OS\s([\d_]+)/);
	var isIPhone = exports.isIPhone = !isIPad && !!UA.match(/(iPhone\sOS)\s([\d_]+)/);
	var isMobile = exports.isMobile = isAndroid || isIPhone || isIPad;
	var isPC = exports.isPC = !isMobile;
	
	var HB_HOST = exports.HB_HOST = '*';
	
	var MSG_TYPES = exports.MSG_TYPES = {
	  CONNECT: '$connect$',
	  DISCONNECT: '$disconnect$',
	  CLOSE: '$close$',
	  PING: '$ping$',
	  BROADCAST: 'broadcast'
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _miniDefer = __webpack_require__(3);
	
	var _miniDefer2 = _interopRequireDefault(_miniDefer);
	
	var _util = __webpack_require__(4);
	
	var _const = __webpack_require__(1);
	
	var _index = __webpack_require__(5);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ClientBrowser = function (_Client) {
	  _inherits(ClientBrowser, _Client);
	
	  function ClientBrowser() {
	    _classCallCheck(this, ClientBrowser);
	
	    return _possibleConstructorReturn(this, (ClientBrowser.__proto__ || Object.getPrototypeOf(ClientBrowser)).apply(this, arguments));
	  }
	
	  _createClass(ClientBrowser, [{
	    key: 'init',
	    value: function init(applicationId) {
	      var deferred = (0, _miniDefer2.default)();
	
	      if (window.parent === window) {
	        (0, _util.delay)(function (r) {
	          deferred.reject({ message: '无法找到宿主环境' });
	        });
	        return deferred.promise;
	      }
	      if (!window.MessageChannel) {
	        (0, _util.delay)(function (r) {
	          deferred.reject({ message: '您的浏览器不支持 MessageChannel' });
	        });
	        return deferred.promise;
	      }
	
	      if (this._ticket && this._user) {
	        deferred.resolve({
	          ticket: this._ticket,
	          user: this._user,
	          app: this._table,
	          table: this._table,
	          version: this._version
	        });
	        return deferred.promise;
	      }
	
	      this._id = this._unique_id('c_', 8);
	
	      var mc = new MessageChannel();
	      this.port = mc.port1;
	      this.port.onmessage = this.handleMessage.bind(this);
	
	      window.parent.postMessage(_const.MSG_TYPES.CONNECT + ':' + applicationId + ':' + this._id, _const.HB_HOST, [mc.port2]);
	
	      return this._init(applicationId);
	    }
	  }, {
	    key: '_send',
	    value: function _send(action, data, id) {
	      var payload = { action: action };
	      if (data) {
	        payload.data = data;
	      }
	      if (id) {
	        payload.id = id;
	      }
	
	      this.port.postMessage(payload);
	    }
	  }, {
	    key: '_processMessage',
	    value: function _processMessage(e) {
	      var eData = e.data;
	      switch (eData.action) {
	        case _const.MSG_TYPES.CONNECT:
	          if (eData.data.error) {
	            this.emit('error', _extends({}, eData.data.error, { type: 'connect' }));
	            this.emit('error.connect', eData.data.error);
	          } else {
	            this.connect.resolve(eData.data.result);
	          }
	          return false;
	        case _const.MSG_TYPES.CLOSE:
	          this.destroy();
	          return false;
	        case _const.MSG_TYPES.PING:
	          this.push(_const.MSG_TYPES.PING);
	          return false;
	      }
	    }
	  }, {
	    key: 'handleWindowBeforeUnload',
	    value: function handleWindowBeforeUnload(e) {
	      this._disconnect();
	    }
	  }, {
	    key: '_disconnect',
	    value: function _disconnect() {
	      this.push(_const.MSG_TYPES.DISCONNECT);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      _get(ClientBrowser.prototype.__proto__ || Object.getPrototypeOf(ClientBrowser.prototype), 'destroy', this).call(this);
	      if (this.port) {
	        this._disconnect();
	        this.port.close();
	        this.port = null;
	      }
	    }
	  }]);
	
	  return ClientBrowser;
	}(_index2.default);
	
	exports.default = ClientBrowser;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict'
	
	/* global Promise:false */
	
	/**
	 * Create a deferred.
	 * @returns {Object}
	 */
	function defer () {
	  var res
	  var rej
	  var promise = new Promise(function (resolve, reject) {
	    res = resolve
	    rej = reject
	  })
	  return {
	    promise: promise,
	    resolve: res,
	    reject: rej
	  }
	}
	
	/* global define:false window:false */
	if (true) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return defer
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	} else if (typeof module === 'object' && module.exports) {
	  module.exports = defer
	} else if (typeof window !== 'undefined') {
	  window.miniDefer = defer
	} else {
	  throw new Error(
	    'Environment is not supported. ' +
	    'Please raise an issue at https://github.com/sdgluck/mini-defer/issues'
	  )
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var toString = Object.prototype.toString;
	
	var delay = exports.delay = function delay(fn, ms) {
	  return setTimeout(fn, ms || 0);
	};
	
	var isArray = exports.isArray = function isArray(value) {
	  return Array.isArray ? Array.isArray(value) : toString.call(value) === '[object Array]';
	};
	var isObject = exports.isObject = function isObject(value) {
	  return toString.call(value) === '[object Object]';
	};
	var isBool = exports.isBool = function isBool(value) {
	  return toString.call(value) === '[object Boolean]';
	};
	var isString = exports.isString = function isString(value) {
	  return toString.call(value) === '[object String]';
	};
	
	function _cvFilterToV1(filter) {
	  var nf = { key: filter.field || filter.key };
	
	  if (!filter.query) {
	    filter.query = {};
	  }
	
	  if (filter.key == 'created_by') {
	    nf.values = filter.query.in;
	  } else if (filter.key == 'create_on') {
	    nf.values = _extends({}, filter.query);
	  } else {
	    if (isArray(filter.query.in)) {
	      if (isString(filter.query.in[0]) && filter.query.in[0] != 'myself') {
	        nf.keywords = filter.query.in;
	      } else {
	        nf.values = filter.query.in;
	      }
	    } else {
	      nf.values = _extends({}, filter.query);
	    }
	    if (isBool(filter.query.em)) {
	      nf.is_set = !filter.query.em;
	    }
	    if (filter.query.in_field) {
	      nf.fields = filter.query.in_field;
	    }
	
	    if (isArray(filter.query.inc)) {
	      nf.values = filter.query.inc;
	    }
	  }
	
	  return nf;
	}
	function _cvFilterToV2(filter) {
	  var nf = { field: filter.key, query: {} };
	
	  if (filter.key == 'created_by') {
	    nf.query.in = filter.values;
	  } else if (filter.key == 'create_on') {
	    nf.query = _extends({}, filter.values);
	  } else {
	    if (isObject(filter.values)) {
	      nf.query = _extends({}, filter.values);
	    } else if (isArray(filter.values)) {
	      nf.query.in = filter.values;
	    }
	    if (filter.keywords && isArray(filter.keywords) && filter.keywords.length) {
	      nf.query.in = filter.keywords;
	    }
	    if (filter.is_set === true || filter.is_set === false) {
	      nf.query.em = !filter.is_set;
	    }
	    if (filter.fields) {
	      nf.query.in_field = filter.fields;
	    }
	
	    if (isArray(filter.within)) {
	      nf.query.inc = filter.within;
	    }
	  }
	
	  return nf;
	}
	
	var cvFiltersToV1 = exports.cvFiltersToV1 = function cvFiltersToV1(filters) {
	  var ops = Object.keys(filters);
	  var newFilters = {};
	
	  ops.forEach(function (op) {
	    if (isObject(filters[op])) {
	      newFilters[op] = cvFiltersToV1(filters[op]);
	    } else if (isArray(filters[op])) {
	      newFilters[op] = filters[op].map(_cvFilterToV1);
	    }
	  });
	
	  return newFilters;
	};
	
	var cvFiltersToV2 = exports.cvFiltersToV2 = function cvFiltersToV2(filters) {
	  var ops = Object.keys(filters);
	  var newFilters = {};
	
	  ops.forEach(function (op) {
	    if (isObject(filters[op])) {
	      newFilters[op] = cvFiltersToV2(filters[op]);
	    } else if (isArray(filters[op])) {
	      newFilters[op] = filters[op].map(_cvFilterToV2);
	    }
	  });
	
	  return newFilters;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _miniDefer = __webpack_require__(3);
	
	var _miniDefer2 = _interopRequireDefault(_miniDefer);
	
	var _qrcodeJs = __webpack_require__(6);
	
	var _qrcodeJs2 = _interopRequireDefault(_qrcodeJs);
	
	var _const = __webpack_require__(1);
	
	var _util = __webpack_require__(4);
	
	var _channel = __webpack_require__(8);
	
	var _channel2 = _interopRequireDefault(_channel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Client = function (_Channel) {
	  _inherits(Client, _Channel);
	
	  function Client(handlers) {
	    _classCallCheck(this, Client);
	
	    var _this = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, handlers));
	
	    _this._ticket = null;
	    _this._user = null;
	    _this._table = null;
	    _this._version = null;
	    return _this;
	  }
	
	  _createClass(Client, [{
	    key: 'init',
	    value: function init(applicationId) {
	      return (0, _miniDefer2.default)().promise;
	    }
	  }, {
	    key: 'openWebPage',
	    value: function openWebPage(url, title) {
	      this.push('openWebPage', { url: url, title: title });
	    }
	  }, {
	    key: 'closeWebPage',
	    value: function closeWebPage() {
	      this.push('closeWebPage');
	    }
	  }, {
	    key: 'setTitle',
	    value: function setTitle(title) {
	      this.push('setTitle', { title: title });
	    }
	  }, {
	    key: 'setNavigationBarVisibility',
	    value: function setNavigationBarVisibility() {
	      var isVisible = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	      this.push('setNavigationBarVisibility', { is_visible: isVisible });
	    }
	  }, {
	    key: 'setBottomToolBarVisibility',
	    value: function setBottomToolBarVisibility() {
	      var isVisible = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
	
	      this.push('setBottomToolBarVisibility', { is_visible: isVisible });
	    }
	  }, {
	    key: 'broadcast',
	    value: function broadcast(action, data) {
	      this.push(_const.MSG_TYPES.BROADCAST, data ? { action: action, data: data } : { action: action });
	    }
	  }, {
	    key: 'openUserProfile',
	    value: function openUserProfile(userId) {
	      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var _event = arguments[2];
	
	      var defaultOptions = {
	        placement: 'bottom'
	      };
	      opts = _extends({}, defaultOptions, opts, { user_id: userId });
	
	      if (_event && _const.isPC) {
	        opts.ePos = this._getEventPosition(_event);
	      }
	
	      this.push('openUserProfile', opts);
	    }
	  }, {
	    key: 'getTableData',
	    value: function getTableData(tableId) {
	      return this.send('getTableData', { table_id: tableId });
	    }
	  }, {
	    key: 'getAppData',
	    value: function getAppData(tableId) {
	      return this.getTableData(tableId);
	    }
	  }, {
	    key: 'getSpaceMembers',
	    value: function getSpaceMembers() {
	      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      return this.send('getSpaceMembers', opts);
	    }
	  }, {
	    key: 'openFilter',
	    value: function openFilter(app, filters, viewId, fn, _event) {
	      var params = {
	        table_id: app.app_id || app.table_id,
	        space_id: app.space_id
	      };
	      if (filters) {
	        params.filters = (0, _util.cvFiltersToV1)(filters);
	      }
	      if (viewId) {
	        if (typeof viewId == 'function') {
	          fn = viewId;
	        } else if (viewId > 0) {
	          params.viewId = parseInt(viewId, 10);
	        }
	      }
	
	      var _fn = void 0;
	      if (fn) {
	        _fn = function _fn(data) {
	          if (data.filters) {
	            data.filters = (0, _util.cvFiltersToV2)(data.filters);
	          }
	          fn(data);
	        };
	      }
	
	      if (_event && _const.isPC) {
	        params.ePos = this._getEventPosition(_event);
	      }
	
	      return this.send('openFilter', params, null, _fn);
	    }
	  }, {
	    key: 'openItemDiff',
	    value: function openItemDiff(itemId, fromRevId, toRevId) {
	      var opts = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	      var params = _extends({}, opts, {
	        item_id: parseInt(itemId, 10),
	        from_revision_id: parseInt(fromRevId, 10),
	        to_revision_id: parseInt(toRevId, 10),
	        field_id: parseInt(opts.field_id, 10)
	      });
	      if (params.field_id && !params.field_name && this._table) {
	        this._table.fields.forEach(function (f) {
	          if (f.field_id == params.field_id) {
	            params.field_name = f.name;
	            return false;
	          }
	        });
	      }
	
	      this.push('openItemDiff', params);
	    }
	  }, {
	    key: 'openUserPicker',
	    value: function openUserPicker() {
	      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var fn = arguments[1];
	      var _event = arguments[2];
	
	      var defaultOptions = {
	        multi: false,
	        required: false,
	        title: '选择成员',
	        placement: 'right-bottom',
	        width: 300
	      };
	      opts = _extends({}, defaultOptions, opts);
	      if (_event && _const.isPC) {
	        opts.ePos = this._getEventPosition(_event);
	      }
	
	      return this.send('openUserPicker', opts, null, fn);
	    }
	  }, {
	    key: 'openDatePicker',
	    value: function openDatePicker() {
	      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var fn = arguments[1];
	      var _event = arguments[2];
	
	      var defaultOptions = {
	        type: 'date',
	        placement: 'right-bottom'
	      };
	      opts = _extends({}, defaultOptions, opts);
	
	      if (_event && _const.isPC) {
	        opts.ePos = this._getEventPosition(_event);
	      }
	
	      return this.send('openDatePicker', opts, null, fn);
	    }
	  }, {
	    key: 'openShare',
	    value: function openShare() {
	      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var fn = arguments[1];
	      var _event = arguments[2];
	
	      var defaultOptions = {
	        title: '',
	        content: '',
	        url: ''
	      };
	      opts = _extends({}, defaultOptions, opts);
	
	      if (_event && _const.isPC) {
	        opts.ePos = this._getEventPosition(_event);
	      }
	
	      return this.send('openShare', opts, null, fn);
	    }
	  }, {
	    key: 'openAttachment',
	    value: function openAttachment(fileInfo) {
	      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var _event = arguments[2];
	
	      if (_const.isPC) {
	        return window.open(fileInfo.link.source);
	      }
	
	      opts.file_info = fileInfo;
	
	      this.push('openAttachment', opts);
	    }
	  }, {
	    key: 'generateQrcode',
	    value: function generateQrcode(text) {
	      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      return _qrcodeJs2.default.toDataURL(text, 4);
	    }
	  }, {
	    key: 'genQRCode',
	    value: function genQRCode(text) {
	      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	      var b64str = _qrcodeJs2.default.toDataURL(text, 4);
	
	      return Promise.resolve({ dataURL: b64str });
	    }
	  }, {
	    key: 'showQRCode',
	    value: function showQRCode(text) {
	      var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var _event = arguments[2];
	
	      var defaultOptions = {
	        render: 'image',
	        crisp: true,
	        minVersion: 1,
	        ecLevel: 'L',
	        size: 300,
	        ratio: null,
	        fill: '#333',
	        back: '#fff',
	        rounded: 50,
	        quiet: 1,
	        mode: 'plain',
	
	        mSize: 30,
	        mPosX: 50,
	        mPosY: 50,
	
	        label: '',
	        fontname: 'sans',
	        fontcolor: '#333',
	
	        image: null,
	        title: null
	      };
	      opts = _extends({}, defaultOptions, opts, { text: text });
	
	      if (_event && _const.isPC) {
	        opts.ePos = this._getEventPosition(_event);
	      }
	
	      this.push('showQRCode', opts);
	    }
	  }, {
	    key: 'scanQRCode',
	    value: function scanQRCode() {
	      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	      if (typeof opts.needResult != 'boolean') {
	        opts.needResult = true;
	      }
	
	      return this.send('scanQRCode', opts);
	    }
	  }, {
	    key: 'getLocation',
	    value: function getLocation() {
	      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var fn = arguments[1];
	      var _event = arguments[2];
	
	      var defaultOptions = {
	        enableHighAccuracy: true,
	        timeout: 5000,
	        maximumAge: 10000,
	        convert: true,
	        title: '选择地址',
	        placement: 'left-bottom'
	      };
	      opts = _extends({}, defaultOptions, opts);
	
	      if (_event && _const.isPC) {
	        opts.ePos = this._getEventPosition(_event);
	      }
	
	      return this.send('getLocation', opts, null, fn);
	    }
	  }, {
	    key: 'setPageConfig',
	    value: function setPageConfig(config) {
	      this.push('setPageConfig', { config: config });
	    }
	  }, {
	    key: 'installApplication',
	    value: function installApplication(applicationId) {
	      this.push('installApplication', { application_id: applicationId });
	    }
	  }, {
	    key: '_init',
	    value: function _init(applicationId) {
	      var _this2 = this;
	
	      return this.send('init', { application_id: applicationId }).then(function (ret) {
	        _this2._ticket = ret.ticket;
	        _this2._user = ret.user;
	        _this2._table = ret.table || ret.app;
	
	        if (!_this2._table.app_id && _this2._table.table_id) {
	          _this2._table.app_id = _this2._table.table_id;
	        }
	        _this2._version = ret.version;
	        _this2.appId = applicationId;
	
	        return _extends({}, ret, { app: _this2._table, table: _this2._table });
	      });
	    }
	  }, {
	    key: '_getEventPosition',
	    value: function _getEventPosition(e) {
	      var target = e.currentTarget || e.target;
	      var rect = target.getBoundingClientRect();
	      var top = rect.top;
	      var bottom = rect.bottom;
	      var left = rect.left;
	      var right = rect.right;
	      var width = rect.width;
	      var height = rect.height;
	
	
	      return {
	        target: { top: top, bottom: bottom, left: left, right: right, width: width, height: height, offsetWidth: e.target.offsetWidth, offsetHeight: e.target.offsetHeight },
	        clientX: e.clientX,
	        clientY: e.clientY,
	        offsetX: e.offsetX,
	        offsetY: e.offsetY
	      };
	    }
	  }]);
	
	  return Client;
	}(_channel2.default);
	
	exports.default = Client;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	var qrcode = __webpack_require__(7);
	
	module.exports = {
	    typeNumber: 4,
	    errorCorrectLevel: 'L',
	    toBase64: function(text, size){
	        var qr = qrcode(this.typeNumber, this.errorCorrectLevel);
	        qr.addData(text);
	        qr.make();
	        var base64 = qr.createImgBase64(size);
	        return base64;
	    },
	    toDataURL: function(text, size){
	        var base64 = this.toBase64(text, size);        
	        var dataURL = 'data:image/gif;base64,' + base64; 
	        return dataURL;
	    }
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	// The original source of this file is: http://d-project.googlecode.com/svn/trunk/misc/qrcode/js/qrcode.js
	
	//---------------------------------------------------------------------
	//
	// QR Code Generator for JavaScript
	//
	// Copyright (c) 2009 Kazuhiko Arase
	//
	// URL: http://www.d-project.com/
	//
	// Licensed under the MIT license:
	//	http://www.opensource.org/licenses/mit-license.php
	//
	// The word 'QR Code' is registered trademark of
	// DENSO WAVE INCORPORATED
	//	http://www.denso-wave.com/qrcode/faqpatent-e.html
	//
	//---------------------------------------------------------------------
	
	var qrcode = function() {
	
		//---------------------------------------------------------------------
		// qrcode
		//---------------------------------------------------------------------
	
		/**
		 * qrcode
		 * @param typeNumber 1 to 10
		 * @param errorCorrectLevel 'L','M','Q','H'
		 */
		var qrcode = function(typeNumber, errorCorrectLevel) {
	
			var PAD0 = 0xEC;
			var PAD1 = 0x11;
	
			var _typeNumber = typeNumber;
			var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];
			var _modules = null;
			var _moduleCount = 0;
			var _dataCache = null;
			var _dataList = new Array();
	
			var _this = {};
	
			var makeImpl = function(test, maskPattern) {
	
				_moduleCount = _typeNumber * 4 + 17;
				_modules = function(moduleCount) {
					var modules = new Array(moduleCount);
					for (var row = 0; row < moduleCount; row += 1) {
						modules[row] = new Array(moduleCount);
						for (var col = 0; col < moduleCount; col += 1) {
							modules[row][col] = null;
						}
					}
					return modules;
				}(_moduleCount);
	
				setupPositionProbePattern(0, 0);
				setupPositionProbePattern(_moduleCount - 7, 0);
				setupPositionProbePattern(0, _moduleCount - 7);
				setupPositionAdjustPattern();
				setupTimingPattern();
				setupTypeInfo(test, maskPattern);
	
				if (_typeNumber >= 7) {
					setupTypeNumber(test);
				}
	
				if (_dataCache == null) {
					_dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);
				}
	
				mapData(_dataCache, maskPattern);
			};
	
			var setupPositionProbePattern = function(row, col) {
	
				for (var r = -1; r <= 7; r += 1) {
	
					if (row + r <= -1 || _moduleCount <= row + r) continue;
	
					for (var c = -1; c <= 7; c += 1) {
	
						if (col + c <= -1 || _moduleCount <= col + c) continue;
	
						if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
								|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
								|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
							_modules[row + r][col + c] = true;
						} else {
							_modules[row + r][col + c] = false;
						}
					}
				}
			};
	
			var getBestMaskPattern = function() {
	
				var minLostPoint = 0;
				var pattern = 0;
	
				for (var i = 0; i < 8; i += 1) {
	
					makeImpl(true, i);
	
					var lostPoint = QRUtil.getLostPoint(_this);
	
					if (i == 0 || minLostPoint > lostPoint) {
						minLostPoint = lostPoint;
						pattern = i;
					}
				}
	
				return pattern;
			};
	
			var setupTimingPattern = function() {
	
				for (var r = 8; r < _moduleCount - 8; r += 1) {
					if (_modules[r][6] != null) {
						continue;
					}
					_modules[r][6] = (r % 2 == 0);
				}
	
				for (var c = 8; c < _moduleCount - 8; c += 1) {
					if (_modules[6][c] != null) {
						continue;
					}
					_modules[6][c] = (c % 2 == 0);
				}
			};
	
			var setupPositionAdjustPattern = function() {
	
				var pos = QRUtil.getPatternPosition(_typeNumber);
	
				for (var i = 0; i < pos.length; i += 1) {
	
					for (var j = 0; j < pos.length; j += 1) {
	
						var row = pos[i];
						var col = pos[j];
	
						if (_modules[row][col] != null) {
							continue;
						}
	
						for (var r = -2; r <= 2; r += 1) {
	
							for (var c = -2; c <= 2; c += 1) {
	
								if (r == -2 || r == 2 || c == -2 || c == 2
										|| (r == 0 && c == 0) ) {
									_modules[row + r][col + c] = true;
								} else {
									_modules[row + r][col + c] = false;
								}
							}
						}
					}
				}
			};
	
			var setupTypeNumber = function(test) {
	
				var bits = QRUtil.getBCHTypeNumber(_typeNumber);
	
				for (var i = 0; i < 18; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					_modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
				}
	
				for (var i = 0; i < 18; i += 1) {
					var mod = (!test && ( (bits >> i) & 1) == 1);
					_modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
				}
			};
	
			var setupTypeInfo = function(test, maskPattern) {
	
				var data = (_errorCorrectLevel << 3) | maskPattern;
				var bits = QRUtil.getBCHTypeInfo(data);
	
				// vertical
				for (var i = 0; i < 15; i += 1) {
	
					var mod = (!test && ( (bits >> i) & 1) == 1);
	
					if (i < 6) {
						_modules[i][8] = mod;
					} else if (i < 8) {
						_modules[i + 1][8] = mod;
					} else {
						_modules[_moduleCount - 15 + i][8] = mod;
					}
				}
	
				// horizontal
				for (var i = 0; i < 15; i += 1) {
	
					var mod = (!test && ( (bits >> i) & 1) == 1);
	
					if (i < 8) {
						_modules[8][_moduleCount - i - 1] = mod;
					} else if (i < 9) {
						_modules[8][15 - i - 1 + 1] = mod;
					} else {
						_modules[8][15 - i - 1] = mod;
					}
				}
	
				// fixed module
				_modules[_moduleCount - 8][8] = (!test);
			};
	
			var mapData = function(data, maskPattern) {
	
				var inc = -1;
				var row = _moduleCount - 1;
				var bitIndex = 7;
				var byteIndex = 0;
				var maskFunc = QRUtil.getMaskFunction(maskPattern);
	
				for (var col = _moduleCount - 1; col > 0; col -= 2) {
	
					if (col == 6) col -= 1;
	
					while (true) {
	
						for (var c = 0; c < 2; c += 1) {
	
							if (_modules[row][col - c] == null) {
	
								var dark = false;
	
								if (byteIndex < data.length) {
									dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
								}
	
								var mask = maskFunc(row, col - c);
	
								if (mask) {
									dark = !dark;
								}
	
								_modules[row][col - c] = dark;
								bitIndex -= 1;
	
								if (bitIndex == -1) {
									byteIndex += 1;
									bitIndex = 7;
								}
							}
						}
	
						row += inc;
	
						if (row < 0 || _moduleCount <= row) {
							row -= inc;
							inc = -inc;
							break;
						}
					}
				}
			};
	
			var createBytes = function(buffer, rsBlocks) {
	
				var offset = 0;
	
				var maxDcCount = 0;
				var maxEcCount = 0;
	
				var dcdata = new Array(rsBlocks.length);
				var ecdata = new Array(rsBlocks.length);
	
				for (var r = 0; r < rsBlocks.length; r += 1) {
	
					var dcCount = rsBlocks[r].dataCount;
					var ecCount = rsBlocks[r].totalCount - dcCount;
	
					maxDcCount = Math.max(maxDcCount, dcCount);
					maxEcCount = Math.max(maxEcCount, ecCount);
	
					dcdata[r] = new Array(dcCount);
	
					for (var i = 0; i < dcdata[r].length; i += 1) {
						dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
					}
					offset += dcCount;
	
					var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
					var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);
	
					var modPoly = rawPoly.mod(rsPoly);
					ecdata[r] = new Array(rsPoly.getLength() - 1);
					for (var i = 0; i < ecdata[r].length; i += 1) {
						var modIndex = i + modPoly.getLength() - ecdata[r].length;
						ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
					}
				}
	
				var totalCodeCount = 0;
				for (var i = 0; i < rsBlocks.length; i += 1) {
					totalCodeCount += rsBlocks[i].totalCount;
				}
	
				var data = new Array(totalCodeCount);
				var index = 0;
	
				for (var i = 0; i < maxDcCount; i += 1) {
					for (var r = 0; r < rsBlocks.length; r += 1) {
						if (i < dcdata[r].length) {
							data[index] = dcdata[r][i];
							index += 1;
						}
					}
				}
	
				for (var i = 0; i < maxEcCount; i += 1) {
					for (var r = 0; r < rsBlocks.length; r += 1) {
						if (i < ecdata[r].length) {
							data[index] = ecdata[r][i];
							index += 1;
						}
					}
				}
	
				return data;
			};
	
			var createData = function(typeNumber, errorCorrectLevel, dataList) {
	
				var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
	
				var buffer = qrBitBuffer();
	
				for (var i = 0; i < dataList.length; i += 1) {
					var data = dataList[i];
					buffer.put(data.getMode(), 4);
					buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
					data.write(buffer);
				}
	
				// calc num max data.
				var totalDataCount = 0;
				for (var i = 0; i < rsBlocks.length; i += 1) {
					totalDataCount += rsBlocks[i].dataCount;
				}
	
				if (buffer.getLengthInBits() > totalDataCount * 8) {
					throw new Error('code length overflow. ('
						+ buffer.getLengthInBits()
						+ '>'
						+ totalDataCount * 8
						+ ')');
				}
	
				// end code
				if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
					buffer.put(0, 4);
				}
	
				// padding
				while (buffer.getLengthInBits() % 8 != 0) {
					buffer.putBit(false);
				}
	
				// padding
				while (true) {
	
					if (buffer.getLengthInBits() >= totalDataCount * 8) {
						break;
					}
					buffer.put(PAD0, 8);
	
					if (buffer.getLengthInBits() >= totalDataCount * 8) {
						break;
					}
					buffer.put(PAD1, 8);
				}
	
				return createBytes(buffer, rsBlocks);
			};
	
			_this.addData = function(data) {
				var newData = qr8BitByte(data);
				_dataList.push(newData);
				_dataCache = null;
			};
	
			_this.isDark = function(row, col) {
				if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
					throw new Error(row + ',' + col);
				}
				return _modules[row][col];
			};
	
			_this.getModuleCount = function() {
				return _moduleCount;
			};
	
			_this.make = function() {
				makeImpl(false, getBestMaskPattern() );
			};
	
			_this.createTableTag = function(cellSize, margin) {
	
				cellSize = cellSize || 2;
				margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
	
				var qrHtml = '';
	
				qrHtml += '<table style="';
				qrHtml += ' border-width: 0px; border-style: none;';
				qrHtml += ' border-collapse: collapse;';
				qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
				qrHtml += '">';
				qrHtml += '<tbody>';
	
				for (var r = 0; r < _this.getModuleCount(); r += 1) {
	
					qrHtml += '<tr>';
	
					for (var c = 0; c < _this.getModuleCount(); c += 1) {
						qrHtml += '<td style="';
						qrHtml += ' border-width: 0px; border-style: none;';
						qrHtml += ' border-collapse: collapse;';
						qrHtml += ' padding: 0px; margin: 0px;';
						qrHtml += ' width: ' + cellSize + 'px;';
						qrHtml += ' height: ' + cellSize + 'px;';
						qrHtml += ' background-color: ';
						qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
						qrHtml += ';';
						qrHtml += '"/>';
					}
	
					qrHtml += '</tr>';
				}
	
				qrHtml += '</tbody>';
				qrHtml += '</table>';
	
				return qrHtml;
			};
	
			_this.createImgTag = function(cellSize, margin) {
	
				cellSize = cellSize || 2;
				margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
	
				var size = _this.getModuleCount() * cellSize + margin * 2;
				var min = margin;
				var max = size - margin;
	
				return createImgTag(size, size, function(x, y) {
					if (min <= x && x < max && min <= y && y < max) {
						var c = Math.floor( (x - min) / cellSize);
						var r = Math.floor( (y - min) / cellSize);
						return _this.isDark(r, c)? 0 : 1;
					} else {
						return 1;
					}
				} );
			};
	        
	        _this.createImgBase64 = function(cellSize, margin) {
	
				cellSize = cellSize || 2;
				margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
	
				var size = _this.getModuleCount() * cellSize + margin * 2;
				var min = margin;
				var max = size - margin;
	
				return createImgBase64(size, size, function(x, y) {
					if (min <= x && x < max && min <= y && y < max) {
						var c = Math.floor( (x - min) / cellSize);
						var r = Math.floor( (y - min) / cellSize);
						return _this.isDark(r, c)? 0 : 1;
					} else {
						return 1;
					}
				} );
			};
	        
			return _this;
		};
	
		//---------------------------------------------------------------------
		// qrcode.stringToBytes
		//---------------------------------------------------------------------
	
		qrcode.stringToBytes = function(s) {
			var bytes = new Array();
			for (var i = 0; i < s.length; i += 1) {
				var c = s.charCodeAt(i);
				bytes.push(c & 0xff);
			}
			return bytes;
		};
	
		//---------------------------------------------------------------------
		// qrcode.createStringToBytes
		//---------------------------------------------------------------------
	
		/**
		 * @param unicodeData base64 string of byte array.
		 * [16bit Unicode],[16bit Bytes], ...
		 * @param numChars
		 */
		qrcode.createStringToBytes = function(unicodeData, numChars) {
	
			// create conversion map.
	
			var unicodeMap = function() {
	
				var bin = base64DecodeInputStream(unicodeData);
				var read = function() {
					var b = bin.read();
					if (b == -1) throw new Error();
					return b;
				};
	
				var count = 0;
				var unicodeMap = {};
				while (true) {
					var b0 = bin.read();
					if (b0 == -1) break;
					var b1 = read();
					var b2 = read();
					var b3 = read();
					var k = String.fromCharCode( (b0 << 8) | b1);
					var v = (b2 << 8) | b3;
					unicodeMap[k] = v;
					count += 1;
				}
				if (count != numChars) {
					throw new Error(count + ' != ' + numChars);
				}
	
				return unicodeMap;
			}();
	
			var unknownChar = '?'.charCodeAt(0);
	
			return function(s) {
				var bytes = new Array();
				for (var i = 0; i < s.length; i += 1) {
					var c = s.charCodeAt(i);
					if (c < 128) {
						bytes.push(c);
					} else {
						var b = unicodeMap[s.charAt(i)];
						if (typeof b == 'number') {
							if ( (b & 0xff) == b) {
								// 1byte
								bytes.push(b);
							} else {
								// 2bytes
								bytes.push(b >>> 8);
								bytes.push(b & 0xff);
							}
						} else {
							bytes.push(unknownChar);
						}
					}
				}
				return bytes;
			};
		};
	
		//---------------------------------------------------------------------
		// QRMode
		//---------------------------------------------------------------------
	
		var QRMode = {
			MODE_NUMBER :		1 << 0,
			MODE_ALPHA_NUM : 	1 << 1,
			MODE_8BIT_BYTE : 	1 << 2,
			MODE_KANJI :		1 << 3
		};
	
		//---------------------------------------------------------------------
		// QRErrorCorrectLevel
		//---------------------------------------------------------------------
	
		var QRErrorCorrectLevel = {
			L : 1,
			M : 0,
			Q : 3,
			H : 2
		};
	
		//---------------------------------------------------------------------
		// QRMaskPattern
		//---------------------------------------------------------------------
	
		var QRMaskPattern = {
			PATTERN000 : 0,
			PATTERN001 : 1,
			PATTERN010 : 2,
			PATTERN011 : 3,
			PATTERN100 : 4,
			PATTERN101 : 5,
			PATTERN110 : 6,
			PATTERN111 : 7
		};
	
		//---------------------------------------------------------------------
		// QRUtil
		//---------------------------------------------------------------------
	
		var QRUtil = function() {
	
			var PATTERN_POSITION_TABLE = [
				[],
				[6, 18],
				[6, 22],
				[6, 26],
				[6, 30],
				[6, 34],
				[6, 22, 38],
				[6, 24, 42],
				[6, 26, 46],
				[6, 28, 50],
				[6, 30, 54],
				[6, 32, 58],
				[6, 34, 62],
				[6, 26, 46, 66],
				[6, 26, 48, 70],
				[6, 26, 50, 74],
				[6, 30, 54, 78],
				[6, 30, 56, 82],
				[6, 30, 58, 86],
				[6, 34, 62, 90],
				[6, 28, 50, 72, 94],
				[6, 26, 50, 74, 98],
				[6, 30, 54, 78, 102],
				[6, 28, 54, 80, 106],
				[6, 32, 58, 84, 110],
				[6, 30, 58, 86, 114],
				[6, 34, 62, 90, 118],
				[6, 26, 50, 74, 98, 122],
				[6, 30, 54, 78, 102, 126],
				[6, 26, 52, 78, 104, 130],
				[6, 30, 56, 82, 108, 134],
				[6, 34, 60, 86, 112, 138],
				[6, 30, 58, 86, 114, 142],
				[6, 34, 62, 90, 118, 146],
				[6, 30, 54, 78, 102, 126, 150],
				[6, 24, 50, 76, 102, 128, 154],
				[6, 28, 54, 80, 106, 132, 158],
				[6, 32, 58, 84, 110, 136, 162],
				[6, 26, 54, 82, 110, 138, 166],
				[6, 30, 58, 86, 114, 142, 170]
			];
			var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
			var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
			var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
	
			var _this = {};
	
			var getBCHDigit = function(data) {
				var digit = 0;
				while (data != 0) {
					digit += 1;
					data >>>= 1;
				}
				return digit;
			};
	
			_this.getBCHTypeInfo = function(data) {
				var d = data << 10;
				while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
					d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
				}
				return ( (data << 10) | d) ^ G15_MASK;
			};
	
			_this.getBCHTypeNumber = function(data) {
				var d = data << 12;
				while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
					d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
				}
				return (data << 12) | d;
			};
	
			_this.getPatternPosition = function(typeNumber) {
				return PATTERN_POSITION_TABLE[typeNumber - 1];
			};
	
			_this.getMaskFunction = function(maskPattern) {
	
				switch (maskPattern) {
	
				case QRMaskPattern.PATTERN000 :
					return function(i, j) { return (i + j) % 2 == 0; };
				case QRMaskPattern.PATTERN001 :
					return function(i, j) { return i % 2 == 0; };
				case QRMaskPattern.PATTERN010 :
					return function(i, j) { return j % 3 == 0; };
				case QRMaskPattern.PATTERN011 :
					return function(i, j) { return (i + j) % 3 == 0; };
				case QRMaskPattern.PATTERN100 :
					return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
				case QRMaskPattern.PATTERN101 :
					return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
				case QRMaskPattern.PATTERN110 :
					return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
				case QRMaskPattern.PATTERN111 :
					return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };
	
				default :
					throw new Error('bad maskPattern:' + maskPattern);
				}
			};
	
			_this.getErrorCorrectPolynomial = function(errorCorrectLength) {
				var a = qrPolynomial([1], 0);
				for (var i = 0; i < errorCorrectLength; i += 1) {
					a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
				}
				return a;
			};
	
			_this.getLengthInBits = function(mode, type) {
	
				if (1 <= type && type < 10) {
	
					// 1 - 9
	
					switch(mode) {
					case QRMode.MODE_NUMBER 	: return 10;
					case QRMode.MODE_ALPHA_NUM 	: return 9;
					case QRMode.MODE_8BIT_BYTE	: return 8;
					case QRMode.MODE_KANJI		: return 8;
					default :
						throw new Error('mode:' + mode);
					}
	
				} else if (type < 27) {
	
					// 10 - 26
	
					switch(mode) {
					case QRMode.MODE_NUMBER 	: return 12;
					case QRMode.MODE_ALPHA_NUM 	: return 11;
					case QRMode.MODE_8BIT_BYTE	: return 16;
					case QRMode.MODE_KANJI		: return 10;
					default :
						throw new Error('mode:' + mode);
					}
	
				} else if (type < 41) {
	
					// 27 - 40
	
					switch(mode) {
					case QRMode.MODE_NUMBER 	: return 14;
					case QRMode.MODE_ALPHA_NUM	: return 13;
					case QRMode.MODE_8BIT_BYTE	: return 16;
					case QRMode.MODE_KANJI		: return 12;
					default :
						throw new Error('mode:' + mode);
					}
	
				} else {
					throw new Error('type:' + type);
				}
			};
	
			_this.getLostPoint = function(qrcode) {
	
				var moduleCount = qrcode.getModuleCount();
	
				var lostPoint = 0;
	
				// LEVEL1
	
				for (var row = 0; row < moduleCount; row += 1) {
					for (var col = 0; col < moduleCount; col += 1) {
	
						var sameCount = 0;
						var dark = qrcode.isDark(row, col);
	
						for (var r = -1; r <= 1; r += 1) {
	
							if (row + r < 0 || moduleCount <= row + r) {
								continue;
							}
	
							for (var c = -1; c <= 1; c += 1) {
	
								if (col + c < 0 || moduleCount <= col + c) {
									continue;
								}
	
								if (r == 0 && c == 0) {
									continue;
								}
	
								if (dark == qrcode.isDark(row + r, col + c) ) {
									sameCount += 1;
								}
							}
						}
	
						if (sameCount > 5) {
							lostPoint += (3 + sameCount - 5);
						}
					}
				};
	
				// LEVEL2
	
				for (var row = 0; row < moduleCount - 1; row += 1) {
					for (var col = 0; col < moduleCount - 1; col += 1) {
						var count = 0;
						if (qrcode.isDark(row, col) ) count += 1;
						if (qrcode.isDark(row + 1, col) ) count += 1;
						if (qrcode.isDark(row, col + 1) ) count += 1;
						if (qrcode.isDark(row + 1, col + 1) ) count += 1;
						if (count == 0 || count == 4) {
							lostPoint += 3;
						}
					}
				}
	
				// LEVEL3
	
				for (var row = 0; row < moduleCount; row += 1) {
					for (var col = 0; col < moduleCount - 6; col += 1) {
						if (qrcode.isDark(row, col)
								&& !qrcode.isDark(row, col + 1)
								&&  qrcode.isDark(row, col + 2)
								&&  qrcode.isDark(row, col + 3)
								&&  qrcode.isDark(row, col + 4)
								&& !qrcode.isDark(row, col + 5)
								&&  qrcode.isDark(row, col + 6) ) {
							lostPoint += 40;
						}
					}
				}
	
				for (var col = 0; col < moduleCount; col += 1) {
					for (var row = 0; row < moduleCount - 6; row += 1) {
						if (qrcode.isDark(row, col)
								&& !qrcode.isDark(row + 1, col)
								&&  qrcode.isDark(row + 2, col)
								&&  qrcode.isDark(row + 3, col)
								&&  qrcode.isDark(row + 4, col)
								&& !qrcode.isDark(row + 5, col)
								&&  qrcode.isDark(row + 6, col) ) {
							lostPoint += 40;
						}
					}
				}
	
				// LEVEL4
	
				var darkCount = 0;
	
				for (var col = 0; col < moduleCount; col += 1) {
					for (var row = 0; row < moduleCount; row += 1) {
						if (qrcode.isDark(row, col) ) {
							darkCount += 1;
						}
					}
				}
	
				var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
				lostPoint += ratio * 10;
	
				return lostPoint;
			};
	
			return _this;
		}();
	
		//---------------------------------------------------------------------
		// QRMath
		//---------------------------------------------------------------------
	
		var QRMath = function() {
	
			var EXP_TABLE = new Array(256);
			var LOG_TABLE = new Array(256);
	
			// initialize tables
			for (var i = 0; i < 8; i += 1) {
				EXP_TABLE[i] = 1 << i;
			}
			for (var i = 8; i < 256; i += 1) {
				EXP_TABLE[i] = EXP_TABLE[i - 4]
					^ EXP_TABLE[i - 5]
					^ EXP_TABLE[i - 6]
					^ EXP_TABLE[i - 8];
			}
			for (var i = 0; i < 255; i += 1) {
				LOG_TABLE[EXP_TABLE[i] ] = i;
			}
	
			var _this = {};
	
			_this.glog = function(n) {
	
				if (n < 1) {
					throw new Error('glog(' + n + ')');
				}
	
				return LOG_TABLE[n];
			};
	
			_this.gexp = function(n) {
	
				while (n < 0) {
					n += 255;
				}
	
				while (n >= 256) {
					n -= 255;
				}
	
				return EXP_TABLE[n];
			};
	
			return _this;
		}();
	
		//---------------------------------------------------------------------
		// qrPolynomial
		//---------------------------------------------------------------------
	
		function qrPolynomial(num, shift) {
	
			if (typeof num.length == 'undefined') {
				throw new Error(num.length + '/' + shift);
			}
	
			var _num = function() {
				var offset = 0;
				while (offset < num.length && num[offset] == 0) {
					offset += 1;
				}
				var _num = new Array(num.length - offset + shift);
				for (var i = 0; i < num.length - offset; i += 1) {
					_num[i] = num[i + offset];
				}
				return _num;
			}();
	
			var _this = {};
	
			_this.getAt = function(index) {
				return _num[index];
			};
	
			_this.getLength = function() {
				return _num.length;
			};
	
			_this.multiply = function(e) {
	
				var num = new Array(_this.getLength() + e.getLength() - 1);
	
				for (var i = 0; i < _this.getLength(); i += 1) {
					for (var j = 0; j < e.getLength(); j += 1) {
						num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
					}
				}
	
				return qrPolynomial(num, 0);
			};
	
			_this.mod = function(e) {
	
				if (_this.getLength() - e.getLength() < 0) {
					return _this;
				}
	
				var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );
	
				var num = new Array(_this.getLength() );
				for (var i = 0; i < _this.getLength(); i += 1) {
					num[i] = _this.getAt(i);
				}
	
				for (var i = 0; i < e.getLength(); i += 1) {
					num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
				}
	
				// recursive call
				return qrPolynomial(num, 0).mod(e);
			};
	
			return _this;
		};
	
		//---------------------------------------------------------------------
		// QRRSBlock
		//---------------------------------------------------------------------
	
		var QRRSBlock = function() {
	
			var RS_BLOCK_TABLE = [
	
				// L
				// M
				// Q
				// H
	
				// 1
				[1, 26, 19],
				[1, 26, 16],
				[1, 26, 13],
				[1, 26, 9],
	
				// 2
				[1, 44, 34],
				[1, 44, 28],
				[1, 44, 22],
				[1, 44, 16],
	
				// 3
				[1, 70, 55],
				[1, 70, 44],
				[2, 35, 17],
				[2, 35, 13],
	
				// 4
				[1, 100, 80],
				[2, 50, 32],
				[2, 50, 24],
				[4, 25, 9],
	
				// 5
				[1, 134, 108],
				[2, 67, 43],
				[2, 33, 15, 2, 34, 16],
				[2, 33, 11, 2, 34, 12],
	
				// 6
				[2, 86, 68],
				[4, 43, 27],
				[4, 43, 19],
				[4, 43, 15],
	
				// 7
				[2, 98, 78],
				[4, 49, 31],
				[2, 32, 14, 4, 33, 15],
				[4, 39, 13, 1, 40, 14],
	
				// 8
				[2, 121, 97],
				[2, 60, 38, 2, 61, 39],
				[4, 40, 18, 2, 41, 19],
				[4, 40, 14, 2, 41, 15],
	
				// 9
				[2, 146, 116],
				[3, 58, 36, 2, 59, 37],
				[4, 36, 16, 4, 37, 17],
				[4, 36, 12, 4, 37, 13],
	
				// 10
				[2, 86, 68, 2, 87, 69],
				[4, 69, 43, 1, 70, 44],
				[6, 43, 19, 2, 44, 20],
				[6, 43, 15, 2, 44, 16]
			];
	
			var qrRSBlock = function(totalCount, dataCount) {
				var _this = {};
				_this.totalCount = totalCount;
				_this.dataCount = dataCount;
				return _this;
			};
	
			var _this = {};
	
			var getRsBlockTable = function(typeNumber, errorCorrectLevel) {
	
				switch(errorCorrectLevel) {
				case QRErrorCorrectLevel.L :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
				case QRErrorCorrectLevel.M :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
				case QRErrorCorrectLevel.Q :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
				case QRErrorCorrectLevel.H :
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
				default :
					return undefined;
				}
			};
	
			_this.getRSBlocks = function(typeNumber, errorCorrectLevel) {
	
				var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);
	
				if (typeof rsBlock == 'undefined') {
					throw new Error('bad rs block @ typeNumber:' + typeNumber +
							'/errorCorrectLevel:' + errorCorrectLevel);
				}
	
				var length = rsBlock.length / 3;
	
				var list = new Array();
	
				for (var i = 0; i < length; i += 1) {
	
					var count = rsBlock[i * 3 + 0];
					var totalCount = rsBlock[i * 3 + 1];
					var dataCount = rsBlock[i * 3 + 2];
	
					for (var j = 0; j < count; j += 1) {
						list.push(qrRSBlock(totalCount, dataCount) );
					}
				}
	
				return list;
			};
	
			return _this;
		}();
	
		//---------------------------------------------------------------------
		// qrBitBuffer
		//---------------------------------------------------------------------
	
		var qrBitBuffer = function() {
	
			var _buffer = new Array();
			var _length = 0;
	
			var _this = {};
	
			_this.getBuffer = function() {
				return _buffer;
			};
	
			_this.getAt = function(index) {
				var bufIndex = Math.floor(index / 8);
				return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
			};
	
			_this.put = function(num, length) {
				for (var i = 0; i < length; i += 1) {
					_this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
				}
			};
	
			_this.getLengthInBits = function() {
				return _length;
			};
	
			_this.putBit = function(bit) {
	
				var bufIndex = Math.floor(_length / 8);
				if (_buffer.length <= bufIndex) {
					_buffer.push(0);
				}
	
				if (bit) {
					_buffer[bufIndex] |= (0x80 >>> (_length % 8) );
				}
	
				_length += 1;
			};
	
			return _this;
		};
	
		//---------------------------------------------------------------------
		// qr8BitByte
		//---------------------------------------------------------------------
	
		var qr8BitByte = function(data) {
	
			var _mode = QRMode.MODE_8BIT_BYTE;
			var _data = data;
			var _bytes = qrcode.stringToBytes(data);
	
			var _this = {};
	
			_this.getMode = function() {
				return _mode;
			};
	
			_this.getLength = function(buffer) {
				return _bytes.length;
			};
	
			_this.write = function(buffer) {
				for (var i = 0; i < _bytes.length; i += 1) {
					buffer.put(_bytes[i], 8);
				}
			};
	
			return _this;
		};
	
		//=====================================================================
		// GIF Support etc.
		//
	
		//---------------------------------------------------------------------
		// byteArrayOutputStream
		//---------------------------------------------------------------------
	
		var byteArrayOutputStream = function() {
	
			var _bytes = new Array();
	
			var _this = {};
	
			_this.writeByte = function(b) {
				_bytes.push(b & 0xff);
			};
	
			_this.writeShort = function(i) {
				_this.writeByte(i);
				_this.writeByte(i >>> 8);
			};
	
			_this.writeBytes = function(b, off, len) {
				off = off || 0;
				len = len || b.length;
				for (var i = 0; i < len; i += 1) {
					_this.writeByte(b[i + off]);
				}
			};
	
			_this.writeString = function(s) {
				for (var i = 0; i < s.length; i += 1) {
					_this.writeByte(s.charCodeAt(i) );
				}
			};
	
			_this.toByteArray = function() {
				return _bytes;
			};
	
			_this.toString = function() {
				var s = '';
				s += '[';
				for (var i = 0; i < _bytes.length; i += 1) {
					if (i > 0) {
						s += ',';
					}
					s += _bytes[i];
				}
				s += ']';
				return s;
			};
	
			return _this;
		};
	
		//---------------------------------------------------------------------
		// base64EncodeOutputStream
		//---------------------------------------------------------------------
	
		var base64EncodeOutputStream = function() {
	
			var _buffer = 0;
			var _buflen = 0;
			var _length = 0;
			var _base64 = '';
	
			var _this = {};
	
			var writeEncoded = function(b) {
				_base64 += String.fromCharCode(encode(b & 0x3f) );
			};
	
			var encode = function(n) {
				if (n < 0) {
					// error.
				} else if (n < 26) {
					return 0x41 + n;
				} else if (n < 52) {
					return 0x61 + (n - 26);
				} else if (n < 62) {
					return 0x30 + (n - 52);
				} else if (n == 62) {
					return 0x2b;
				} else if (n == 63) {
					return 0x2f;
				}
				throw new Error('n:' + n);
			};
	
			_this.writeByte = function(n) {
	
				_buffer = (_buffer << 8) | (n & 0xff);
				_buflen += 8;
				_length += 1;
	
				while (_buflen >= 6) {
					writeEncoded(_buffer >>> (_buflen - 6) );
					_buflen -= 6;
				}
			};
	
			_this.flush = function() {
	
				if (_buflen > 0) {
					writeEncoded(_buffer << (6 - _buflen) );
					_buffer = 0;
					_buflen = 0;
				}
	
				if (_length % 3 != 0) {
					// padding
					var padlen = 3 - _length % 3;
					for (var i = 0; i < padlen; i += 1) {
						_base64 += '=';
					}
				}
			};
	
			_this.toString = function() {
				return _base64;
			};
	
			return _this;
		};
	
		//---------------------------------------------------------------------
		// base64DecodeInputStream
		//---------------------------------------------------------------------
	
		var base64DecodeInputStream = function(str) {
	
			var _str = str;
			var _pos = 0;
			var _buffer = 0;
			var _buflen = 0;
	
			var _this = {};
	
			_this.read = function() {
	
				while (_buflen < 8) {
	
					if (_pos >= _str.length) {
						if (_buflen == 0) {
							return -1;
						}
						throw new Error('unexpected end of file./' + _buflen);
					}
	
					var c = _str.charAt(_pos);
					_pos += 1;
	
					if (c == '=') {
						_buflen = 0;
						return -1;
					} else if (c.match(/^\s$/) ) {
						// ignore if whitespace.
						continue;
					}
	
					_buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
					_buflen += 6;
				}
	
				var n = (_buffer >>> (_buflen - 8) ) & 0xff;
				_buflen -= 8;
				return n;
			};
	
			var decode = function(c) {
				if (0x41 <= c && c <= 0x5a) {
					return c - 0x41;
				} else if (0x61 <= c && c <= 0x7a) {
					return c - 0x61 + 26;
				} else if (0x30 <= c && c <= 0x39) {
					return c - 0x30 + 52;
				} else if (c == 0x2b) {
					return 62;
				} else if (c == 0x2f) {
					return 63;
				} else {
					throw new Error('c:' + c);
				}
			};
	
			return _this;
		};
	
		//---------------------------------------------------------------------
		// gifImage (B/W)
		//---------------------------------------------------------------------
	
		var gifImage = function(width, height) {
	
			var _width = width;
			var _height = height;
			var _data = new Array(width * height);
	
			var _this = {};
	
			_this.setPixel = function(x, y, pixel) {
				_data[y * _width + x] = pixel;
			};
	
			_this.write = function(out) {
	
				//---------------------------------
				// GIF Signature
	
				out.writeString('GIF87a');
	
				//---------------------------------
				// Screen Descriptor
	
				out.writeShort(_width);
				out.writeShort(_height);
	
				out.writeByte(0x80); // 2bit
				out.writeByte(0);
				out.writeByte(0);
	
				//---------------------------------
				// Global Color Map
	
				// black
				out.writeByte(0x00);
				out.writeByte(0x00);
				out.writeByte(0x00);
	
				// white
				out.writeByte(0xff);
				out.writeByte(0xff);
				out.writeByte(0xff);
	
				//---------------------------------
				// Image Descriptor
	
				out.writeString(',');
				out.writeShort(0);
				out.writeShort(0);
				out.writeShort(_width);
				out.writeShort(_height);
				out.writeByte(0);
	
				//---------------------------------
				// Local Color Map
	
				//---------------------------------
				// Raster Data
	
				var lzwMinCodeSize = 2;
				var raster = getLZWRaster(lzwMinCodeSize);
	
				out.writeByte(lzwMinCodeSize);
	
				var offset = 0;
	
				while (raster.length - offset > 255) {
					out.writeByte(255);
					out.writeBytes(raster, offset, 255);
					offset += 255;
				}
	
				out.writeByte(raster.length - offset);
				out.writeBytes(raster, offset, raster.length - offset);
				out.writeByte(0x00);
	
				//---------------------------------
				// GIF Terminator
				out.writeString(';');
			};
	
			var bitOutputStream = function(out) {
	
				var _out = out;
				var _bitLength = 0;
				var _bitBuffer = 0;
	
				var _this = {};
	
				_this.write = function(data, length) {
	
					if ( (data >>> length) != 0) {
						throw new Error('length over');
					}
	
					while (_bitLength + length >= 8) {
						_out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
						length -= (8 - _bitLength);
						data >>>= (8 - _bitLength);
						_bitBuffer = 0;
						_bitLength = 0;
					}
	
					_bitBuffer = (data << _bitLength) | _bitBuffer;
					_bitLength = _bitLength + length;
				};
	
				_this.flush = function() {
					if (_bitLength > 0) {
						_out.writeByte(_bitBuffer);
					}
				};
	
				return _this;
			};
	
			var getLZWRaster = function(lzwMinCodeSize) {
	
				var clearCode = 1 << lzwMinCodeSize;
				var endCode = (1 << lzwMinCodeSize) + 1;
				var bitLength = lzwMinCodeSize + 1;
	
				// Setup LZWTable
				var table = lzwTable();
	
				for (var i = 0; i < clearCode; i += 1) {
					table.add(String.fromCharCode(i) );
				}
				table.add(String.fromCharCode(clearCode) );
				table.add(String.fromCharCode(endCode) );
	
				var byteOut = byteArrayOutputStream();
				var bitOut = bitOutputStream(byteOut);
	
				// clear code
				bitOut.write(clearCode, bitLength);
	
				var dataIndex = 0;
	
				var s = String.fromCharCode(_data[dataIndex]);
				dataIndex += 1;
	
				while (dataIndex < _data.length) {
	
					var c = String.fromCharCode(_data[dataIndex]);
					dataIndex += 1;
	
					if (table.contains(s + c) ) {
	
						s = s + c;
	
					} else {
	
						bitOut.write(table.indexOf(s), bitLength);
	
						if (table.size() < 0xfff) {
	
							if (table.size() == (1 << bitLength) ) {
								bitLength += 1;
							}
	
							table.add(s + c);
						}
	
						s = c;
					}
				}
	
				bitOut.write(table.indexOf(s), bitLength);
	
				// end code
				bitOut.write(endCode, bitLength);
	
				bitOut.flush();
	
				return byteOut.toByteArray();
			};
	
			var lzwTable = function() {
	
				var _map = {};
				var _size = 0;
	
				var _this = {};
	
				_this.add = function(key) {
					if (_this.contains(key) ) {
						throw new Error('dup key:' + key);
					}
					_map[key] = _size;
					_size += 1;
				};
	
				_this.size = function() {
					return _size;
				};
	
				_this.indexOf = function(key) {
					return _map[key];
				};
	
				_this.contains = function(key) {
					return typeof _map[key] != 'undefined';
				};
	
				return _this;
			};
	
			return _this;
		};
	
		var createImgTag = function(width, height, getPixel, alt) {
	
			var gif = gifImage(width, height);
			for (var y = 0; y < height; y += 1) {
				for (var x = 0; x < width; x += 1) {
					gif.setPixel(x, y, getPixel(x, y) );
				}
			}
	
			var b = byteArrayOutputStream();
			gif.write(b);
	
			var base64 = base64EncodeOutputStream();
			var bytes = b.toByteArray();
			for (var i = 0; i < bytes.length; i += 1) {
				base64.writeByte(bytes[i]);
			}
			base64.flush();
	
			var img = '';
			img += '<img';
			img += '\u0020src="';
			img += 'data:image/gif;base64,';
			img += base64;
			img += '"';
			img += '\u0020width="';
			img += width;
			img += '"';
			img += '\u0020height="';
			img += height;
			img += '"';
			if (alt) {
				img += '\u0020alt="';
				img += alt;
				img += '"';
			}
			img += '/>';
	
			return img;
		};
	    
	    var createImgBase64 = function(width, height, getPixel) {
	
			var gif = gifImage(width, height);
			for (var y = 0; y < height; y += 1) {
				for (var x = 0; x < width; x += 1) {
					gif.setPixel(x, y, getPixel(x, y) );
				}
			}
	
			var b = byteArrayOutputStream();
			gif.write(b);
	
			var base64 = base64EncodeOutputStream();
			var bytes = b.toByteArray();
			for (var i = 0; i < bytes.length; i += 1) {
				base64.writeByte(bytes[i]);
			}
			base64.flush();
	
			return base64.toString();
		};
	
		//---------------------------------------------------------------------
		// returns qrcode function.
	
		return qrcode;
	}();
	
	module.exports = qrcode;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _uniqId = __webpack_require__(9);
	
	var _uniqId2 = _interopRequireDefault(_uniqId);
	
	var _miniDefer = __webpack_require__(3);
	
	var _miniDefer2 = _interopRequireDefault(_miniDefer);
	
	var _const = __webpack_require__(1);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Channel = function () {
	  function Channel(handlers) {
	    _classCallCheck(this, Channel);
	
	    this.connect = (0, _miniDefer2.default)();
	
	    this.promises = {};
	    this.handlers = {};
	
	    if (handlers) {
	      this.on(handlers);
	    }
	  }
	
	  _createClass(Channel, [{
	    key: 'ready',
	    value: function ready(fn) {
	      this.connect.promise.then(fn);
	      return this;
	    }
	  }, {
	    key: 'on',
	    value: function on(action, fn, replace) {
	      var _this = this;
	
	      var revokes = void 0;
	      if (!fn && (typeof action === 'undefined' ? 'undefined' : _typeof(action)) == 'object') {
	        revokes = [];
	        Object.keys(action).forEach(function (key) {
	          revokes.push(_this._on(key, action[key], replace));
	        });
	      } else {
	        revokes = [this._on(action, fn, replace)];
	      }
	
	      return {
	        on: this.on.bind(this),
	        revoke: revokes[0],
	        revokes: revokes
	      };
	    }
	  }, {
	    key: '_on',
	    value: function _on(action, fn, replace) {
	      var _this2 = this;
	
	      var revoke = function revoke() {};
	      if (action && fn) {
	        if (replace || !this.handlers[action]) {
	          this.handlers[action] = [];
	        }
	        this.handlers[action].push(fn);
	        revoke = function revoke() {
	          _this2.off(action, fn);
	        };
	      }
	
	      return revoke;
	    }
	  }, {
	    key: 'off',
	    value: function off(action, fn) {
	      if (action && this.handlers[action]) {
	        if (fn) {
	          var idx = this.handlers[action].indexOf(fn);
	          if (idx >= 0) {
	            this.handlers[action].splice(idx, 1);
	          }
	        } else {
	          this.handlers[action] = [];
	        }
	      } else if (action == '!') {
	        this.handlers = {};
	      }
	
	      return this;
	    }
	  }, {
	    key: 'emit',
	    value: function emit(action, data, responder) {
	      var ret = [];
	      var halted = false;
	      if (action && this.handlers[action]) {
	        var handlers = this.handlers[action];
	        ret = handlers.map(function (fn) {
	          var _ret = void 0;
	          if (!halted) {
	            _ret = fn(data, responder);
	            if (false === _ret) {
	              halted = true;
	            }
	          }
	          return _ret;
	        });
	      }
	
	      if (action != '*' && this.handlers['*']) {
	        ret = ret.concat(this.handlers['*'].map(function (fn) {
	          return fn(action, data);
	        }));
	      }
	
	      return ret;
	    }
	  }, {
	    key: 'push',
	    value: function push(action) {
	      var _this3 = this;
	
	      var data = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	
	      this.ready(function () {
	        _this3._send(action, data);
	      });
	    }
	  }, {
	    key: 'send',
	    value: function send(action, data, _id, fn) {
	      var _this4 = this;
	
	      var id = _id || this._unique_id();
	
	      this.ready(function () {
	        _this4._send(action, data, id);
	      });
	
	      if (fn && typeof fn == 'function') {
	        this.promises[id] = fn;
	        return id;
	      } else {
	        var deferred = (0, _miniDefer2.default)();
	        this.promises[id] = deferred;
	
	        return deferred.promise;
	      }
	    }
	  }, {
	    key: 'handleMessage',
	    value: function handleMessage(e) {
	      var _this5 = this;
	
	      if (false === this._processMessage(e)) {
	        return;
	      }
	
	      var eData = void 0,
	          id = void 0,
	          action = void 0,
	          data = void 0;
	      try {
	        eData = e.data;
	        if (typeof eData == 'string') {
	          if (_const.isIPhone || _const.isIPad) {
	            eData = eData.replace(/[\r\n\t]+/g, '');
	          }
	          eData = JSON.parse(eData);
	        }
	        if (!eData.action && !eData.id && !eData.callback) throw new Error();
	      } catch (err) {
	        this.emit('error', { type: 'json', source: eData, err: err });
	        this.emit('error.json', { source: eData, err: err });
	
	        alert('HB_APP_SDK: json parse fail\n' + eData);
	        throw new Error('HB_APP_SDK: malformed message');
	      }
	
	      id = eData.id || eData.callback;
	      action = eData.action;
	      data = eData.params || eData.data;
	
	      if (id) {
	        if (id in this.promises) {
	          var promise = this.promises[id];
	
	          if (promise.resolve) {
	            if (eData.error) {
	              promise.reject(eData.error);
	            } else if (eData.result) {
	              promise.resolve(eData.result);
	            } else {
	              promise.reject({ cancelled: true });
	            }
	            this.promises[id] = null;
	          } else {
	            if (eData.result || eData.error) {
	              this.promises[id](eData.result, eData.error);
	            } else {
	              this.promises[id](null, { cancelled: true });
	            }
	          }
	        } else if (action && this.handlers[action]) {
	          var responder = function responder(ret) {
	            _this5.send(action, ret, id);
	          };
	          this.emit(action, data, responder);
	        }
	      } else if (action) {
	        this.emit(action, data);
	        if (data && data.action) {
	          this.emit(action + '.' + data.action, data.data);
	        }
	      } else {
	        this.emit('*', data);
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.off('!');
	      this.connect = (0, _miniDefer2.default)();
	    }
	  }, {
	    key: '_send',
	    value: function _send() {}
	  }, {
	    key: '_processMessage',
	    value: function _processMessage(e) {
	      return e;
	    }
	  }, {
	    key: '_unique_id',
	    value: function _unique_id() {
	      var prefix = arguments.length <= 0 || arguments[0] === undefined ? 'cb_' : arguments[0];
	      var length = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];
	      var decimal = arguments.length <= 2 || arguments[2] === undefined ? 16 : arguments[2];
	
	      var x64 = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
	
	      return _uniqId2.default.generateUUID(prefix + x64.substr(0, length), decimal)();
	    }
	  }]);
	
	  return Channel;
	}();
	
	exports.default = Channel;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	var UUID,
	    SEQUENCE = 'xxxxyxxxxyxxxxyxxxxy',
	    CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	    CHAR_N = 16;
	
	function generateUUID(sequence, charN) {
	    sequence = typeof sequence === 'string' ? sequence : SEQUENCE;
	
	    charN = typeof charN === 'number' ? charN : CHAR_N;
	
	    var chars = CHARS.slice(0, charN);
	
	    function UUID() {
	        var d = new Date().getTime();
	        var L = chars.length;
	        return sequence.replace(/[xy]/g, function(c) {
	            var r = (d + Math.random()*L)%L | 0;
	            d = Math.floor(d/L);
	            return chars[(c === 'x' ? r : (r&0x3|0x8))];
	        });
	    }
	
	    return UUID;
	}
	
	UUID = generateUUID();
	
	UUID.generateUUID = generateUUID;
	
	module.exports = UUID;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _index = __webpack_require__(5);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ClientWebview = function (_Client) {
	  _inherits(ClientWebview, _Client);
	
	  function ClientWebview() {
	    _classCallCheck(this, ClientWebview);
	
	    return _possibleConstructorReturn(this, (ClientWebview.__proto__ || Object.getPrototypeOf(ClientWebview)).apply(this, arguments));
	  }
	
	  _createClass(ClientWebview, [{
	    key: 'init',
	    value: function init(applicationId) {
	      this.connect.resolve();
	
	      window.HB = window.HB || {};
	      window.HB.bridgeCallback = this.handleBridgeInvoke.bind(this, 'callback');
	      window.HB.bridgeCancel = this.handleBridgeInvoke.bind(this, 'cancel');
	      window.HB.bridgeEmit = this.handleBridgeInvoke.bind(this, 'emit');
	
	      return this._init(applicationId);
	    }
	  }, {
	    key: '_send',
	    value: function _send(action, data, id) {
	      var urlArr = ['huoban://hybrid?action=' + encodeURIComponent(action)];
	      if (id) {
	        urlArr.push('callback=' + encodeURIComponent(id));
	      }
	      if (data) {
	        urlArr.push('params=' + encodeURIComponent(JSON.stringify(data)));
	      }
	
	      var url = urlArr.join('&');
	      this._invokeNative(url);
	    }
	  }, {
	    key: '_invokeNative',
	    value: function _invokeNative(url) {
	      var iframe = document.createElement('iframe');
	      iframe.style.width = 0;
	      iframe.style.height = 0;
	      iframe.style.display = 'none';
	      iframe.src = url;
	      document.body.appendChild(iframe);
	      setTimeout(function () {
	        iframe.parentNode.removeChild(iframe);
	      }, 100);
	    }
	  }, {
	    key: 'handleBridgeInvoke',
	    value: function handleBridgeInvoke(type, resp) {
	      return this.handleMessage({ data: resp });
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      _get(ClientWebview.prototype.__proto__ || Object.getPrototypeOf(ClientWebview.prototype), 'destroy', this).call(this);
	      delete window.HB.bridgeCallback;
	      delete window.HB.bridgeCancel;
	      delete window.HB.bridgeEmit;
	    }
	  }]);
	
	  return ClientWebview;
	}(_index2.default);
	
	exports.default = ClientWebview;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _webview = __webpack_require__(10);
	
	var _webview2 = _interopRequireDefault(_webview);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ClientWebviewUrl = function (_ClientWebview) {
	  _inherits(ClientWebviewUrl, _ClientWebview);
	
	  function ClientWebviewUrl() {
	    _classCallCheck(this, ClientWebviewUrl);
	
	    return _possibleConstructorReturn(this, (ClientWebviewUrl.__proto__ || Object.getPrototypeOf(ClientWebviewUrl)).apply(this, arguments));
	  }
	
	  _createClass(ClientWebviewUrl, [{
	    key: '_invokeNative',
	    value: function _invokeNative(url) {
	      window.prompt(url, '');
	    }
	  }]);
	
	  return ClientWebviewUrl;
	}(_webview2.default);
	
	exports.default = ClientWebviewUrl;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _miniDefer = __webpack_require__(3);
	
	var _miniDefer2 = _interopRequireDefault(_miniDefer);
	
	var _const = __webpack_require__(1);
	
	var _channel = __webpack_require__(8);
	
	var _channel2 = _interopRequireDefault(_channel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Host = function (_Channel) {
	  _inherits(Host, _Channel);
	
	  function Host() {
	    _classCallCheck(this, Host);
	
	    return _possibleConstructorReturn(this, (Host.__proto__ || Object.getPrototypeOf(Host)).apply(this, arguments));
	  }
	
	  _createClass(Host, [{
	    key: 'init',
	    value: function init() {
	      var _this2 = this;
	
	      this.heartbeatFrequency = 5;
	      this.connections = {};
	      this.handleHandshake = this._handleHandshake.bind(this);
	      window.addEventListener('message', this.handleHandshake, false);
	      this.ready(function (r) {
	        _this2.runHeartbeatDetection();
	      });
	    }
	  }, {
	    key: 'runHeartbeatDetection',
	    value: function runHeartbeatDetection() {
	      var _this3 = this;
	
	      this.getPorts().forEach(function (_ref) {
	        var client = _ref.client;
	        var port = _ref.port;
	        var lastPing = _ref.lastPing;
	
	        if (lastPing && _this3.now() - lastPing > _this3.heartbeatFrequency * 2 * 1000) {
	          console.log('close', client, (_this3.now() - lastPing) / 1000);
	          _this3._close(client);
	        } else {
	          _this3.push(client, _const.MSG_TYPES.PING);
	        }
	      });
	
	      setTimeout(function (r) {
	        _this3.runHeartbeatDetection();
	      }, this.heartbeatFrequency * 1000);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy(clean) {
	      var _this4 = this;
	
	      _get(Host.prototype.__proto__ || Object.getPrototypeOf(Host.prototype), 'destroy', this).call(this);
	      this.getPorts().forEach(function (_ref2) {
	        var client = _ref2.client;
	
	        _this4._close(client);
	      });
	      this.connections = {};
	
	      if (clean) {
	        window.removeEventListener('message', this.handleHandshake);
	      }
	    }
	  }, {
	    key: '_close',
	    value: function _close(client) {
	      if (this.connections[client]) {
	        this.connections[client].port.close();
	        this.connections[client].port.onmessage = null;
	        delete this.connections[client];
	      }
	    }
	  }, {
	    key: 'now',
	    value: function now() {
	      return Date.now();
	    }
	  }, {
	    key: 'report',
	    value: function report() {
	      var conns = 0;
	      var appClients = this.getPorts().reduce(function (ret, con) {
	        conns++;
	        if (!ret[con.application_id]) {
	          ret[con.application_id] = 0;
	        }
	        ret[con.application_id]++;
	        return ret;
	      }, {});
	      var appIds = Object.keys(appClients);
	
	      console.log('当前已连接应用数：', appIds.length, ', 已连接页面总数：', conns, ', 应用计数统计：', appClients);
	    }
	  }, {
	    key: 'getPorts',
	    value: function getPorts(applicationId) {
	      var _this5 = this;
	
	      return Object.keys(this.connections).reduce(function (ret, key) {
	        if (!applicationId || _this5.connections[key].application_id == applicationId) {
	          ret.push(_this5.connections[key]);
	        }
	        return ret;
	      }, []);
	    }
	  }, {
	    key: '_handleHandshake',
	    value: function _handleHandshake(e) {
	      var _this6 = this;
	
	      var eDataArr = e.data && e.data.split ? e.data.split(':') : [];
	      if (eDataArr.length == 3 && eDataArr[0] == _const.MSG_TYPES.CONNECT && e.ports.length) {
	        var _ret = function () {
	          var aId = eDataArr[1];
	          var cUnique = eDataArr[2];
	          if (!aId || _this6.getPorts(aId).length >= 10) {
	            e.ports[0].postMessage({
	              action: _const.MSG_TYPES.CONNECT,
	              data: { error: { message: 'Too many connections' } }
	            });
	            return {
	              v: void 0
	            };
	          }
	
	          _this6.connections[cUnique] = {
	            client: cUnique,
	            application_id: aId,
	            port: e.ports[0]
	          };
	
	          var responder = function responder(welcomeMessage, errMessage) {
	            if (errMessage) {
	              if (_this6.connections[cUnique]) {
	                _this6._send(cUnique, _const.MSG_TYPES.CONNECT, { error: { message: errMessage } });
	              }
	              delete _this6.connections[cUnique];
	            } else {
	              _this6.connections[cUnique].port.onmessage = _this6.handlePortMessage.bind(_this6, cUnique);
	              _this6.connect.resolve(cUnique);
	              _this6.push(cUnique, _const.MSG_TYPES.CONNECT, { result: { message: welcomeMessage } });
	            }
	          };
	
	          _this6.emit('connect', { application_id: aId, origin: e.origin, client: cUnique }, responder);
	        }();
	
	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	    }
	  }, {
	    key: 'send',
	    value: function send(client, action, data, _id) {
	      var _this7 = this;
	
	      var id = _id || this._unique_id('h_');
	
	      this.ready(function () {
	        _this7._send(client, action, data, id);
	      });
	
	      var deferred = (0, _miniDefer2.default)();
	      this.promises[id] = deferred;
	
	      return deferred.promise;
	    }
	  }, {
	    key: 'push',
	    value: function push(client, action) {
	      var _this8 = this;
	
	      var data = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	      this.ready(function () {
	        _this8._send(client, action, data);
	      });
	    }
	  }, {
	    key: '_send',
	    value: function _send(client, action, data, id) {
	      if (this.connections[client]) {
	        var payload = { action: action };
	        if (data) {
	          payload.data = data;
	        }
	        if (id) {
	          payload.id = id;
	        }
	
	        this.connections[client].port.postMessage(payload);
	      } else {
	        this.emit('error', { type: 'send', data: { message: '连接不存在' } });
	      }
	    }
	  }, {
	    key: 'handlePortMessage',
	    value: function handlePortMessage(client, e) {
	      var _this9 = this;
	
	      if (false === this._processMessage(e, client)) {
	        return;
	      }
	
	      if (!this.connections[client]) {
	        throw new Error('message client error: ' + client);
	      }
	
	      var eData = void 0,
	          id = void 0,
	          action = void 0;
	      try {
	        eData = e.data;
	        if (typeof eData == 'string') {
	          eData = JSON.parse(eData);
	        }
	        if (!eData.action && !eData.id && eData.callback) throw new Error();
	      } catch (err) {
	        throw new Error('HB_APP_SDK: malformed message');
	      }
	
	      id = eData.id || eData.callback;
	      action = eData.action;
	
	      var responder = void 0;
	      if (id) {
	        responder = function responder(result, error) {
	          if (error) {
	            _this9.connections[client].port.postMessage({ id: id, error: error });
	          } else {
	            _this9.connections[client].port.postMessage({ id: id, result: result });
	          }
	        };
	      } else {}
	
	      this.emit(action, {
	        application_id: parseInt(this.connections[client].application_id, 10),
	        params: eData.data
	      }, responder);
	    }
	  }, {
	    key: '_processMessage',
	    value: function _processMessage(e, client) {
	      switch (e.data.action) {
	        case _const.MSG_TYPES.DISCONNECT:
	          this._close(client);
	          return false;
	        case _const.MSG_TYPES.BROADCAST:
	          this._broadcast(this.connections[client].application_id, e.data.data, [client]);
	          return false;
	        case _const.MSG_TYPES.PING:
	          this.connections[client].lastPing = this.now();
	          return false;
	      }
	    }
	  }, {
	    key: 'broadcast',
	    value: function broadcast(action, data) {
	      var aId = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	      this._broadcast(aId, data ? { action: action, data: data } : { action: action });
	    }
	  }, {
	    key: '_broadcast',
	    value: function _broadcast(aId, data) {
	      var _this10 = this;
	
	      var exclude = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	
	      this.getPorts(aId).forEach(function (_ref3) {
	        var client = _ref3.client;
	        var port = _ref3.port;
	
	        if (exclude.indexOf(client) === -1) {
	          _this10.push(client, _const.MSG_TYPES.BROADCAST, data);
	        }
	      });
	    }
	  }]);
	
	  return Host;
	}(_channel2.default);
	
	exports.default = Host;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=HuobanAppSDK_QR.js.map